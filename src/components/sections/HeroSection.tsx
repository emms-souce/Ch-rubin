'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Building, Users, Award, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

const statistiques = [
  { nombre: "300+", label: "Chantiers réalisés", icone: Building },
  { nombre: "7+", label: "Années d'expérience", icone: Award },
  { nombre: "80+", label: "Clients satisfaits", icone: Users },
]

const avantages = [
  "Maçon qualifié et expérimenté",
  "Travail soigné et durable",
  "Devis gratuit et détaillé",
  "Disponible 6j/7 pour urgences"
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Motifs de fond */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-construction-orange/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-construction-blue/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="outline" className="mb-4 bg-construction-orange/10 text-construction-orange border-construction-orange/20">
                  ✨ Artisan maçon depuis 7 ans
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Chérubin Ngongang{' '}
                <br />
                <span className="text-construction-orange font-extrabold">
                  Maçon professionnel
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                {siteConfig.description} Passion du travail bien fait et expertise 
                technique au service de vos projets depuis plus de 7 ans.
              </motion.p>
            </div>

            {/* Avantages */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-orange flex-shrink-0" />
                  <span className="text-sm font-medium">{avantage}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-construction-orange hover:bg-construction-orange/90 text-white shadow-lg font-semibold">
                <Link href="/contact">
                  Devis Gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  Mes Services
                </Link>
              </Button>
            </motion.div>

            {/* Statistiques */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {statistiques.map((stat, index) => {
                const IconComponent = stat.icone
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-construction-orange/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-construction-orange" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.nombre}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Section visuelle */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Card className="relative overflow-hidden shadow-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative bg-gradient-to-br from-construction-blue/20 to-construction-orange/20">
                  {/* Placeholder pour une image de chantier */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="mx-auto w-24 h-24 bg-construction-orange/20 rounded-full flex items-center justify-center">
                        <Building className="h-12 w-12 text-construction-orange" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Maçonnerie d'Excellence</h3>
                        <p className="text-muted-foreground text-sm">
                          Découvrez mes réalisations les plus récentes
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Éléments décoratifs */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500/90 text-white">
                      Artisan Qualifié
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Disponible 24/7</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carte flottante */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 z-10"
            >
              <Card className="bg-white dark:bg-slate-800 shadow-xl border-0">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-construction-orange rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-construction-blue rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-construction-yellow rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Chérubin à votre écoute</div>
                      <div className="text-xs text-muted-foreground">Réactivité et professionnalisme</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}