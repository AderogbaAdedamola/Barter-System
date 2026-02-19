export function MessageBubble({ message, isMe, isAI }) {
  return (
    <div className={`flex gap-4 ${isMe ? 'flex-row-reverse' : ''} group animate-in fade-in slide-in-from-bottom-2`}>
      <img 
        src={message.avatar} 
        className={`size-8 rounded-lg object-cover flex-shrink-0 shadow-sm ${isAI ? 'ring-2 ring-slate-900' : ''}`} 
        alt="" 
      />
      <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[85%] sm:max-w-[70%]`}>
        <div className={`p-4 rounded-[1.5rem] text-sm leading-relaxed ${
          isMe 
            ? 'bg-slate-900 text-white rounded-tr-none' 
            : 'bg-slate-50 text-slate-700 rounded-tl-none border border-slate-100'
        }`}>
          {message.text}
        </div>
        <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mt-2 px-1">
          {message.timestamp || 'Just now'}
        </span>
      </div>
    </div>
  );
}