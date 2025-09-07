import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Phone, Mail, User, Award, MapPin, Clock, GraduationCap, Heart } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: `Mon Parcours | ${siteConfig.nom} - ${siteConfig.entreprise}`,
  description: `Découvrez le parcours de ${siteConfig.nom}, maçon professionnel depuis ${siteConfig.experience}. Formation, expérience et passion pour la maçonnerie traditionnelle.`,
  openGraph: {
    title: `Mon Parcours | ${siteConfig.nom}`,
    description: `${siteConfig.experience} d'expérience en maçonnerie. Découvrez l'histoire et la passion de ${siteConfig.nom} pour l'artisanat du bâtiment.`,
    url: `${siteConfig.url}/mon-parcours`,
  },
}

const parcoursProfessionnel = [
  {
    periode: "2017 - Aujourd'hui",
    poste: "Artisan Maçon Indépendant",
    entreprise: siteConfig.entreprise,
    lieu: "Seine-et-Marne (77)",
    description: "Création de mon entreprise artisanale et développement d'une clientèle fidèle. Spécialisation en maçonnerie traditionnelle et rénovation.",
    realisations: [
      "300+ chantiers réalisés",
      "80+ clients satisfaits", 
      "Développement d'un réseau de partenaires locaux",
      "Mise en place d'une garantie qualité"
    ]
  },
  {
    periode: "2015 - 2017",
    poste: "Maçon Qualifié",
    entreprise: "Entreprise Générale du Bâtiment",
    lieu: "Région Parisienne",
    description: "Perfectionnement des techniques de maçonnerie sur des chantiers de grande envergure. Spécialisation en rénovation et création d'ouvertures.",
    realisations: [
      "Participation à des projets de rénovation de grande ampleur",
      "Maîtrise des techniques de percement sécurisé",
      "Formation aux nouvelles normes énergétiques",
      "Encadrement d'apprentis"
    ]
  },
  {
    periode: "2012 - 2015",
    poste: "Compagnon Maçon",
    entreprise: "Artisan Maçon Local",
    lieu: "Seine-et-Marne (77)",
    description: "Apprentissage des techniques traditionnelles de maçonnerie et développement de l'expertise artisanale.",
    realisations: [
      "Maîtrise du gros œuvre et des finitions",
      "Apprentissage des techniques de restauration",
      "Formation à la conduite de chantier",
      "Obtention de certifications professionnelles"
    ]
  }
]

const formations = [
  {
    diplome: "CAP Maçon",
    etablissement: "CFA du Bâtiment",
    annee: "2012",
    mention: "Mention Bien"
  },
  {
    diplome: "Formation Sécurité Chantier",
    etablissement: "OPPBTP",
    annee: "2015",
    mention: "Certification"
  },
  {
    diplome: "Habilitation Percement Murs Porteurs",
    etablissement: "Formation Continue BTP",
    annee: "2018",
    mention: "Certification"
  },
  {
    diplome: "Formation Énergies Renouvelables",
    etablissement: "CAPEB",
    annee: "2020",
    mention: "Certification"
  }
]

const valeurs = [
  {
    titre: "Passion du Métier",
    description: "Amour sincère pour l'artisanat traditionnel et le travail bien fait",
    icone: Heart
  },
  {
    titre: "Qualité & Précision",
    description: "Recherche constante de l'excellence dans chaque réalisation",
    icone: Award
  },
  {
    titre: "Écoute Client",
    description: "Attention portée aux besoins et satisfaction de chaque client",
    icone: User
  },
  {
    titre: "Formation Continue",
    description: "Mise à jour régulière des compétences et techniques",
    icone: GraduationCap
  }
]

const competencesClés = [
  "Maçonnerie traditionnelle et moderne",
  "Gros œuvre et fondations", 
  "Rénovation tous corps d'état",
  "Création d'ouvertures sécurisées",
  "Enduits décoratifs et finitions",
  "Terrasses et dallages",
  "Petite charpente",
  "Respect des normes énergétiques",
  "Gestion de chantier",
  "Relation client excellente"
]

const philosophie = {
  titre: "Ma Philosophie Artisanale",
  description: "Depuis mes débuts dans le métier, je cultive une approche artisanale qui privilégie la qualité à la quantité. Chaque chantier est une nouvelle aventure, une occasion de créer quelque chose de durable et de beau.",
  points: [
    "Respect des techniques traditionnelles",
    "Utilisation de matériaux de qualité",
    "Écoute attentive des besoins clients",
    "Transmission du savoir-faire",
    "Engagement environnemental"
  ]
}

