import React from 'react'
import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Accueil',
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.nom} - ${siteConfig.slogan}`,
    description: siteConfig.description,
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
