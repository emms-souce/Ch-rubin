'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Award, 
  Users, 
  Target, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const valeurs = [
  {
    icone: Target,
    titre: "Précision",
    description: "Un travail minutieux et précis pour des résultats durables."
  },
  {
    icone: Zap,
    titre: "Réactivité",
    description: "Disponible rapidement pour vos urgences et projets."
  },
  {
    icone: Award,
    titre: "Savoir-faire",
    description: "7 ans d'expérience dans la maçonnerie traditionnelle et moderne."
  },
  {
    icone: Users,
    titre: "À l'écoute",
    description: "Un dialogue constant pour répondre parfaitement à vos attentes."
  }
]

const certifications = [
  "Qualification maçon professionnel",
  "Formation sécurité chantier",
  "Assurance décennale à jour",
  "Membre des Artisans du Bâtiment",
]

const statistiques = [
  { nombre: "7+", label: "Années d'expérience" },
  { nombre: "300+", label: "Chantiers réalisés" },
  { nombre: "80+", label: "Clients satisfaits" },
  { nombre: "100%", label: "Travaux garantis" },
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu textuel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge variant="outline" className="mb-4 bg-construction-orange/10 text-construction-orange border-construction-orange/20">
                Mon Parcours
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-blue to-construction-orange">
                  7 années de passion
                </span>{' '}
                pour la maçonnerie
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Artisan maçon depuis plus de 7 ans, j'ai développé mon savoir-faire 
                  sur de nombreux chantiers en Seine-et-Marne et en région parisienne.
                </p>
                <p>
                  Passionné par mon métier, j'apporte le même soin à chaque projet, qu'il s'agisse 
                  d'une petite réparation ou d'une construction neuve complète.
                </p>
                <p>
                  Mon objectif : vous livrer des travaux de qualité, durables et conformes 
                  à vos attentes, dans le respect des délais convenus.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold mb-4">Mes Qualifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild size="lg" className="bg-construction-orange hover:bg-construction-orange/90">
              <Link href="/mon-parcours">
                En savoir plus sur mon parcours
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Section visuelle avec statistiques */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Statistiques */}
            <Card className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Mon Engagement en Chiffres</h3>
                <div className="grid grid-cols-2 gap-6">
                  {statistiques.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-construction-orange mb-2">
                        {stat.nombre}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nos valeurs */}
            <div>
              <h3 className="text-xl font-bold mb-6">Mes Valeurs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {valeurs.map((valeur, index) => {
                  const IconComponent = valeur.icone
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full border-0 bg-muted/50 hover:bg-muted/70 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="p-2 bg-construction-orange/10 rounded-lg flex-shrink-0">
                              <IconComponent className="h-5 w-5 text-construction-orange" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">{valeur.titre}</h4>
                              <p className="text-sm text-muted-foreground">
                                {valeur.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}