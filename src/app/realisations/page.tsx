import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Phone, Mail, Camera, Award, Star, Calendar } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: `Nos Réalisations | ${siteConfig.nom} - ${siteConfig.entreprise}`,
  description: `Découvrez les réalisations de ${siteConfig.nom} : projets de maçonnerie, rénovations, créations d'ouvertures. Portfolio de {siteConfig.experience} d'expérience.`,
  openGraph: {
    title: `Nos Réalisations | ${siteConfig.nom}`,
    description: `Portfolio des travaux réalisés par ${siteConfig.nom}, maçon professionnel : construction, rénovation, ouvertures et plus encore.`,
    url: `${siteConfig.url}/realisations`,
  },
}

const projetsPhares = [
  {
    titre: "Rénovation Complète - Villa Familiale",
    lieu: "Chelles (77)",
    date: "2024",
    type: "Rénovation",
    description: "Rénovation complète d'une villa de 150m² incluant cuisine, salle de bain et création d'ouvertures.",
    tags: ["Rénovation", "Cuisine", "Salle de bain", "Ouvertures"],
    duree: "6 semaines",
    surface: "150 m²"
  },
  {
    titre: "Construction Garage + Studio",
    lieu: "Meaux (77)", 
    date: "2024",
    type: "Construction",
    description: "Construction d'un garage de 40m² avec studio d'appoint, fondations, murs et toiture.",
    tags: ["Construction", "Fondations", "Maçonnerie", "Gros œuvre"],
    duree: "4 semaines",
    surface: "40 m²"
  },
  {
    titre: "Création Baie Vitrée - Maison Individuelle",
    lieu: "Torcy (77)",
    date: "2023",
    type: "Ouvertures",
    description: "Percement de mur porteur et création d'une baie vitrée de 3m pour accès terrasse.",
    tags: ["Percement", "Baie vitrée", "Linteau", "Terrasse"],
    duree: "1 semaine",
    surface: "3 m linéaire"
  },
  {
    titre: "Réfection Façade + Terrasse",
    lieu: "Lagny-sur-Marne (77)",
    date: "2023", 
    type: "Façade",
    description: "Réfection complète de façade avec enduit et création de terrasse en béton décoratif.",
    tags: ["Façade", "Enduit", "Terrasse", "Béton décoratif"],
    duree: "3 semaines",
    surface: "80 m² façade + 25 m² terrasse"
  },
  {
    titre: "Extension Cuisine - Pavillon",
    lieu: "Bussy-Saint-Georges (77)",
    date: "2023",
    type: "Extension",
    description: "Extension de cuisine de 20m² avec création d'ouvertures et raccordements.",
    tags: ["Extension", "Cuisine", "Fondations", "Raccordements"],
    duree: "5 semaines", 
    surface: "20 m²"
  },
  {
    titre: "Rénovation Salle de Bain - Appartement",
    lieu: "Noisy-le-Grand (93)",
    date: "2022",
    type: "Rénovation",
    description: "Rénovation complète de salle de bain avec carrelage, plomberie et électricité.",
    tags: ["Salle de bain", "Carrelage", "Étanchéité", "Finitions"],
    duree: "2 semaines",
    surface: "8 m²"
  }
]

const statistiques = [
  { nombre: "300+", label: "Projets Réalisés", icone: CheckCircle },
  { nombre: "80+", label: "Clients Satisfaits", icone: Star },
  { nombre: "7", label: "Années d'Expérience", icone: Award },
  { nombre: "100%", label: "Projets Livrés", icone: Calendar },
]

const typesProjets = [
  {
    categorie: "Maçonnerie Générale",
    nombre: "120+",
    description: "Murs, fondations, cloisons"
  },
  {
    categorie: "Rénovations Complètes", 
    nombre: "85+",
    description: "Cuisines, salles de bain, intérieurs"
  },
  {
    categorie: "Créations d'Ouvertures",
    nombre: "65+", 
    description: "Portes, fenêtres, baies vitrées"
  },
  {
    categorie: "Terrasses & Dallages",
    nombre: "45+",
    description: "Terrasses, allées, cours"
  }
]

