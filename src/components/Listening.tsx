import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ConversationLine } from '../data';
import { playChineseAudio, playCorrectSound, playWrongSound, playSuccessSound, playPassSound } from '../utils';

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

interface ListeningProps {
  data: ConversationLine[];
}

export default function Listening({ data }: ListeningProps) {
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
    const isCorrect = optionIndex === questions[currentQIndex];

    if (isCorrect) {
      setScore((prev) => prev + 10);
      playCorrectSound();
    } else {
      playWrongSound();
    }

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
    }, 300); // Wait 0.3s to show result
  };

  const finishQuiz = () => {
    setIsFinished(true);
  };

  useEffect(() => {
    if (isFinished) {
      const maxScore = data.length * 10;
      const percentage = score / maxScore;
      
      if (percentage >= 0.9) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
        playSuccessSound();
      } else if (percentage >= 0.5) {
        playPassSound();
      } else {
        playWrongSound();
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
    const percentage = score / maxScore;
    
    let resultMessage = '';
    let resultColor = '';
    
    if (percentage >= 0.9) {
      resultMessage = 'Xuất sắc!';
      resultColor = 'text-green-600';
    } else if (percentage >= 0.7) {
      resultMessage = 'Khá!';
      resultColor = 'text-blue-600';
    } else if (percentage >= 0.5) {
      resultMessage = 'Trung bình';
      resultColor = 'text-orange-600';
    } else {
      resultMessage = 'Không đạt, học lại thêm';
      resultColor = 'text-red-600';
    }
    
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50 h-full text-center space-y-6">
        <h2 className={`text-3xl font-black ${resultColor}`}>{resultMessage}</h2>
        <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-200 w-full max-w-sm">
          <p className="text-slate-500 mb-2 font-medium uppercase tracking-wider">Điểm của bạn</p>
          <p className="text-5xl font-black text-slate-800">
            {score} <span className="text-2xl text-slate-400">/ {maxScore}</span>
          </p>
        </div>
        <button
          onClick={restartQuiz}
          className="w-full max-w-sm bg-[#00b4d8] hover:bg-[#0096b4] text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-md active:scale-95"
        >
          Nghe Lại
        </button>
      </div>
    );
  }

  const currentLine = data[questions[currentQIndex]];

  return (
    <div className="flex-1 flex flex-col p-[20px] bg-slate-50 h-full overflow-hidden">
      <div className="flex items-center gap-3 mb-4 shrink-0">
        <div className="text-[12px] font-bold text-slate-500 whitespace-nowrap">
          Câu {currentQIndex + 1}/{questions.length} • Điểm: {score}
        </div>
        <div className="bg-slate-200 h-2 flex-1 rounded-full overflow-hidden">
          <div 
            className="bg-[#00b4d8] h-full rounded-full transition-all duration-300"
            style={{ width: `${(currentQIndex / questions.length) * 100}%` }}
          />
        </div>
        <button 
          onClick={() => playChineseAudio(currentLine.hanzi)}
          className="w-9 h-9 bg-[#00b4d8]/10 text-[#00b4d8] rounded-full flex items-center justify-center hover:bg-[#00b4d8]/20 transition-colors shrink-0"
        >
          <Volume2 size={18} />
        </button>
      </div>

      <div className="w-full flex-1 flex flex-col gap-2 overflow-y-auto pb-4 scroll-smooth">
        {options.map((optIndex, i) => {
          const opt = data[optIndex];
          const isSelected = selectedOption === optIndex;
          const isCorrect = optIndex === questions[currentQIndex];
          
          let btnClass = "bg-white border-slate-200 hover:border-[#00b4d8] hover:bg-[#00b4d8]/10 text-slate-700";
          
          if (selectedOption !== null) {
            if (isCorrect) {
              btnClass = "bg-green-500 border-green-600 text-white shadow-inner";
            } else if (isSelected) {
              btnClass = "bg-red-500 border-red-600 text-white shadow-inner";
            } else {
              btnClass = "bg-slate-100 border-slate-200 text-slate-400 opacity-50";
            }
          }

          return (
            <button
              key={i}
              disabled={selectedOption !== null}
              onClick={() => handleSelect(optIndex)}
              className={`p-3 rounded-2xl border-2 text-left transition-all transform shrink-0 ${selectedOption === null ? 'active:scale-95' : ''} ${btnClass}`}
            >
              <div className="text-[14px] font-bold mb-1 leading-snug">{opt.pinyin}</div>
              <div className={`text-[14px] font-normal leading-snug ${selectedOption === null ? 'text-black' : ''}`}>{opt.vietnamese}</div>
              {opt.english && (
                <div className="text-[10px] opacity-70 leading-snug pt-0.5 font-normal">{opt.english}</div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
