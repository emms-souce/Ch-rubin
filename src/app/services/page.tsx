import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { siteConfig, services } from '@/lib/config'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: `Services de Maçonnerie | ${siteConfig.nom} - ${siteConfig.entreprise}`,
  description: `Découvrez tous les services de maçonnerie proposés par ${siteConfig.nom} : construction, rénovation, création d'ouvertures, terrasses et plus encore. Devis gratuit.`,
  openGraph: {
    title: `Services de Maçonnerie | ${siteConfig.nom}`,
    description: `Maçonnerie générale, rénovation, création d'ouvertures et tous travaux BTP par ${siteConfig.nom}, artisan qualifié depuis ${siteConfig.experience}.`,
    url: `${siteConfig.url}/services`,
  },
}

// Mapper les icônes string vers les composants Lucide
const getIcon = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    building: Building,
    'clipboard-list': Building,
    search: Building,
    'shield-check': Building,
    'graduation-cap': Building,
    lightbulb: Building,
  }
  return iconMap[iconName] || Building
}

export default function ServicesPage() {
  return (
    <>
      <StructuredData type="organization" />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-construction-orange/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-construction-blue/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <Badge variant="outline" className="mb-6 bg-construction-orange/10 text-construction-orange border-construction-orange/20">
              ⚡ Services Professionnels de Maçonnerie
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos Services de{' '}
              <span className="text-construction-orange">Maçonnerie</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Avec {siteConfig.experience} d'expérience, je vous accompagne dans tous vos projets de construction, 
              rénovation et aménagement. Découvrez l'étendue de mon savoir-faire artisanal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-construction-orange hover:bg-construction-orange/90">
                <Link href="/contact">
                  Devis Gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/realisations">
                  Voir nos Réalisations
                </Link>
              </Button>
            </div>
          </div>
        </section>



        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Une Expertise Complète
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Du gros œuvre aux finitions, je maîtrise toutes les techniques de la maçonnerie 
                traditionnelle et moderne pour donner vie à vos projets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = getIcon(service.icone)
                const href = service.id === 'renovation-complete' ? '/services/renovation' : 
                           service.id === 'creation-ouvertures' ? '/services/ouvertures' :
                           `/services/${service.id}`
                
                return (
                  <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-slate-800">
                    <CardHeader>
                      <div className="mb-4 p-3 bg-construction-orange/10 rounded-lg w-fit group-hover:bg-construction-orange/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-construction-orange" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-construction-orange transition-colors">
                        {service.titre}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {service.details.slice(0, 3).map((detail, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-construction-orange mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                        {service.details.length > 3 && (
                          <p className="text-sm text-muted-foreground font-medium">
                            + {service.details.length - 3} autres prestations
                          </p>
                        )}
                      </div>
                      
                      <Button asChild variant="outline" className="w-full group-hover:bg-construction-orange group-hover:text-white transition-colors">
                        <Link href={href}>
                          En savoir plus
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-construction-orange/5 dark:bg-construction-orange/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet. 
              Devis gratuit et conseils personnalisés garantis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-construction-orange hover:bg-construction-orange/90">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Demander un Devis
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${siteConfig.telephone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {siteConfig.telephone}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}