const temoignages = [
  {
    nom: "Famille Dubois",
    projet: "Rénovation cuisine",
    lieu: "Chelles",
    commentaire: "Travail impeccable et dans les délais. Chérubin est un vrai professionnel, à l'écoute et de bon conseil.",
    note: 5
  },
  {
    nom: "Mr. Martin",
    projet: "Création baie vitrée", 
    lieu: "Meaux",
    commentaire: "Très satisfait de la création de ma baie vitrée. Travail soigné et respect des normes de sécurité.",
    note: 5
  },
  {
    nom: "Mme Lefebvre",
    projet: "Extension garage",
    lieu: "Torcy", 
    commentaire: "Excellent artisan ! Construction de mon garage réalisée parfaitement. Je recommande vivement.",
    note: 5
  }
]

export default function RealisationsPage() {
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
              📸 Portfolio & Réalisations
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos{' '}
              <span className="text-construction-orange">Réalisations</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez quelques-unes de nos réalisations récentes. Chaque projet témoigne de notre 
              engagement pour la qualité et la satisfaction de nos clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-construction-orange hover:bg-construction-orange/90">
                <Link href="/contact">
                  Votre Projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  Nos Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Statistiques */}
        <section className="py-16 px-4 bg-white dark:bg-slate-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistiques.map((stat, index) => {
                const IconComponent = stat.icone
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-construction-orange/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-construction-orange" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-construction-orange mb-1">{stat.nombre}</div>
                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Types de projets */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos Domaines d'Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Répartition de nos projets réalisés par domaine de compétence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {typesProjets.map((type, index) => (
                <Card key={index} className="text-center border-0 bg-slate-50 dark:bg-slate-900 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-3xl font-bold text-construction-orange mb-2">
                      {type.nombre}
                    </div>
                    <CardTitle className="text-lg">{type.categorie}</CardTitle>
                    <CardDescription className="text-sm">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projets phares */}
        <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Projets Phares
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sélection de nos réalisations les plus représentatives de notre savoir-faire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projetsPhares.map((projet, index) => (
                <Card key={index} className="border-0 bg-white dark:bg-slate-900 hover:shadow-xl transition-shadow group">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative bg-gradient-to-br from-construction-blue/20 to-construction-orange/20 rounded-t-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <div className="mx-auto w-16 h-16 bg-construction-orange/20 rounded-full flex items-center justify-center">
                            <Camera className="h-8 w-8 text-construction-orange" />
                          </div>
                          <p className="text-sm font-medium text-muted-foreground">
                            Photos disponibles sur demande
                          </p>
                        </div>
                      </div>
                      
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-construction-orange/90 text-white">
                          {projet.type}
                        </Badge>
                      </div>
                      
                      <div className="absolute bottom-4 right-4">
                        <Badge variant="outline" className="bg-white/90">
                          {projet.date}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-construction-orange transition-colors">
                      {projet.titre}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {projet.lieu} • {projet.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {projet.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                      <div>
                        <span className="font-medium">Durée :</span> {projet.duree}
                      </div>
                      <div>
                        <span className="font-medium">Surface :</span> {projet.surface}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Témoignages Clients
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                La satisfaction de nos clients est notre plus belle récompense.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {temoignages.map((temoignage, index) => (
                <Card key={index} className="border-0 bg-construction-orange/5 dark:bg-construction-orange/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg">{temoignage.nom}</CardTitle>
                        <CardDescription className="text-sm">
                          {temoignage.projet} • {temoignage.lieu}
                        </CardDescription>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(temoignage.note)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm italic text-muted-foreground leading-relaxed">
                      "{temoignage.commentaire}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-construction-orange/5 dark:bg-construction-orange/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Votre Projet Mérite le Même Soin
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Chaque réalisation est unique et personnalisée. Parlons de votre projet 
              et donnons-lui vie ensemble !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-construction-orange hover:bg-construction-orange/90">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Discutons de Votre Projet
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${siteConfig.telephone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {siteConfig.telephone}
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Devis gratuit • Réponse sous 24h • Conseils personnalisés
            </p>
          </div>
        </section>
      </main>
    </>
  )
}