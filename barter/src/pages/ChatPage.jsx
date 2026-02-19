import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Sidebar } from '../components/ChatPage/Sidebar';
import { ChatWindow } from '../components/ChatPage/ChatWindow';

// Mock Data
const MOCK_THREADS = [
  {
    id: 'thread-1',
    name: 'Blessing Oluwaseun',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Blessing',
    lastMsg: 'Can we meet at the tech hub?',
    time: '2m ago',
    activeTrade: false,
    proposal: { terms: 'Web Dev for Logo Design' }
  }
];

export default function CommunityChatPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeThreadId, setActiveThreadId] = useState('ai-assistant');
  const [threads, setThreads] = useState([]);

  // Lock body scroll when this component mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setThreads(MOCK_THREADS);
      setLoading(false);
    }, 1000);

    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scroll on unmount
      clearTimeout(timer);
    };
  }, []);

  const activeThread = activeThreadId === 'ai-assistant' 
    ? { id: 'ai-assistant', name: 'AI Concierge', isAI: true }
    : threads.find(t => t.id === activeThreadId);

  return (
    // We use w-screen h-screen to take over the entire viewport
    <div className="fixed inset-0 flex bg-white z-100 overflow-hidden">
      
      {/* 1. CUSTOM SIDEBAR */}
      <Sidebar 
        threads={threads}
        activeId={activeThreadId}
        backButton={
            <button 
              onClick={() => navigate(-1)} 
              className="md:hidden p-2 -ml-2 mr-2 text-slate-500"
            >
              <ArrowLeft className="size-5" />
            </button>
          }
        onSelect={(id) => {
          setActiveThreadId(id);
          if (window.innerWidth < 768) setSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        loading={loading}
        // Custom addition: Header for sidebar to go home
        headerActions={
          <button 
            onClick={() => navigate('/')} 
            className="p-2 -ml-2 hover:bg-slate-200 rounded-full transition-colors"
          >
            <ArrowLeft className="size-5 text-slate-600" />
          </button>
        }
      />

      {/* 2. CHAT AREA */}
      <div className="flex-1 flex flex-col min-w-0 bg-white relative">
        <ChatWindow 
          activeThread={activeThread}
          loading={loading}
          onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
          messages={[
            { sender: 'Blessing', text: 'Hi! I saw your portfolio.', isMe: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Blessing' },
            { sender: 'You', text: 'Thanks! Let’s talk business.', isMe: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You' }
          ]}
          // Allow ChatWindow to also have a Back button on mobile
          backButton={
            <button 
              onClick={() => navigate(-1)} 
              className="md:hidden p-2 -ml-2 mr-2 text-slate-500"
            >
              <ArrowLeft className="size-5" />
            </button>
          }
        />
      </div>
    </div>
  );
}