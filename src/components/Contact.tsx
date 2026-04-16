'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, MessageCircle, Mail, MapPin, Check, AlertCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Validation
    if (!formState.name || !formState.email || !formState.message) {
      setError('Пожалуйста, заполните все обязательные поля')
      setIsSubmitting(false)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setError('Введите корректный email адрес')
      setIsSubmitting(false)
      return
    }

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitted(true)
    setIsSubmitting(false)
    setFormState({ name: '', email: '', project: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding relative bg-primary-surface/30" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <MessageCircle className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm text-gray-300">Контакты</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Давайте <span className="gradient-text">обсудим</span>
          </h2>
          <p className="text-gray-400">
            Расскажите о вашем проекте — мы ответим в течение 2 часов в рабочее время
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="gradient-border rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">
                Свяжитесь с нами
              </h3>
              
              <div className="space-y-5">
                <a href="mailto:hello@neuroweb.studio" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent-violet/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-violet/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent-violet" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-white group-hover:text-accent-violet transition-colors">
                      hello@neuroweb.studio
                    </div>
                  </div>
                </a>

                <a href="https://t.me/neuroweb" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-cyan/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Telegram</div>
                    <div className="text-white group-hover:text-accent-cyan transition-colors">
                      @neuroweb
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Офис</div>
                    <div className="text-white">
                      Москва, Пресненская наб., 12
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="gradient-border rounded-2xl p-6">
              <h4 className="font-heading text-sm font-semibold text-white mb-4">
                Время работы
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Пн — Пт</span>
                  <span className="text-white">10:00 — 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Сб — Вс</span>
                  <span className="text-gray-600">Выходной</span>
                </div>
                <div className="pt-2 mt-2 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-500">AI-бот отвечает 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="gradient-border rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    Заявка отправлена!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                  >
                    Отправить ещё одну
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Имя <span className="text-accent-violet">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Александр"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-violet transition-colors"
                        style={{ color: '#f8fafc' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Email <span className="text-accent-violet">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="aleksandr@company.ru"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-violet transition-colors"
                        style={{ color: '#f8fafc' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Тип проекта
                    </label>
                    <select
                      name="project"
                      value={formState.project}
                      onChange={(e) => setFormState(prev => ({ ...prev, project: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-violet transition-colors"
                      style={{ color: '#f8fafc', backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <option value="" style={{ backgroundColor: '#12121a', color: '#f8fafc' }}>Выберите тип проекта</option>
                      <option value="landing" style={{ backgroundColor: '#12121a', color: '#f8fafc' }}>Лендинг</option>
                      <option value="website" style={{ backgroundColor: '#12121a', color: '#f8fafc' }}>Сайт-визитка</option>
                      <option value="store" style={{ backgroundColor: '#12121a', color: '#f8fafc' }}>Интернет-магазин</option>
                      <option value="bot" style={{ backgroundColor: '#12121a', color: '#f8fafc' }}>Чат-бот</option>
                      <option value="other" style={{ backgroundColor: '#12121a', color: '#f8fafc' }}>Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Сообщение <span className="text-accent-violet">*</span>
                    </label>
                    <textarea
                      name="message"
value={formState.message}
                      onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Расскажите о вашем проекте..."
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-violet transition-colors resize-none"
                      style={{ color: '#f8fafc' }}
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Отправить заявку
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
