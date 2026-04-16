'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Send, Linkedin, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Send, href: 'https://t.me/neuroweb', label: 'Telegram' },
  { icon: Twitter, href: 'https://twitter.com/neuroweb', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/neuroweb', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/neuroweb', label: 'LinkedIn' },
]

const footerLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#benefits' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Контакты', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-heading font-bold text-xl">
              <span className="text-white">Neuro</span>
              <span className="gradient-text">Web</span>
            </span>
          </motion.a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 hover:bg-white/10 hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
            © 2024 NeuroWeb Studio. Создано с
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            и <span className="gradient-text font-medium">AI</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
