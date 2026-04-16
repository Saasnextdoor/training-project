'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Bot, FileText, Zap, Code, Brain, Search, Users, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'AI-дизайн',
    description: 'Генерируем уникальные дизайн-макеты с помощью нейросетей. Быстро, креативно, в вашем стиле.',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    icon: Bot,
    title: 'Чат-боты',
    description: 'Создаём умных ботов для Telegram, сайта и мессенджеров. Отвечают клиентам 24/7.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: FileText,
    title: 'AI-контент',
    description: 'Генерируем тексты, описания, посты. Пишем так, будто это сделал человек.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: Zap,
    title: 'Автоматизация',
    description: 'Автоматизируем рутину: обработка заказов, рассылки, аналитика. Больше времени для важного.',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: Code,
    title: 'AI-интеграция',
    description: 'Встраиваем нейросети в ваши существующие системы и процессы.',
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    icon: Brain,
    title: 'Генерация изображений',
    description: 'Создаём уникальные картинки, иконки, баннеры без фотостоков и стоковых решений.',
    gradient: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    icon: Search,
    title: 'AI-аналитика',
    description: 'Анализируем данные, находим инсайты и паттерны. Превращаем сырые данные в понятные выводы.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    icon: Users,
    title: 'Персонализация',
    description: 'Персонализируем опыт для каждого пользователя. Рекомендации, которые повышают конверсию.',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: BarChart3,
    title: 'AI-отчёты',
    description: 'Генерируем автоматические отчёты с визуализациями. Экономим часы ручной работы.',
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Zap className="w-4 h-4 text-accent-violet" />
            <span className="text-sm text-gray-300">Наши услуги</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Что мы <span className="gradient-text">умеем</span>
          </h2>
          <p className="text-gray-400">
            Используем передовые нейросети для создания digital-продуктов быстрее и эффективнее
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="gradient-border h-full rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
