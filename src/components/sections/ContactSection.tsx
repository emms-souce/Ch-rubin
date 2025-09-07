'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { useWhatsApp } from '@/hooks/useWhatsApp'

const methodesContact = [
  {
    icone: Phone,
    titre: "Téléphone",
    description: "Appelez-moi directement",
    valeur: siteConfig.telephone,
    action: "tel:" + siteConfig.telephone,
    couleur: "construction-blue"
  },
  {
    icone: Mail,
    titre: "Email",
    description: "Écrivez-moi un message",
    valeur: siteConfig.email,
    action: "mailto:" + siteConfig.email,
    couleur: "construction-orange"
  },
  {
    icone: MessageCircle,
    titre: "WhatsApp",
    description: "Discussion instantanée",
    valeur: "Chat en direct",
    action: "whatsapp",
    couleur: "green-500"
  }
]

const horaires = [
  { jour: "Lundi - Vendredi", heures: "7h30 - 18h30" },
  { jour: "Samedi", heures: "8h00 - 17h00" },
  { jour: "Dimanche", heures: "Urgences uniquement" },
]

export default function ContactSection() {
  const { openWhatsAppWithPreset } = useWhatsApp()

  const handleContactClick = (method: typeof methodesContact[0]) => {
    if (method.action === 'whatsapp') {
      openWhatsAppWithPreset('general')
    } else {
      window.open(method.action)
    }
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 bg-construction-orange/10 text-construction-orange border-construction-orange/20">
            Contactez-moi
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discutons de votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-orange to-construction-yellow">
              projet ensemble
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Je suis à votre disposition pour étudier votre projet de maçonnerie. 
            Contactez-moi par le moyen qui vous convient le mieux.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Méthodes de contact */}
          <div className="lg:col-span-2 space-y-8">
            {/* Options de contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {methodesContact.map((methode, index) => {
                const IconComponent = methode.icone
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card 
                      className="h-full cursor-pointer group hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-slate-900 hover:scale-[1.02]"
                      onClick={() => handleContactClick(methode)}
                    >
                      <CardHeader className="text-center pb-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`mx-auto w-16 h-16 bg-${methode.couleur}/10 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
                        >
                          <IconComponent className={`h-8 w-8 text-${methode.couleur}`} />
                        </motion.div>
                        <CardTitle className="text-lg font-bold">
                          {methode.titre}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground">
                          {methode.description}
                        </p>
                        <p className="font-medium text-construction-orange">
                          {methode.valeur}
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className={`w-full group-hover:bg-${methode.couleur} group-hover:text-white group-hover:border-${methode.couleur} transition-all`}
                        >
                          Contacter
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900 dark:bg-gradient-to-r dark:from-construction-blue dark:via-construction-blue/95 dark:to-construction-blue/90 text-white border-0 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/10 to-slate-600/20 dark:via-construction-orange/10 dark:to-construction-orange/20"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-sm">
                        Besoin d'un devis personnalisé ?
                      </h3>
                      <p className="text-white/95 mb-6 drop-shadow-sm">
                        Remplissez le formulaire de contact détaillé pour recevoir 
                        un devis adapté à votre projet sous 24h.
                      </p>
                      <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/95 hover:text-slate-900/90 shadow-lg font-semibold">
                        <Link href="/contact">
                          <Send className="mr-2 h-4 w-4" />
                          Formulaire de contact
                        </Link>
                      </Button>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-24 h-24 bg-white/25 backdrop-blur-sm rounded-full mb-4 shadow-lg">
                        <Send className="h-12 w-12 text-white drop-shadow-sm" />
                      </div>
                      <p className="text-white/95 text-sm drop-shadow-sm">
                        Réponse garantie sous 24h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Informations pratiques */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Adresse */}
            <Card className="border-0 bg-white dark:bg-slate-900 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-construction-orange" />
                  <span>Mon Atelier</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p>{siteConfig.adresse.rue}</p>
                  <p>{siteConfig.adresse.ville}</p>
                  <p>{siteConfig.adresse.pays}</p>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link 
                    href={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.adresse.rue + ', ' + siteConfig.adresse.ville)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir sur la carte
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Horaires */}
            <Card className="border-0 bg-white dark:bg-slate-900 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-construction-blue" />
                  <span>Horaires d'ouverture</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {horaires.map((horaire, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="font-medium">{horaire.jour}</span>
                      <span className="text-muted-foreground">{horaire.heures}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-700 dark:text-green-400">
                      Urgences 24h/7j
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Info supplémentaire */}
            <Card className="border-0 bg-gradient-to-br from-construction-orange/10 to-construction-yellow/10">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold mb-2">Intervention Rapide</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Service d'urgence disponible pour les situations critiques
                </p>
                <Badge variant="outline" className="bg-construction-orange/10 text-construction-orange border-construction-orange/20">
                  Réactivité garantie
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}