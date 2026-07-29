import React, { useState } from 'react';
import { Grammar as GrammarType } from '../data';
import { playChineseAudio, getExampleEnglish } from '../utils';
import GrammarQuiz from './GrammarQuiz';

interface GrammarProps {
  data: GrammarType[];
}

export default function Grammar({ data }: GrammarProps) {
  const [isQuizMode, setIsQuizMode] = useState(false);

  if (isQuizMode) {
    return <GrammarQuiz data={data} onBack={() => setIsQuizMode(false)} />;
  }

  return (
    <div className="flex-1 overflow-y-auto p-[20px] bg-slate-50 h-full scroll-smooth">
      <div className="space-y-6">
        {data.map((grammar) => (
          <div key={grammar.id} className="bg-white rounded-2xl shadow-sm border-2 border-slate-200 border-t-4 border-t-orange-500 p-5 overflow-hidden">
            <h3 className="text-lg font-bold text-orange-600 mb-2">{grammar.title}</h3>
            <p className="text-sm text-slate-700 mb-4">{grammar.description}</p>
            
            <div className="space-y-3 bg-orange-50/50 rounded-xl p-4">
              <p className="text-xs font-semibold text-orange-400 uppercase tracking-wide">Ví dụ</p>
              {grammar.examples.map((ex, i) => (
                <div 
                  key={i} 
                  onClick={() => playChineseAudio(ex.hanzi)}
                  className="flex flex-col space-y-1 pb-3 border-b border-orange-100 last:border-0 last:pb-0 cursor-pointer hover:bg-orange-100 rounded-lg p-2 transition-colors -mx-2 px-2 active:bg-orange-200"
                >
                  <span className="text-[14px] font-bold text-slate-600">{ex.pinyin}</span>
                  <span className="text-[12px] font-bold text-slate-800">{ex.hanzi}</span>
                  <span className="text-sm text-slate-500">{ex.vietnamese}</span>
                  {getExampleEnglish(ex) && (
                    <span className="text-xs text-slate-400 font-normal">{getExampleEnglish(ex)}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="my-[30px]">
        <button 
          onClick={() => setIsQuizMode(true)}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg shadow-md hover:shadow-lg active:scale-95 transition-all"
        >
          KIỂM TRA
        </button>
      </div>
    </div>
  );
}
