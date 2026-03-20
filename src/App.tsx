import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Command, Shield, Zap } from 'lucide-react';
import { useChat } from './hooks/useChat';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const App: React.FC = () => {
  const { messages, isTyping, sendMessage } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-8">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-center mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-brand-600">
          Chatbot Agent
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Experience the next generation of AI-driven interactions with our premium agent interface.
        </p>
      </motion.div>

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl h-[70vh] glass-morphism rounded-3xl z-10 flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Chat Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center border border-brand-500/30">
              <Bot className="text-brand-400 w-6 h-6" />
            </div>
            <div>
              <h2 className="font-semibold text-white">AI Assistant</h2>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 font-medium uppercase tracking-widest hidden md:block">
              v1.0.0 Platinum
            </div>
          </div>
        </div>

        {/* Messages Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={cn(
                  "flex items-start gap-3 max-w-[85%]",
                  msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border mt-1",
                  msg.role === 'user' 
                    ? "bg-brand-500/10 border-brand-500/30 text-brand-400" 
                    : "bg-white/5 border-white/10 text-gray-400"
                )}>
                  {msg.role === 'user' ? <User size={16} /> : <Sparkles size={16} />}
                </div>
                <div className={cn(
                  "px-4 py-3 rounded-2xl text-sm leading-relaxed",
                  msg.role === 'user'
                    ? "bg-brand-600 text-white rounded-tr-none shadow-lg shadow-brand-500/20"
                    : "bg-white/5 border border-white/10 text-gray-200 rounded-tl-none"
                )}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border mt-1 bg-white/5 border-white/10 text-gray-400">
                <Sparkles size={16} />
              </div>
              <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500/50 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500/50 animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500/50 animate-bounce [animation-delay:-0.3s]"></span>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 border-t border-white/10 bg-white/5">
          <form onSubmit={handleSubmit} className="relative group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pr-16 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all placeholder:text-gray-500 text-white"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="absolute right-2 top-2 bottom-2 px-4 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:hover:bg-brand-600 text-white font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Send size={18} />
              <span className="hidden md:inline">Send</span>
            </button>
          </form>
          <div className="mt-3 flex items-center gap-4 px-2">
             <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                <Shield size={10} className="text-brand-500/50" />
                <span>Secure</span>
             </div>
             <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                <Zap size={10} className="text-brand-500/50" />
                <span>Fast</span>
             </div>
             <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                <Command size={10} className="text-brand-500/50" />
                <span>Smart</span>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Info */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-sm text-gray-500"
      >
        Built with <span className="text-brand-500">React</span> & <span className="text-brand-500">Vite</span>. Designed for Excellence.
      </motion.p>
    </div>
  );
};

export default App;
