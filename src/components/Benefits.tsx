'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Clock, Shield, TrendingUp, Users, Cpu, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Скорость',
    description: 'Создаём проекты в 3 раза быстрее благодаря AI-инструментам',
    stat: '3x',
    statLabel: 'быстрее',
  },
  {
    icon: Shield,
    title: 'Качество',
    description: 'Нейросети не устают и не делают опечаток. Стабильный результат.',
    stat: '99%',
    statLabel: 'точность',
  },
  {
    icon: TrendingUp,
    title: 'Рост',
    description: 'AI-решения масштабируются с вашим бизнесом без доп. затрат',
    stat: '∞',
    statLabel: 'масштаб',
  },
  {
    icon: Users,
    title: 'Экономия',
    description: 'Снижаем стоимость разработки на 40-60% без потери качества',
    stat: '50%',
    statLabel: 'экономия',
  },
]

const techStack = [
  { name: 'GPT-4 / Claude', desc: 'Тексты и диалоги' },
  { name: 'Midjourney', desc: 'Изображения и дизайн' },
  { name: 'Stable Diffusion', desc: 'Кастомная генерация' },
  { name: 'ElevenLabs', desc: 'Озвучка и голоса' },
  { name: 'LangChain', desc: 'AI-интеграции' },
  { name: 'Custom Models', desc: 'Обучение под вас' },
]

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState('0')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    if (value === '∞') {
      setDisplayValue('∞')
      return
    }

    const numValue = parseInt(value.replace(/[^0-9]/g, ''))
    const duration = 2000
    const steps = 30
    const increment = numValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numValue) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current).toString())
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="font-heading text-4xl font-bold gradient-text">
      {displayValue}{suffix}
    </span>
  )
}

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="benefits" className="section-padding relative bg-primary-surface/30" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm text-gray-300">Преимущества</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Почему <span className="gradient-text">AI</span>
          </h2>
          <p className="text-gray-400">
            Нейросети — не замена людям, а мощный инструмент. Мы используем их с умом.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gradient-border rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-accent-violet" />
              </div>
              <AnimatedCounter value={benefit.stat} />
              <div className="text-sm text-gray-500 mb-3">{benefit.statLabel}</div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Cpu className="w-4 h-4 text-accent-violet" />
            <span className="text-sm text-gray-300">Наш стек</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="px-5 py-3 rounded-xl glass hover:bg-white/10 transition-colors cursor-default"
              >
                <div className="font-medium text-white">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
