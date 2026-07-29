import React, { useState, useMemo, useEffect } from 'react';
import { Grammar as GrammarType } from '../data';
import confetti from 'canvas-confetti';

interface GrammarQuizProps {
  data: GrammarType[];
  onBack: () => void;
}

interface QuizQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export default function GrammarQuiz({ data, onBack }: GrammarQuizProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = useMemo(() => {
    const generatedQuestions: QuizQuestion[] = [];
    const allExamples = data.flatMap(g => g.examples);
    const allDescriptions = data.map(g => g.description);
    
    let numQuestions = Math.max(5, data.length * 2);
    
    // Generate questions
    for (let i = 0; i < numQuestions; i++) {
      const type = Math.random() > 0.5 ? 'example' : 'description';
      
      if (type === 'example' && allExamples.length > 0) {
        const targetEx = allExamples[Math.floor(Math.random() * allExamples.length)];
        
        // Pick 3 distractors
        const distractors = allExamples
          .filter(e => e.vietnamese !== targetEx.vietnamese)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map(e => e.vietnamese);
          
        const options = [targetEx.vietnamese, ...distractors].sort(() => 0.5 - Math.random());
        
        generatedQuestions.push({
          id: `q_${i}`,
          questionText: `Nghĩa của câu "${targetEx.hanzi} (${targetEx.pinyin})" là gì?`,
          options,
          correctAnswer: targetEx.vietnamese
        });
      } else {
        const targetGrammar = data[Math.floor(Math.random() * data.length)];
        
        // Pick 3 distractors
        const distractors = allDescriptions
          .filter(d => d !== targetGrammar.description)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
          
        const options = [targetGrammar.description, ...distractors].sort(() => 0.5 - Math.random());
        
        generatedQuestions.push({
          id: `q_${i}`,
          questionText: `Cách dùng của điểm ngữ pháp "${targetGrammar.title}" là gì?`,
          options,
          correctAnswer: targetGrammar.description
        });
      }
    }
    
    return generatedQuestions;
  }, [data]);

  const handleSelect = (questionId: string, answer: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    let currentScore = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        currentScore += 10;
      }
    });
    setScore(currentScore);
    setSubmitted(true);
    
    const maxScore = questions.length * 10;
    const percentage = currentScore / maxScore;
    
    if (percentage >= 0.9) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      // Try playing a success sound (we will use a free simple audio URL or just beep)
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
      audio.play().catch(e => console.log('Audio play blocked:', e));
    } else if (percentage >= 0.7) {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3');
      audio.play().catch(e => console.log('Audio play blocked:', e));
    } else if (percentage >= 0.5) {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3');
      audio.play().catch(e => console.log('Audio play blocked:', e));
    } else {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2955/2955-preview.mp3');
      audio.play().catch(e => console.log('Audio play blocked:', e));
    }
  };

  const maxScore = questions.length * 10;
  const percentage = score / maxScore;

  return (
    <div className="flex-1 overflow-y-auto p-[20px] bg-slate-50 h-full scroll-smooth flex flex-col relative">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="text-orange-600 font-bold mr-4">
          &larr; Trở về
        </button>
        <h2 className="text-xl font-bold text-orange-800">Bài Kiểm Tra Ngữ Pháp</h2>
      </div>

      {submitted && (
        <div className="mb-6 p-6 rounded-2xl bg-white shadow-sm border-2 border-orange-200 text-center animate-in fade-in zoom-in duration-500">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Kết quả của bạn</h3>
          <p className="text-4xl font-extrabold text-orange-600 mb-2">{score} / {maxScore}</p>
          <p className="text-lg font-medium text-slate-600">
            {percentage >= 0.9 ? 'Xuất sắc! 🎉' : percentage >= 0.7 ? 'Khá tốt! 👍' : percentage >= 0.5 ? 'Trung bình. Cố lên nhé! 💪' : 'Không đạt. Hãy ôn tập thêm! 📚'}
          </p>
        </div>
      )}

      <div className="space-y-8 flex-1">
        {questions.map((q, index) => (
          <div key={q.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
            <h4 className="font-bold text-slate-800 mb-4 text-lg">Câu {index + 1}: {q.questionText}</h4>
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                const isSelected = answers[q.id] === opt;
                const isCorrect = opt === q.correctAnswer;
                
                let btnClass = "w-full text-left p-4 rounded-xl ring-2 ring-inset transition-all duration-200 ";
                
                if (!submitted) {
                  btnClass += isSelected 
                    ? "ring-orange-500 bg-orange-50 text-orange-800" 
                    : "ring-slate-200 bg-slate-50 hover:ring-orange-200 hover:bg-orange-50 text-slate-700";
                } else {
                  if (isCorrect) {
                    btnClass += "ring-green-500 bg-green-50 text-green-800 font-medium";
                  } else if (isSelected && !isCorrect) {
                    btnClass += "ring-red-500 bg-red-50 text-red-800 line-through";
                  } else {
                    btnClass += "ring-slate-200/50 bg-slate-50 text-slate-400 opacity-50";
                  }
                }
                
                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(q.id, opt)}
                    disabled={submitted}
                    className={btnClass}
                  >
                    {opt}
                    {submitted && isCorrect && <span className="float-right text-green-600">✓</span>}
                    {submitted && isSelected && !isCorrect && <span className="float-right text-red-600">✗</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      {!submitted && (
        <div className="mt-8 pb-4">
          <button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length < questions.length}
            className="w-full py-4 rounded-2xl bg-orange-600 text-white font-bold text-lg shadow-md hover:bg-orange-700 active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100"
          >
            {Object.keys(answers).length < questions.length ? 'Vui lòng trả lời hết các câu hỏi' : 'NỘP BÀI'}
          </button>
        </div>
      )}
      
      {submitted && (
        <div className="mt-8 pb-4">
          <button
            onClick={onBack}
            className="w-full py-4 rounded-2xl bg-slate-200 text-slate-800 font-bold text-lg shadow-sm hover:bg-slate-300 active:scale-95 transition-all"
          >
            QUAY LẠI HỌC TẬP
          </button>
        </div>
      )}
    </div>
  );
}
