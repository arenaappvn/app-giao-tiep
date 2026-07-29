import React, { useState, useEffect } from 'react';
import { Volume2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Vocabulary as VocabularyType } from '../data';
import { playChineseAudio, getHanViet, getExampleEnglish, getPrimaryVietnamese } from '../utils';

interface VocabularyProps {
  data: VocabularyType[];
}

export default function Vocabulary({ data }: VocabularyProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset index when data changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [data]);

  const vocab = data[currentIndex];

  useEffect(() => {
    if (!vocab) return;
    if (!isFlipped) {
      playChineseAudio(vocab.hanzi);
    } else {
      playChineseAudio(vocab.example.hanzi);
    }
  }, [currentIndex, isFlipped, vocab]);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
    setIsFlipped(false);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(data.length - 1);
    }
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (!vocab) return null;

  return (
    <div className="flex-1 flex flex-col p-[20px] bg-slate-50 h-full overflow-hidden">
      <div className="flex justify-center mb-4 shrink-0">
        <div className="bg-red-50 text-red-500 px-5 py-2 rounded-full font-bold text-sm">
          Thẻ số {currentIndex + 1} / {data.length}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative perspective-1000 mb-4 min-h-0">
        <div
          onClick={handleFlip}
          className={`w-[95%] max-w-[340px] h-full max-h-[370px] relative transition-transform duration-500 transform-style-preserve-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 backface-hidden bg-[#fef3c7] rounded-[2.5rem] border-[8px] border-[#fde68a] flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                playChineseAudio(vocab.hanzi);
              }}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm hover:scale-105 transition-transform"
            >
              <Volume2 size={24} />
            </button>
            <div className="flex flex-col items-center space-y-4 w-full">
              <h2 className="text-[45px] sm:text-[55px] leading-tight font-black text-orange-500 lowercase tracking-wider w-full text-center px-2 break-words">{vocab.pinyin}</h2>
              <p className="text-[3rem] sm:text-[3.5rem] leading-none font-bold text-[#785b3b]">{vocab.hanzi}</p>
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 backface-hidden bg-[#00c885] rounded-[2.5rem] flex flex-col items-center justify-center px-[15px] py-6 border-[8px] border-[#00c885]"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                playChineseAudio(vocab.example.hanzi);
              }}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#1fd599] flex items-center justify-center text-white hover:scale-105 transition-transform"
            >
              <Volume2 size={24} />
            </button>

            <div className="w-full flex flex-col items-center justify-center h-full space-y-4 pt-6">
              <div className="flex flex-col items-center text-center">
                <p className="text-[14px] font-semibold text-white/95 tracking-widest uppercase mb-1">
                  {getHanViet(vocab.hanzi, vocab.hanViet)}
                </p>
                <h3 className="text-[2.2rem] font-bold text-white text-center leading-tight drop-shadow-sm">{getPrimaryVietnamese(vocab.vietnamese, vocab.hanzi)}</h3>
              </div>
              
              <div className="w-full bg-black/10 p-3.5 rounded-2xl flex flex-col items-center justify-center text-center space-y-1 shadow-inner border border-white/20">
                <p className="text-white text-lg font-medium lowercase tracking-wide opacity-90 leading-none">{vocab.example.pinyin}</p>
                <p className="text-white text-[20px] font-bold tracking-widest">{vocab.example.hanzi}</p>
                <p className="text-white text-base opacity-90 leading-tight">{vocab.example.vietnamese}</p>
                {getExampleEnglish(vocab.example) && (
                  <p className="text-white/85 text-[12px] leading-tight pt-0.5 font-normal">{getExampleEnglish(vocab.example)}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 mb-[50px]">
        <button
          onClick={handlePrev}
          className="w-14 h-14 rounded-full bg-white border-4 border-red-50 flex items-center justify-center text-red-500 shadow-sm transition-all hover:bg-red-50 active:scale-95"
        >
          <ChevronLeft size={28} strokeWidth={3} />
        </button>
        <button
          onClick={handleNext}
          className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-200 transition-all hover:bg-red-700 active:scale-95"
        >
          <ChevronRight size={28} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
