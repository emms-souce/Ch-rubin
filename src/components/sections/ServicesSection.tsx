'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Building, 
  ClipboardList, 
  ShieldCheck, 
  Search, 
  GraduationCap, 
  Lightbulb,
  ArrowRight 
} from 'lucide-react'
import Link from 'next/link'
import { services } from '@/lib/config'

const iconMap = {
  building: Building,
  'clipboard-list': ClipboardList,
  'shield-check': ShieldCheck,
  search: Search,
  'graduation-cap': GraduationCap,
  lightbulb: Lightbulb,
}

export default function ServicesSection() {
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
          <Badge variant="outline" className="mb-4 bg-construction-blue/10 text-construction-blue border-construction-blue/20">
            Mes Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expertise complète en{' '}
            <span className="text-construction-orange font-extrabold">
              maçonnerie BTP
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De la petite réparation aux gros travaux, je vous accompagne avec mon expertise 
            et mon savoir-faire acquis en 7 ans de métier.
          </p>
        </motion.div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icone as keyof typeof iconMap] || Building
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-slate-900 hover:scale-[1.02]">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mx-auto w-16 h-16 bg-gradient-to-br from-construction-orange to-construction-yellow rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow"
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold group-hover:text-construction-orange transition-colors">
                      {service.titre}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.details.slice(0, 3).map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-construction-orange mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                      {service.details.length > 3 && (
                        <li className="text-sm text-construction-orange font-medium">
                          +{service.details.length - 3} autres services...
                        </li>
                      )}
                    </ul>
                    
                    <div className="pt-4">
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full group-hover:bg-construction-orange group-hover:text-white group-hover:border-construction-orange transition-all"
                      >
                        <Link href={`/services/${service.id}`}>
                          En savoir plus
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-slate-900 dark:bg-gradient-to-r dark:from-construction-blue dark:via-construction-blue/95 dark:to-construction-blue/90 text-white border-0 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/10 to-slate-600/20 dark:via-construction-orange/10 dark:to-construction-orange/20"></div>
            <CardContent className="p-8 relative z-10">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-sm">
                  Un projet en tête ? Parlons-en !
                </h3>
                <p className="text-white/95 mb-6 drop-shadow-sm">
                  Je suis à votre disposition pour étudier votre projet et vous proposer 
                  une solution adaptée. Contactez-moi pour un devis personnalisé et gratuit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/95 hover:text-slate-900/90 shadow-lg font-semibold">
                    <Link href="/contact">
                      Demander un devis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/80 text-slate-900 dark:text-white hover:bg-white hover:text-slate-900 hover:border-white backdrop-blur-sm drop-shadow-sm">
                    <Link href="/realisations">
                      Voir mes réalisations
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}