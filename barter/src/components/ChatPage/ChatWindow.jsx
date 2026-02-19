import React from 'react';
import { Menu, Info, AlertCircle } from 'lucide-react';
import { TradeStatusBar } from './TradeStatusBar';
import { PinnedTrade } from './PinnedTrade';
import { ChatHeader } from './ChatHeader';
import { MessageBubble } from './MessageBubble';
import { ChatInput } from './ChatInput';

export function ChatWindow({ 
  activeThread, 
  messages = [], 
  loading, 
  onToggleSidebar, 
  onStartTrade, 
  onCancelTrade, 
  onCompleteTrade,
  backButton 
}) {
  
  if (!activeThread && !loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-white p-8 text-center">
        <div className="size-16 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-4">
          <AlertCircle className="size-8 text-slate-200" />
        </div>
        <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Select a Conversation</h3>
        <p className="text-slate-500 text-xs mt-2 max-w-[200px]">Choose a partner to start discussing your next skill swap.</p>
      </div>
    );
  }

  const isTradeActive = activeThread?.activeTrade;
  const hasProposal = activeThread?.proposal;

  return (
    <div className="flex-1 flex flex-col bg-white relative overflow-hidden">
      {/* HEADER */}
      <ChatHeader 
        name={activeThread?.name} 
        isAI={activeThread?.isAI} 
        onToggle={onToggleSidebar}
        backButton={backButton} 
      />

      {/* DYNAMIC TRADE MANAGEMENT BARS */}
      {!loading && (
        <div className="z-20">
          {/* State: Negotiation */}
          {!isTradeActive && hasProposal && (
            <PinnedTrade 
              terms={activeThread.proposal.terms} 
              onAccept={onStartTrade} 
            />
          )}

          {/* State: Execution */}
          {isTradeActive && (
            <TradeStatusBar 
              onCancel={onCancelTrade} 
              onComplete={onCompleteTrade} 
            />
          )}
        </div>
      )}

      {/* MESSAGE STREAM */}
      <div className="flex-1 overflow-y-auto px-4 md:px-0">
        <div className="max-w-3xl mx-auto py-10 space-y-8">
          {messages.map((msg, idx) => (
            <MessageBubble 
              key={idx} 
              message={msg} 
              isMe={msg.isMe} 
              isAI={activeThread?.isAI} 
            />
          ))}
          
          {isTradeActive && (
            <div className="flex flex-col items-center gap-4 py-8">
              <div className="h-px w-full max-w-[200px] bg-slate-100" />
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
                Trade Session Started
              </div>
            </div>
          )}
        </div>
      </div>

      {/* INPUT AREA */}
      <ChatInput loading={loading} placeholder={activeThread?.isAI ? "Ask AI for help..." : "Type a message..."} />
    </div>
  );
}