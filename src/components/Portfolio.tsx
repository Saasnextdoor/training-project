'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Bot, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce AI Shop',
    category: 'Интернет-магазин',
    tags: ['AI-рекомендации', 'Чат-бот'],
    description: 'Магазин электроники с умными рекомендациями и AI-помощником для выбора товаров',
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    title: 'LegalTech Portal',
    category: 'Веб-портал',
    tags: ['AI-анализ', 'Автоматизация'],
    description: 'Портал для юридической компании с AI-анализом документов и чат-ботом',
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    title: 'Food Delivery App',
    category: 'Приложение',
    tags: ['Генерация меню', 'Персонализация'],
    description: 'Доставка еды с AI-генерацией описаний блюд и персональными рекомендациями',
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    title: 'Real Estate Platform',
    category: 'Платформа',
    tags: ['Виртуальные туры', 'AI-помощник'],
    description: 'Платформа для агентства недвижимости с виртуальными турами и умным поиском',
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'EdTech Startup',
    category: 'Образование',
    tags: ['AI-тьютор', 'Генерация контента'],
    description: 'Образовательная платформа с AI-тьютором и автоматической генерацией тестов',
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    title: 'Travel Agency',
    category: 'Бронирование',
    tags: ['AI-планировщик', 'Чат-бот'],
    description: 'Сайт турагентства с AI-планировщиком маршрутов и умным подбором туров',
    gradient: 'from-indigo-600 to-violet-600',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="portfolio" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Sparkles className="w-4 h-4 text-accent-violet" />
            <span className="text-sm text-gray-300">Портфолио</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Наши <span className="gradient-text">работы</span>
          </h2>
          <p className="text-gray-400">
            Проекты, где AI — не просто buzzword, а реальная ценность для клиента
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="gradient-border h-full rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
                {/* Project Preview */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <Bot className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-white/90 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Смотреть
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="text-xs text-accent-cyan mb-2">{project.category}</div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-accent-violet/10 text-accent-violet border border-accent-violet/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
