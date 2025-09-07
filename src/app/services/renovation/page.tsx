import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Phone, Mail, ChevronLeft, Wrench } from 'lucide-react'
import Link from 'next/link'
import { siteConfig, services } from '@/lib/config'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: `Rénovation Complète | ${siteConfig.nom} - ${siteConfig.entreprise}`,
  description: `Services de rénovation complète par ${siteConfig.nom} : salles de bain, cuisines, cloisons, façades. Artisan rénovateur en Seine-et-Marne.`,
  openGraph: {
    title: `Rénovation Complète | ${siteConfig.nom}`,
    description: `Rénovation intérieure et extérieure, salles de bain, cuisines, façades par ${siteConfig.nom}, artisan spécialisé en rénovation.`,
    url: `${siteConfig.url}/services/renovation`,
  },
}

const serviceData = services.find(s => s.id === 'renovation-complete')!

const typesRenovation = [
  {
    titre: "Rénovation Intérieure",
    description: "Transformation complète de vos espaces de vie",
    items: ["Salles de bain", "Cuisines", "Séjours", "Chambres", "Bureaux"]
  },
  {
    titre: "Rénovation Extérieure", 
    description: "Remise à neuf de vos façades et espaces extérieurs",
    items: ["Façades", "Terrasses", "Cours", "Murs extérieurs", "Escaliers"]
  },
  {
    titre: "Rénovation Énergétique",
    description: "Amélioration de l'efficacité énergétique",
    items: ["Isolation", "Étanchéité", "Ventilation", "Ouvertures", "Chauffage"]
  }
]

const etapesRenovation = [
  {
    numero: "1",
    titre: "Diagnostic Initial",
    description: "Évaluation complète de l'existant et faisabilité technique"
  },
  {
    numero: "2",
    titre: "Conception & Devis",
    description: "Élaboration du projet et chiffrage détaillé des travaux"
  },
  {
    numero: "3",
    titre: "Démarches Administratives",
    description: "Accompagnement pour les autorisations si nécessaires"
  },
  {
    numero: "4",
    titre: "Préparation du Chantier",
    description: "Protection des espaces et organisation logistique"
  },
  {
    numero: "5",
    titre: "Travaux de Rénovation",
    description: "Exécution selon planning établi avec suivi quotidien"
  },
  {
    numero: "6",
    titre: "Finitions & Livraison",
    description: "Finitions soignées et réception des travaux"
  }
]

const guaranties = [
  "Garantie décennale sur tous les travaux",
  "Assurance responsabilité civile professionnelle",
  "Suivi post-travaux pendant 1 an",
  "Matériaux certifiés et de qualité",
  "Respect des délais convenus",
  "Nettoyage complet en fin de chantier"
]

export default function RenovationPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: serviceData.titre,
          description: serviceData.description,
          serviceType: "Rénovation Complète",
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Breadcrumb */}
        <section className="py-6 px-4 border-b">
          <div className="container mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-construction-orange transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-construction-orange transition-colors">Services</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Rénovation Complète</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-construction-orange/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-construction-blue/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <Button asChild variant="outline" size="sm" className="mb-6">
                    <Link href="/services">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Retour aux Services
                    </Link>
                  </Button>
                  
                  <Badge variant="outline" className="mb-4 bg-construction-orange/10 text-construction-orange border-construction-orange/20">
                    🔄 Transformation & Rénovation
                  </Badge>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    {serviceData.titre}
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Redonnez vie à vos espaces avec nos services de rénovation complète. 
                    De la conception à la livraison, nous transformons vos projets en réalité.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-construction-orange hover:bg-construction-orange/90">
                    <Link href="/contact">
                      Projet de Rénovation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/realisations">
                      Voir nos Rénovations
                    </Link>
                  </Button>
                </div>
              </div>

              <Card className="bg-white dark:bg-slate-800 shadow-xl">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-construction-blue/20 to-construction-orange/20 rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="mx-auto w-24 h-24 bg-construction-orange/20 rounded-full flex items-center justify-center">
                          <Wrench className="h-12 w-12 text-construction-orange" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">Rénovation Expert</h3>
                          <p className="text-muted-foreground text-sm">
                            Transformations réussies depuis {siteConfig.experience}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types de rénovation */}
        <section className="py-20 px-4 bg-white dark:bg-slate-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos Spécialités en Rénovation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Que ce soit pour rénover une pièce ou transformer entièrement votre habitat, 
                nous maîtrisons tous les aspects de la rénovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {typesRenovation.map((type, index) => (
                <Card key={index} className="border-0 bg-slate-50 dark:bg-slate-900 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-construction-orange">
                      {type.titre}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.items.map((item, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-construction-orange flex-shrink-0" />
                          <span className="text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prestations détaillées */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prestations Détaillées
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez l'ensemble de nos prestations de rénovation, 
                réalisées avec soin et expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.details.map((detail, index) => (
                <Card key={index} className="border-0 bg-construction-orange/5 dark:bg-construction-orange/10 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-construction-orange mt-1 flex-shrink-0" />
                      <p className="font-medium">{detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Étapes de rénovation */}
        <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Les Étapes de Votre Rénovation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une méthodologie éprouvée pour mener à bien votre projet de rénovation 
                dans les meilleures conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {etapesRenovation.map((etape, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 border-0 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-construction-orange rounded-full flex items-center justify-center text-white font-bold">
                        {etape.numero}
                      </div>
                      <CardTitle className="text-lg">{etape.titre}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {etape.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Garanties */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Nos Garanties & Engagements
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Votre satisfaction et la qualité de nos rénovations sont nos priorités absolues.
                </p>
                
                <div className="space-y-4">
                  {guaranties.map((garantie, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-construction-orange mt-1 flex-shrink-0" />
                      <p className="font-medium">{garantie}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-construction-orange/5 dark:bg-construction-orange/10 border-construction-orange/20">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Parlons de Votre Projet
                  </CardTitle>
                  <CardDescription className="text-base">
                    Chaque rénovation est unique. Discutons ensemble de vos envies 
                    et contraintes pour créer le projet qui vous ressemble.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-construction-orange/20 rounded-full flex items-center justify-center">
                        <span className="text-construction-orange font-bold text-sm">1</span>
                      </div>
                      <p className="text-sm font-medium">Rendez-vous gratuit à domicile</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-construction-orange/20 rounded-full flex items-center justify-center">
                        <span className="text-construction-orange font-bold text-sm">2</span>
                      </div>
                      <p className="text-sm font-medium">Étude personnalisée et devis détaillé</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-construction-orange/20 rounded-full flex items-center justify-center">
                        <span className="text-construction-orange font-bold text-sm">3</span>
                      </div>
                      <p className="text-sm font-medium">Suivi de chantier et livraison</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-construction-orange hover:bg-construction-orange/90">
                      <Link href="/contact">
                        <Mail className="mr-2 h-4 w-4" />
                        Demander un Rendez-vous
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href={`tel:${siteConfig.telephone}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        {siteConfig.telephone}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}