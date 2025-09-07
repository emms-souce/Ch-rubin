'use client'

import { siteConfig, messagesWhatsApp } from '@/lib/config'

export const useWhatsApp = () => {
  const openWhatsApp = (message?: string, phoneNumber?: string) => {
    const phone = phoneNumber || siteConfig.whatsapp
    const text = message || messagesWhatsApp.general
    const url = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  const openWhatsAppWithPreset = (preset: keyof typeof messagesWhatsApp) => {
    const message = messagesWhatsApp[preset]
    openWhatsApp(message)
  }

  return {
    openWhatsApp,
    openWhatsAppWithPreset
  }
}