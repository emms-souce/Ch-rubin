import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send
} from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contactez ${siteConfig.nom} pour vos projets BTP. Devis gratuit sous 24h.`,
  openGraph: {
    title: `Contact | ${siteConfig.nom}`,
    description: `Contactez ${siteConfig.nom} pour vos projets BTP. Devis gratuit sous 24h.`,
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-20">
        {/* En-tête */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-construction-orange/10 text-construction-orange border-construction-orange/20">
            Nous contacter
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Parlons de votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-orange to-construction-yellow">
              projet ensemble
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour vous accompagner 
            dans la réussite de votre projet BTP.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            {/* Coordonnées */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-construction-orange" />
                  <span>Nos Coordonnées</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                  <div className="text-sm">
                    <p className="font-medium">{siteConfig.adresse.rue}</p>
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
              </CardContent>
            </Card>

            {/* Horaires */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-construction-blue" />
                  <span>Horaires d'ouverture</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span className="text-muted-foreground">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Samedi</span>
                    <span className="text-muted-foreground">9h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Dimanche</span>
                    <span className="text-muted-foreground">Urgences uniquement</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-700 dark:text-green-400">
                      Service d'urgence 24h/7j
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engagement */}
            <Card className="border-0 bg-gradient-to-br from-construction-orange/10 to-construction-yellow/10">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-construction-orange/20 rounded-lg flex items-center justify-center">
                    <Send className="h-6 w-6 text-construction-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Notre Engagement</h3>
                    <p className="text-sm text-muted-foreground">
                      Réponse garantie sous 24h pour toute demande reçue via ce formulaire
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-construction-orange/10 text-construction-orange border-construction-orange/20">
                    Satisfaction garantie
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact rapide WhatsApp */}
            <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Contact Immédiat</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Pour une réponse ultra-rapide, contactez-nous via WhatsApp
                    </p>
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">
                      Réponse instantanée
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}