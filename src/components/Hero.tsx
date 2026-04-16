'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, ArrowRight } from 'lucide-react'
import AIChatWidget from './AIChatWidget'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
            >
              <Sparkles className="w-4 h-4 text-accent-violet" />
              <span className="text-sm text-gray-300">AI-powered веб-разработка</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Создаём сайты с{' '}
              <span className="gradient-text">интеллектом</span>{' '}
              нейросетей
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Мы — веб-студия нового поколения. Используем нейросети для генерации 
              дизайна, создания контента и автоматизации процессов. Результат — 
              сайты быстрее, дешевле и умнее.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary flex items-center gap-2 group">
                Начать проект
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn-secondary flex items-center gap-2">
                Наши услуги
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 pt-4"
            >
              <div>
                <div className="font-heading text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-500">Проектов</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold gradient-text">3x</div>
                <div className="text-sm text-gray-500">Быстрее</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-gray-500">AI ассистент</div>
              </div>
            </motion.div>
          </div>

          {/* Right - AI Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <AIChatWidget />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-accent-violet/30 rounded-xl rotate-12" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-accent-cyan/30 rounded-xl -rotate-6" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-gradient-to-b from-accent-violet to-accent-cyan rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
