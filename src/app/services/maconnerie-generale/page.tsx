import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building, ArrowRight, CheckCircle, Phone, Mail, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { siteConfig, services } from '@/lib/config'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: `Maçonnerie Générale | ${siteConfig.nom} - ${siteConfig.entreprise}`,
  description: `Services de maçonnerie générale par ${siteConfig.nom} : construction de murs, fondations, cloisons, enduits. Artisan qualifié en Seine-et-Marne.`,
  openGraph: {
    title: `Maçonnerie Générale | ${siteConfig.nom}`,
    description: `Construction de murs porteurs, fondations, cloisons et tous travaux de maçonnerie générale par ${siteConfig.nom}, artisan qualifié.`,
    url: `${siteConfig.url}/services/maconnerie-generale`,
  },
}

const serviceData = services.find(s => s.id === 'maconnerie-generale')!

const processus = [
  {
    etape: "1",
    titre: "Étude & Devis",
    description: "Analyse de votre projet et établissement d'un devis détaillé gratuit"
  },
  {
    etape: "2", 
    titre: "Préparation",
    description: "Préparation du chantier, fourniture des matériaux et organisation"
  },
  {
    etape: "3",
    titre: "Réalisation",
    description: "Exécution des travaux dans le respect des règles de l'art"
  },
  {
    etape: "4",
    titre: "Finitions",
    description: "Finitions soignées et nettoyage complet du chantier"
  }
]

const avantages = [
  "Maçon qualifié avec {siteConfig.experience} d'expérience",
  "Respect des normes et règlements",
  "Matériaux de qualité professionnelle",
  "Garantie décennale",
  "Devis gratuit et détaillé",
  "Intervention rapide"
]

export default function MaconnerieGeneralePage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: serviceData.titre,
          description: serviceData.description,
          serviceType: "Maçonnerie Générale",
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
              <span className="text-foreground font-medium">Maçonnerie Générale</span>
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
                    🏗️ Maçonnerie Traditionnelle & Moderne
                  </Badge>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    {serviceData.titre}
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {serviceData.description}. Fort de {siteConfig.experience} d'expérience, 
                    je réalise tous vos travaux de maçonnerie avec passion et expertise.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-construction-orange hover:bg-construction-orange/90">
                    <Link href="/contact">
                      Devis Gratuit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={`tel:${siteConfig.telephone}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Appeler Maintenant
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
                          <Building className="h-12 w-12 text-construction-orange" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">Maçonnerie d'Excellence</h3>
                          <p className="text-muted-foreground text-sm">
                            Travaux de qualité depuis {siteConfig.experience}
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

        {/* Services détaillés */}
        <section className="py-20 px-4 bg-white dark:bg-slate-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prestations Détaillées
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez l'ensemble de nos prestations en maçonnerie générale, 
                réalisées selon les règles de l'art.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.details.map((detail, index) => (
                <Card key={index} className="border-0 bg-slate-50 dark:bg-slate-900 hover:shadow-lg transition-shadow">
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

        {/* Processus de travail */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Notre Processus de Travail
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une méthode éprouvée pour garantir la qualité et la satisfaction de nos clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processus.map((etape, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="mx-auto w-16 h-16 bg-construction-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {etape.etape}
                    </div>
                    {index < processus.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-construction-orange/30 -translate-x-8"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{etape.titre}</h3>
                  <p className="text-muted-foreground">{etape.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-20 px-4 bg-construction-orange/5 dark:bg-construction-orange/10">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pourquoi Choisir {siteConfig.nom} ?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Une expertise reconnue et un engagement qualité pour tous vos projets de maçonnerie.
                </p>
                
                <div className="space-y-4">
                  {avantages.map((avantage, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-construction-orange mt-1 flex-shrink-0" />
                      <p className="font-medium">{avantage}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-white dark:bg-slate-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-construction-orange" />
                    <span>Demandez Votre Devis</span>
                  </CardTitle>
                  <CardDescription>
                    Obtenez rapidement un devis personnalisé pour votre projet de maçonnerie.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-construction-orange">✓ Gratuit</p>
                      <p className="text-muted-foreground">Sans engagement</p>
                    </div>
                    <div>
                      <p className="font-medium text-construction-orange">✓ Rapide</p>
                      <p className="text-muted-foreground">Réponse sous 24h</p>
                    </div>
                    <div>
                      <p className="font-medium text-construction-orange">✓ Détaillé</p>
                      <p className="text-muted-foreground">Prix transparent</p>
                    </div>
                    <div>
                      <p className="font-medium text-construction-orange">✓ Personnalisé</p>
                      <p className="text-muted-foreground">Adapté à vos besoins</p>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full bg-construction-orange hover:bg-construction-orange/90">
                    <Link href="/contact">
                      Demander mon Devis Gratuit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}