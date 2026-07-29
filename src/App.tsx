/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Conversation from './components/Conversation';
import Vocabulary from './components/Vocabulary';
import Quiz from './components/Quiz';
import Grammar from './components/Grammar';
import Listening from './components/Listening';
import { topics } from './data';

type TabType = 'conversation' | 'vocabulary' | 'quiz' | 'grammar' | 'listening';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('conversation');
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0); // Default to Chào hỏi xã giao
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const currentTopic = topics[currentTopicIndex];

  const tabs: { id: TabType; label: string; activeClass: string }[] = [
    { id: 'conversation', label: 'Hội thoại', activeClass: 'border-blue-600 text-blue-600' },
    { id: 'grammar', label: 'Ngữ pháp', activeClass: 'border-orange-600 text-orange-600' },
    { id: 'vocabulary', label: 'Từ vựng', activeClass: 'border-red-600 text-red-600' },
    { id: 'quiz', label: 'Test', activeClass: 'border-green-600 text-green-600' },
    { id: 'listening', label: 'Nghe', activeClass: 'border-[#00b4d8] text-[#00b4d8]' },
  ];

  return (
    <div className="fixed inset-0 bg-slate-200 flex items-center justify-center font-sans sm:py-[20px] sm:px-[15px]">
      <div className="w-full h-full max-w-[450px] sm:max-h-[800px] bg-white sm:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative sm:border-[8px] sm:border-slate-800">
        
        {/* Sliding Canvas Container (Main View + Topic Drawer side-by-side) */}
        <div 
          className="w-full h-full flex transition-transform duration-300 ease-in-out"
          style={{ 
            transform: isDrawerOpen ? 'translateX(-78%)' : 'translateX(0%)' 
          }}
        >
          {/* 1. Main App Content View */}
          <div className="w-full h-full flex flex-col shrink-0 relative bg-slate-50 overflow-hidden">
            {/* Header */}
            <header className="bg-blue-600 text-white px-4 h-[58px] flex justify-between items-center shrink-0 relative z-20">
              <div className="flex flex-col flex-1">
                <h1 className="text-[15px] uppercase font-bold leading-tight mb-0.5">GIAO TIẾP | KELVIN HIEU</h1>
                <span className="text-[14px] opacity-90 leading-tight">Chủ đề: {currentTopic.title}</span>
              </div>
              
              <button 
                onClick={() => setIsDrawerOpen(true)}
                className="p-2 -mr-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Open topic menu"
              >
                <Menu size={24} />
              </button>
            </header>

            {/* Tabs */}
            <nav className="bg-white border-b border-slate-200 flex w-full shrink-0 relative z-10">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex-1 py-3 px-1 text-[12px] min-[390px]:text-[13px] sm:text-[14px] font-bold whitespace-nowrap transition-colors text-center
                      ${isActive ? `border-b-2 ${tab.activeClass}` : 'text-slate-400 hover:text-slate-500'}
                    `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </nav>

            {/* Content Area */}
            <main className="flex-1 overflow-hidden relative flex flex-col bg-slate-50">
              {activeTab === 'conversation' && <Conversation data={currentTopic.conversationData} />}
              {activeTab === 'vocabulary' && <Vocabulary data={currentTopic.vocabularyData} />}
              {activeTab === 'quiz' && <Quiz data={currentTopic.vocabularyData} />}
              {activeTab === 'grammar' && <Grammar data={currentTopic.grammarData} />}
              {activeTab === 'listening' && <Listening data={currentTopic.conversationData} />}
            </main>

            {/* Clickable Overlay on pushed main view when drawer is open */}
            {isDrawerOpen && (
              <div 
                className="absolute inset-0 z-50 bg-black/5 cursor-pointer"
                onClick={() => setIsDrawerOpen(false)}
              />
            )}
          </div>

          {/* 2. Side-by-side Slide-over Topic Selector Drawer */}
          <div className={`w-[78%] h-full bg-white flex flex-col shrink-0 z-30 border-l border-slate-100 transition-shadow duration-300 ${isDrawerOpen ? 'shadow-[-16px_0_35px_rgba(0,0,0,0.22)]' : ''}`}>
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 h-[58px] shrink-0 bg-[#f6f6f6] border-b-2 border-slate-300">
              <h2 className="text-[17px] font-bold text-black uppercase tracking-wide">
                CHỌN CHỦ ĐỀ
              </h2>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-1 -mr-1 text-black hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer List */}
            <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
              {topics.map((t, index) => {
                const isSelected = index === currentTopicIndex;
                const count = t.conversationData?.length || 20;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setCurrentTopicIndex(index);
                      setIsDrawerOpen(false);
                    }}
                    className={`
                      w-full text-left px-6 py-4 text-[15px] transition-colors flex items-center justify-start border-b border-slate-100
                      ${isSelected 
                        ? 'bg-[#f0f7ff] text-blue-600 font-bold' 
                        : 'bg-white text-slate-900 font-normal hover:bg-slate-50'
                      }
                    `}
                  >
                    {t.title} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

