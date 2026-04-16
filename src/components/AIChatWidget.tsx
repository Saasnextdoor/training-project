'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const aiResponses = {
  greeting: "Привет! Я AI-ассистент NeuroWeb Studio. Могу рассказать о наших услугах, процессе работы или ответить на вопросы. Что вас интересует?",
  services: "Мы предлагаем:\n\n🖼️ AI-дизайн — генерируем макеты с помощью нейросетей\n\n🤖 Чат-боты — умные боты для вашего бизнеса\n\n📝 Контент — тексты и изображения на AI\n\n⚡ Автоматизация — упрощаем рутину\n\n🔧 Интеграция — подключаем AI к вашим системам",
  price: "Стоимость зависит от проекта:\n\n💰 Лендинг — от 45 000 ₽\n💰 Сайт-визитка — от 25 000 ₽\n💰 Интернет-магазин — от 80 000 ₽\n💰 Чат-бот — от 20 000 ₽\n\nБесплатная консультация!",
  time: "Скорость работы с AI:\n\n⚡ Лендинг — 3-5 дней\n⚡ Сайт с AI-функциями — 7-14 дней\n⚡ Полноценный проект — от 2 недель\n\nЭто на 50-70% быстрее традиционной разработки!",
  default: "Отличный вопрос! Для детального обсуждения напишите в чат или оставьте заявку. Мы ответим в течение 2 часов в рабочее время."
}

function getResponse(message: string): string {
  const lower = message.toLowerCase()
  if (lower.includes('привет') || lower.includes('здравств') || lower.includes('hello') || lower.includes('hi')) {
    return aiResponses.greeting
  }
  if (lower.includes('услуг') || lower.includes('что дел') || lower.includes('предлага') || lower.includes('делает')) {
    return aiResponses.services
  }
  if (lower.includes('стоимост') || lower.includes('цен') || lower.includes('сколько') || lower.includes('цены') || lower.includes('дешев')) {
    return aiResponses.price
  }
  if (lower.includes('срок') || lower.includes('быстро') || lower.includes('врем') || lower.includes('дней') || lower.includes('сколько')) {
    return aiResponses.time
  }
  return aiResponses.default
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: aiResponses.greeting
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getResponse(userMessage.content)
      }
      setMessages(prev => [...prev, response])
      setIsTyping(false)
    }, 1200)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center shadow-lg glow transition-transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <Bot className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[520px] rounded-2xl glass overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-heading font-semibold text-white">NeuroAI</div>
                <div className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Онлайн
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'user' 
                        ? 'bg-accent-cyan/20' 
                        : 'bg-gradient-to-br from-accent-violet to-accent-cyan'
                    }`}>
                      {msg.role === 'user' 
                        ? <User className="w-4 h-4 text-accent-cyan" />
                        : <Sparkles className="w-4 h-4 text-white" />
                      }
                    </div>
                    <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-accent-cyan/20 text-white'
                        : 'bg-white/5 text-gray-300'
                    }`}>
                      {msg.content.split('\n').map((line, i) => (
                        <div key={i}>{line || <br />}</div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/5 rounded-2xl px-4 py-3 flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full typing-dot" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full typing-dot" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full typing-dot" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Спросите об услугах..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-violet transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:opacity-90"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
