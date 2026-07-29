import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Vocabulary as VocabularyType } from '../data';
import { playChineseAudio, playCorrectSound, playWrongSound, playSuccessSound, getVocabEnglish, getPrimaryVietnamese } from '../utils';

// Generate 4 options for a question
const generateOptions = (correctIndex: number, length: number) => {
  const options = new Set<number>();
  options.add(correctIndex);
  while (options.size < 4 && options.size < length) {
    const rand = Math.floor(Math.random() * length);
    options.add(rand);
  }
  return Array.from(options).sort(() => Math.random() - 0.5);
};

// Helper function to format Vietnamese text according to word length rules
function formatQuizVietnamese(vietnamese: string, hanzi: string) {
  const text = getPrimaryVietnamese(vietnamese, hanzi);
  const words = text.trim().split(/\s+/);

  if (words.length === 3) {
    return (
      <span className="inline-block">
        {words[0]}
        <br />
        {words.slice(1).join(' ')}
      </span>
    );
  }

  if (words.length === 4) {
    return (
      <span className="inline-block">
        {words.slice(0, 2).join(' ')}
        <br />
        {words.slice(2).join(' ')}
      </span>
    );
  }

  if (words.length > 4) {
    const mid = Math.ceil(words.length / 2);
    return (
      <span className="inline-block">
        {words.slice(0, mid).join(' ')}
        <br />
        {words.slice(mid).join(' ')}
      </span>
    );
  }

  return text;
}

interface QuizProps {
  data: VocabularyType[];
}

export default function Quiz({ data }: QuizProps) {
  const [questions, setQuestions] = useState<number[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [options, setOptions] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Initialize quiz
  useEffect(() => {
    if (data.length === 0) return;
    const shuffled = Array.from(Array(data.length).keys()).sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setOptions(generateOptions(shuffled[0], data.length));
    setCurrentQIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(null);
    playChineseAudio(data[shuffled[0]].hanzi);
  }, [data]);

  const handleSelect = (optionIndex: number) => {
    if (selectedOption !== null) return; // Prevent multiple clicks

    setSelectedOption(optionIndex);
    const correctIndex = questions[currentQIndex];

    if (optionIndex === correctIndex) {
      setScore((prev) => prev + 10);
      playCorrectSound();
    } else {
      playWrongSound();
    }

    // Move to next quickly
    setTimeout(() => {
      setSelectedOption(null);
      if (currentQIndex < questions.length - 1) {
        const nextIndex = currentQIndex + 1;
        setCurrentQIndex(nextIndex);
        setOptions(generateOptions(questions[nextIndex], data.length));
        playChineseAudio(data[questions[nextIndex]].hanzi);
      } else {
        finishQuiz();
      }
    }, 300); // 300ms delay for quick feedback
  };

  const finishQuiz = () => {
    setIsFinished(true);
  };

  useEffect(() => {
    if (isFinished) {
      const maxScore = data.length * 10;
      if (score >= maxScore * 0.9) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
        playSuccessSound();
      }
    }
  }, [isFinished, score, data.length]);

  const restartQuiz = () => {
    const shuffled = Array.from(Array(data.length).keys()).sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setOptions(generateOptions(shuffled[0], data.length));
    setCurrentQIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(null);
    playChineseAudio(data[shuffled[0]].hanzi);
  };

  if (questions.length === 0 || data.length === 0) return null;

  if (isFinished) {
    const maxScore = data.length * 10;
    const isSuccess = score >= maxScore * 0.9;
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50 h-full text-center space-y-6">
        <h2 className="text-3xl font-bold text-slate-800">Tổng Kết</h2>
        <div className="w-40 h-40 rounded-full border-8 border-green-500 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-green-600">{score}</span>
          <span className="text-sm text-slate-500">/ {maxScore}</span>
        </div>
        <p className={`text-xl font-medium ${isSuccess ? 'text-green-600' : 'text-slate-600'}`}>
          {isSuccess ? 'Tuyệt vời! Bạn đã vượt qua 90%!' : 'Cố gắng lên nhé! Bạn làm rất tốt.'}
        </p>
        <button
          onClick={restartQuiz}
          className="px-8 py-3 bg-green-500 text-white rounded-full font-bold shadow-md hover:bg-green-600 active:scale-95 transition-transform"
        >
          Chơi lại
        </button>
      </div>
    );
  }

  const currentVocab = data[questions[currentQIndex]];

  return (
    <div className="flex-1 flex flex-col p-[20px] bg-slate-50 h-full overflow-hidden">
      <div className="flex justify-between items-center mb-4 shrink-0">
        <div className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-bold text-sm">
          Câu {currentQIndex + 1} / {questions.length}
        </div>
        <div className="text-green-600 font-black text-lg">
          {score} điểm
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-start min-h-0 overflow-y-auto pb-4 scroll-smooth">
        <div className="bg-white w-full h-[140px] shrink-0 rounded-[2rem] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border-2 border-indigo-50 flex flex-col items-center justify-center mb-4 relative">
          <p className="text-[3rem] font-black text-indigo-900 lowercase tracking-wider">{currentVocab.pinyin}</p>
          <button
            onClick={() => playChineseAudio(currentVocab.hanzi)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 hover:bg-indigo-100 transition-colors"
          >
            <Volume2 size={20} />
          </button>
        </div>

        <div className="w-full grid grid-cols-2 gap-3 shrink-0">
          {options.map((optIndex, i) => {
            const opt = data[optIndex];
            const isSelected = selectedOption === optIndex;
            const isCorrect = optIndex === questions[currentQIndex];
            
            let btnClass = "bg-white ring-2 ring-inset ring-slate-200 text-slate-700 shadow-sm active:scale-95";
            if (selectedOption !== null) {
              if (isCorrect) btnClass = "bg-green-50 ring-2 ring-inset ring-green-500 text-green-800 scale-105 shadow-md";
              else if (isSelected && !isCorrect) btnClass = "bg-red-50 ring-2 ring-inset ring-red-500 text-red-800 scale-95";
              else btnClass = "bg-white ring-2 ring-inset ring-slate-200/50 text-slate-400 opacity-50";
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(optIndex)}
                disabled={selectedOption !== null}
                className={`w-full min-h-[6rem] rounded-2xl flex flex-col items-center justify-center transition-all duration-200 px-2 py-2.5 ${btnClass}`}
              >
                <span className="font-bold text-[18px] mb-0.5 text-center leading-tight">
                  {formatQuizVietnamese(opt.vietnamese, opt.hanzi)}
                </span>
                <span className="text-[14px] font-bold opacity-80">{opt.hanzi}</span>
                {getVocabEnglish(opt) && (
                  <span className="text-[10px] opacity-70 leading-tight pt-0.5 font-normal">{getVocabEnglish(opt)}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
