'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  ArrowUp
} from 'lucide-react'
import { siteConfig, navigationPrincipale } from '@/lib/config'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-construction-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CN</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{siteConfig.nom}</h3>
                <p className="text-sm text-muted-foreground">{siteConfig.slogan}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex space-x-2">
              {siteConfig.reseauxSociaux.facebook && (
                <Button variant="outline" size="icon" asChild>
                  <Link href={siteConfig.reseauxSociaux.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base">Navigation</h4>
            <ul className="space-y-2">
              {navigationPrincipale.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.titre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base">Mes Services</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/services/maconnerie-generale"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Maçonnerie Générale
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/renovation-complete"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Rénovation Complète
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/creation-ouvertures"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Création d'Ouvertures
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/terrasses-dallages"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terrasses & Dallages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                <div className="text-sm">
                  <p>{siteConfig.adresse.rue}</p>
                  <p>{siteConfig.adresse.ville}</p>
                  <p>{siteConfig.adresse.pays}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a 
                  href={`tel:${siteConfig.telephone}`}
                  className="text-sm hover:text-construction-orange transition-colors"
                >
                  {siteConfig.telephone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm hover:text-construction-orange transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 text-muted-foreground" />
                <div className="text-sm">
                  <p>{siteConfig.horaires.semaine}</p>
                  <p>{siteConfig.horaires.weekend}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bas de page */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground">
            <p>© {currentYear} {siteConfig.nom}. Tous droits réservés.</p>
            <div className="flex space-x-4">
              <Link href="/mentions-legales" className="hover:text-foreground transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-foreground transition-colors">
                Confidentialité
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Retour en haut</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}