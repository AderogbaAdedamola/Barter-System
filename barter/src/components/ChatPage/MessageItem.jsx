export default function MessageItem({ message, isMe }) {
  return (
    <div className={`flex gap-4 mb-8 ${isMe ? 'flex-row-reverse' : ''} max-w-3xl mx-auto w-full px-4`}>
      <img 
        src={message.avatar} 
        className="size-9 rounded-lg object-cover flex-shrink-0" 
        alt="" 
      />
      <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-black text-slate-900">{message.userName}</span>
          <span className="text-[10px] text-slate-400">{message.time}</span>
        </div>
        <div className={`text-sm leading-relaxed ${isMe ? 'text-right' : 'text-left text-slate-600'}`}>
          {message.text}
        </div>
      </div>
    </div>
  );
}