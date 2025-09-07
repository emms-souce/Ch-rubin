// Types pour les services BTP
export interface Service {
  id: string
  titre: string
  description: string
  icone: string
  details: string[]
  image?: string
}

// Types pour les projets/réalisations
export interface Projet {
  id: string
  titre: string
  description: string
  image: string
  categorie: string
  date: string
  client?: string
  duree?: string
  images?: string[]
}

// Types pour les informations de contact
export interface ContactInfo {
  nom: string
  entreprise?: string
  telephone: string
  email: string
  message: string
  service?: string
  urgence?: 'normale' | 'urgente' | 'tres_urgente'
}

// Types pour les témoignages
export interface Témoignage {
  id: string
  nom: string
  entreprise?: string
  contenu: string
  note: number
  date: string
  avatar?: string
}

// Types pour la navigation
export interface NavItem {
  titre: string
  href: string
  description?: string
  items?: NavItem[]
}

// Types pour les métadonnées SEO
export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
}