import React, { useEffect, useRef, useState } from 'react';
import { ConversationLine } from '../data';
import { playChineseAudio } from '../utils';

const WOMAN_AVATAR = 'https://vinada.vn/app/woman.jpg';
const MAN_AVATAR = 'https://vinada.vn/app/man.jpg';

interface ConversationProps {
  data: ConversationLine[];
}

export default function Conversation({ data }: ConversationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [readMessages, setReadMessages] = useState<Set<number>>(new Set());

  // Handle intersection observer to auto-play A's messages when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            const msg = data.find((m) => m.id === id);
            if (msg && msg.speaker === 'A' && !readMessages.has(id)) {
              playChineseAudio(msg.hanzi);
              setReadMessages((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.message-bubble');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [readMessages, data]);

  return (
    <div 
      ref={containerRef}
      className="flex-1 overflow-y-auto p-[20px] space-y-4 bg-slate-50 h-full scroll-smooth"
    >
      {data.map((line) => {
        const isA = line.speaker === 'A';
        return (
          <div
            key={line.id}
            data-id={line.id}
            className={`message-bubble flex items-start gap-2 w-full ${isA ? '' : 'flex-row-reverse'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 overflow-hidden bg-slate-200`}>
              {isA ? (
                <img src={WOMAN_AVATAR} alt="Zheng Xian" className="w-full h-full object-cover" />
              ) : (
                <img src={MAN_AVATAR} alt="Kelvin Hieu" className="w-full h-full object-cover" />
              )}
            </div>
            
            <div className="max-w-[80%]">
              <p className={`text-[10px] text-slate-500 mb-1 ${isA ? '' : 'text-right'}`}>
                {isA ? 'Zheng Xian' : 'Kelvin Hieu'}
              </p>
              
              <div 
                className={`rounded-2xl p-3 shadow-sm relative cursor-pointer active:scale-[0.98] transition-transform ${
                isA
                  ? 'bg-white'
                  : 'bg-blue-600 text-white'
              }`}
                onClick={() => playChineseAudio(line.hanzi)}
              >
                {/* Speech bubble tail pointing to the avatar */}
                {isA ? (
                  <div className="absolute top-4 -left-1 w-3 h-3 bg-white transform rotate-45 rounded-sm"></div>
                ) : (
                  <div className="absolute top-4 -right-1 w-3 h-3 bg-blue-600 transform rotate-45 rounded-sm"></div>
                )}
                
                <p 
                  className={`text-[14px] font-bold tracking-wide lowercase relative z-10 ${isA ? 'text-slate-900' : 'text-white'}`}
                  style={{ lineHeight: '1.5', marginBottom: '6px' }}
                >
                  {line.pinyin}
                </p>
                <p 
                  className={`text-[12px] font-bold relative z-10 ${isA ? 'text-slate-800' : 'text-blue-200'}`}
                  style={{ lineHeight: '1.3', marginBottom: '8px' }}
                >
                  {line.hanzi}
                </p>
                <p className={`text-[14px] border-t pt-1 relative z-10 ${isA ? 'text-slate-600 border-slate-100' : 'text-blue-100 border-blue-500'}`}>
                  {line.vietnamese}
                </p>
                {line.english && (
                  <p className={`text-[12px] pt-0.5 relative z-10 ${isA ? 'text-slate-500' : 'text-blue-200'}`}>
                    {line.english}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