export default function MonParcoursPage() {
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
          
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <Badge variant="outline" className="mb-4 bg-construction-orange/10 text-construction-orange border-construction-orange/20">
                    👨‍🔧 Portrait d'Artisan
                  </Badge>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Mon Parcours
                    <br />
                    <span className="text-construction-orange">d'Artisan Maçon</span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {siteConfig.experience} d'expérience au service de la maçonnerie traditionnelle. 
                    Découvrez l'histoire d'une passion transformée en expertise professionnelle.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-construction-orange/5 rounded-lg">
                    <div className="text-2xl font-bold text-construction-orange mb-1">{siteConfig.experience}</div>
                    <div className="text-sm text-muted-foreground">d'Expérience</div>
                  </div>
                  <div className="text-center p-4 bg-construction-orange/5 rounded-lg">
                    <div className="text-2xl font-bold text-construction-orange mb-1">300+</div>
                    <div className="text-sm text-muted-foreground">Projets Réalisés</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-construction-orange hover:bg-construction-orange/90">
                    <Link href="/contact">
                      Travaillons Ensemble
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/realisations">
                      Voir mes Réalisations
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
                          <User className="h-12 w-12 text-construction-orange" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">{siteConfig.nom}</h3>
                          <p className="text-muted-foreground text-sm">
                            Artisan Maçon Professionnel
                          </p>
                          <Badge className="bg-construction-orange text-white">
                            {siteConfig.zone}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Parcours professionnel */}
        <section className="py-20 px-4 bg-white dark:bg-slate-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mon Parcours Professionnel
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {siteConfig.experience} de progression constante dans l'univers de la maçonnerie, 
                de l'apprentissage à l'expertise artisanale.
              </p>
            </div>

            <div className="space-y-8">
              {parcoursProfessionnel.map((etape, index) => (
                <Card key={index} className="border-0 bg-slate-50 dark:bg-slate-900">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Badge variant="outline" className="mb-2">
                          {etape.periode}
                        </Badge>
                        <h3 className="text-xl font-semibold text-construction-orange">
                          {etape.poste}
                        </h3>
                        <p className="font-medium">{etape.entreprise}</p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{etape.lieu}</span>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2 space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {etape.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {etape.realisations.map((realisation, i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-construction-orange mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{realisation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Formations */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Formation & Certifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un apprentissage continu pour rester à la pointe des techniques 
                et des réglementations du secteur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {formations.map((formation, index) => (
                <Card key={index} className="border-0 bg-construction-orange/5 dark:bg-construction-orange/10 text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-construction-orange/20 rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="h-6 w-6 text-construction-orange" />
                    </div>
                    <CardTitle className="text-lg">{formation.diplome}</CardTitle>
                    <CardDescription className="text-sm">
                      {formation.etablissement}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge variant="outline">{formation.annee}</Badge>
                      <p className="text-sm font-medium text-construction-orange">
                        {formation.mention}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mes Valeurs & Engagements
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Les principes qui guident mon travail au quotidien et ma relation avec mes clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valeurs.map((valeur, index) => {
                const IconComponent = valeur.icone
                return (
                  <Card key={index} className="border-0 bg-white dark:bg-slate-900 text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-construction-orange/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-8 w-8 text-construction-orange" />
                      </div>
                      <CardTitle className="text-lg">{valeur.titre}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {valeur.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Compétences */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Compétences & Spécialités
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {siteConfig.experience} d'expérience m'ont permis de développer une expertise 
                  complète dans tous les domaines de la maçonnerie.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {competencesClés.map((competence, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-construction-orange mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium">{competence}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-construction-orange/5 dark:bg-construction-orange/10 border-construction-orange/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <Heart className="h-6 w-6 text-construction-orange" />
                    <span>{philosophie.titre}</span>
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {philosophie.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {philosophie.points.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-construction-orange mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">{point}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-construction-orange/5 dark:bg-construction-orange/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mettons Notre Savoir-Faire à Votre Service
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Mon expérience et ma passion sont à votre disposition pour réaliser vos projets 
              avec l'excellence que vous méritez.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-construction-orange hover:bg-construction-orange/90">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Parlons de Votre Projet
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${siteConfig.telephone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {siteConfig.telephone}
                </a>
              </Button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Disponible du lundi au samedi • Devis gratuit • Conseils personnalisés
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-construction-orange" />
                  <span>{siteConfig.zone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-construction-orange" />
                  <span>Intervention rapide</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}