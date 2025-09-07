import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Phone, Mail, ChevronLeft, DoorOpen, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { siteConfig, services } from '@/lib/config'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: `Création d'Ouvertures | ${siteConfig.nom} - ${siteConfig.entreprise}`,
  description: `Création d'ouvertures par ${siteConfig.nom} : percement de murs, baies vitrées, portes, fenêtres. Artisan spécialisé en Seine-et-Marne.`,
  openGraph: {
    title: `Création d'Ouvertures | ${siteConfig.nom}`,
    description: `Percement de murs porteurs, création de baies vitrées, portes et fenêtres par ${siteConfig.nom}, artisan expert en ouvertures.`,
    url: `${siteConfig.url}/services/ouvertures`,
  },
}

const serviceData = services.find(s => s.id === 'creation-ouvertures')!

const typesOuvertures = [
  {
    titre: "Portes Intérieures",
    description: "Création de passages entre pièces",
    details: ["Portes standards", "Portes coulissantes", "Passages libres", "Arcs décoratifs"]
  },
  {
    titre: "Fenêtres & Baies",
    description: "Apport de lumière naturelle",
    details: ["Fenêtres simples", "Baies vitrées", "Fenêtres de toit", "Ouvertures sur mesure"]
  },
  {
    titre: "Ouvertures Extérieures",
    description: "Accès vers l'extérieur",
    details: ["Portes d'entrée", "Portes-fenêtres", "Accès terrasse", "Sorties de secours"]
  }
]

const precautionsSécurité = [
  {
    titre: "Étude Structurelle",
    description: "Analyse préalable obligatoire pour les murs porteurs",
    icone: AlertTriangle
  },
  {
    titre: "Calculs de Charges",
    description: "Dimensionnement des renforts et linteaux",
    icone: AlertTriangle
  },
  {
    titre: "Techniques Sécurisées",
    description: "Méthodes de percement sans risque pour la structure",
    icone: AlertTriangle
  }
]

const processusCreation = [
  {
    etape: "Consultation",
    description: "Visite technique et étude de faisabilité",
    duree: "1-2 jours"
  },
  {
    etape: "Étude Technique",
    description: "Calculs structurels si mur porteur",
    duree: "3-5 jours"
  },
  {
    etape: "Préparation",
    description: "Fourniture matériaux et protection",
    duree: "1 jour"
  },
  {
    etape: "Percement",
    description: "Réalisation de l'ouverture",
    duree: "1-2 jours"
  },
  {
    etape: "Finitions",
    description: "Pose linteau et finitions",
    duree: "1-2 jours"
  }
]

const materielsSpecialises = [
  "Scie à chaîne pour béton",
  "Carotteuse pour percements précis", 
  "Étais de sécurité",
  "Aspirateur à poussière",
  "Matériel de protection",
  "Outils de mesure laser"
]

export default function OuverturesPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: serviceData.titre,
          description: serviceData.description,
          serviceType: "Création d'Ouvertures",
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
              <span className="text-foreground font-medium">Création d'Ouvertures</span>
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
                    🚪 Ouvertures Sur Mesure
                  </Badge>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    {serviceData.titre}
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Spécialiste de la création d'ouvertures, je réalise vos projets de percement 
                    avec la plus grande précision et dans le respect des règles de sécurité.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-construction-orange hover:bg-construction-orange/90">
                    <Link href="/contact">
                      Étude Gratuite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={`tel:${siteConfig.telephone}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Conseil Immédiat
                    </a>
                  </Button>
                </div>
              </div>

              <Card className="bg-white dark:bg-slate-800 shadow-xl">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-construction-blue/20 to-construction-orange/20 rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="mx-auto w-24 h-24 bg-construction-orange/20 rounded-full flex items-center justify-center">
                          <DoorOpen className="h-12 w-12 text-construction-orange" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">Expert en Ouvertures</h3>
                          <p className="text-muted-foreground text-sm">
                            Percements sécurisés depuis {siteConfig.experience}
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

        {/* Alert sécurité */}
        <section className="py-8 px-4 bg-orange-50 dark:bg-orange-900/20 border-y border-orange-200 dark:border-orange-800">
          <div className="container mx-auto">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                  ⚠️ Sécurité Avant Tout
                </h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm leading-relaxed">
                  Tout percement de mur porteur nécessite une étude structurelle préalable. 
                  Je vous accompagne dans cette démarche obligatoire pour garantir la sécurité de votre habitation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types d'ouvertures */}
        <section className="py-20 px-4 bg-white dark:bg-slate-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Types d'Ouvertures Réalisées
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                De la simple porte intérieure à la grande baie vitrée, 
                nous maîtrisons tous les types d'ouvertures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {typesOuvertures.map((type, index) => (
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
                      {type.details.map((detail, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-construction-orange flex-shrink-0" />
                          <span className="text-sm font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Précautions sécurité */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos Garanties Sécurité
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                La sécurité de votre structure est notre priorité absolue. 
                Nous respectons scrupuleusement toutes les normes en vigueur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {precautionsSécurité.map((precaution, index) => {
                const IconComponent = precaution.icone
                return (
                  <Card key={index} className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-orange-100 dark:bg-orange-800 rounded-lg">
                          <IconComponent className="h-6 w-6 text-orange-600" />
                        </div>
                        <CardTitle className="text-lg text-orange-900 dark:text-orange-100">
                          {precaution.titre}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-orange-800 dark:text-orange-200">
                        {precaution.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Prestations détaillées */}
        <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prestations Détaillées
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez l'ensemble de nos prestations pour la création d'ouvertures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.details.map((detail, index) => (
                <Card key={index} className="border-0 bg-white dark:bg-slate-900 hover:shadow-lg transition-shadow">
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

        {/* Processus */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Processus de Création
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un processus méthodique pour garantir la réussite et la sécurité de votre projet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processusCreation.map((etape, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="mx-auto w-16 h-16 bg-construction-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    {index < processusCreation.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-construction-orange/30 -translate-x-8"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{etape.etape}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{etape.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {etape.duree}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Matériel spécialisé */}
        <section className="py-20 px-4 bg-construction-orange/5 dark:bg-construction-orange/10">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Matériel Professionnel Spécialisé
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Nous utilisons uniquement du matériel professionnel de dernière génération 
                  pour garantir précision et sécurité dans nos interventions.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {materielsSpecialises.map((materiel, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-construction-orange flex-shrink-0" />
                      <span className="text-sm font-medium">{materiel}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-white dark:bg-slate-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DoorOpen className="h-5 w-5 text-construction-orange" />
                    <span>Votre Projet d'Ouverture</span>
                  </CardTitle>
                  <CardDescription>
                    Parlons de votre projet ! Chaque ouverture nécessite une approche personnalisée.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">✓ Étude Préalable Gratuite</h4>
                      <p className="text-xs text-muted-foreground">Faisabilité technique et réglementaire</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">✓ Devis Détaillé</h4>
                      <p className="text-xs text-muted-foreground">Prix transparent sans surprise</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">✓ Travaux Garantis</h4>
                      <p className="text-xs text-muted-foreground">Garantie décennale incluse</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-construction-orange hover:bg-construction-orange/90">
                      <Link href="/contact">
                        <Mail className="mr-2 h-4 w-4" />
                        Demander une Étude
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