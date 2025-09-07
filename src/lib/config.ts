import type { Service, ContactInfo, NavItem } from '@/types'

// Configuration du site
export const siteConfig = {
  nom: "Chérubin Ngongang",
  entreprise: "CN Construction",
  slogan: "Votre artisan BTP de confiance depuis 7 ans",
  description: "Artisan maçon qualifié, je réalise tous vos travaux de construction, rénovation et aménagement avec passion et savoir-faire traditionnel.",
  url: "https://cn-construction.fr",
  email: "cherubin.ngongang.btp@gmail.com",
  telephone: "+33 6 12 34 56 78",
  whatsapp: "+33612345678",
  adresse: {
    rue: "15 Rue des Artisans",
    ville: "77500 Chelles",
    pays: "France"
  },
  horaires: {
    semaine: "Lundi - Vendredi: 7h30 - 18h30",
    weekend: "Samedi: 8h00 - 17h00 (sur rendez-vous)"
  },
  reseauxSociaux: {
    facebook: "https://facebook.com/cnconstruction77"
  },
  experience: "7 ans",
  specialite: "Maçonnerie traditionnelle et moderne",
  zone: "Seine-et-Marne et région parisienne"
}

// Navigation principale
export const navigationPrincipale: NavItem[] = [
  {
    titre: "Accueil",
    href: "/",
  },
  {
    titre: "Services",
    href: "/services",
    description: "Découvrez mes services de maçonnerie",
    items: [
      {
        titre: "Maçonnerie Générale",
        href: "/services/maconnerie-generale",
        description: "Construction de murs, cloisons, fondations"
      },
      {
        titre: "Rénovation",
        href: "/services/renovation",
        description: "Rénovation complète de vos espaces"
      },
      {
        titre: "Création d'Ouvertures",
        href: "/services/ouvertures",
        description: "Portes, fenêtres, passages"
      }
    ]
  },
  {
    titre: "Réalisations",
    href: "/realisations",
    description: "Découvrez mes travaux récents"
  },
  {
    titre: "Mon Parcours",
    href: "/mon-parcours",
    description: "20 ans d'expérience à votre service"
  },
  {
    titre: "Contact",
    href: "/contact",
    description: "Contactez-moi pour votre projet"
  }
]

// Services proposés
export const services: Service[] = [
  {
    id: "maconnerie-generale",
    titre: "Maçonnerie Générale",
    description: "Construction et réparation de murs, cloisons et fondations",
    icone: "building",
    details: [
      "Construction de murs porteurs et cloisons",
      "Fondations et semelles de fondation",
      "Réparation et renforcement de structures",
      "Montage de murs en parpaings, briques, pierre",
      "Enduits intérieurs et extérieurs",
      "Joints et finitions"
    ]
  },
  {
    id: "renovation-complete",
    titre: "Rénovation Complète",
    description: "Rénovation intérieure et extérieure de votre habitat",
    icone: "clipboard-list",
    details: [
      "Rénovation de salles de bain et cuisines",
      "Abattage et reconstruction de cloisons",
      "Reprise d'étanchéité et isolation",
      "Réfection de façades",
      "Mise aux normes électriques et plomberie",
      "Aménagement d'intérieur personnalisé"
    ]
  },
  {
    id: "creation-ouvertures",
    titre: "Création d'Ouvertures",
    description: "Ouverture de murs pour portes, fenêtres et passages",
    icone: "search",
    details: [
      "Percement de murs porteurs (avec étude)",
      "Création de baies vitrées",
      "Pose de linteaux et renforts",
      "Ouvertures sur mesure",
      "Respect des règles de sécurité",
      "Finitions impeccables"
    ]
  },
  {
    id: "terrasses-dallages",
    titre: "Terrasses & Dallages",
    description: "Création de terrasses, allées et dallages extérieurs",
    icone: "shield-check",
    details: [
      "Terrasses en béton, carrelage, pierre",
      "Allées et cours d'accès",
      "Dallages industriels et décoratifs",
      "Évacuation des eaux pluviales",
      "Escaliers extérieurs",
      "Aménagement paysager simple"
    ]
  },
  {
    id: "petite-charpente",
    titre: "Petite Charpente",
    description: "Travaux de charpente traditionnelle et moderne",
    icone: "graduation-cap",
    details: [
      "Réparation et renforcement de charpente",
      "Création d'ouvertures de toit",
      "Pose de poutres et solives",
      "Habillage et isolation",
      "Petites extensions bois",
      "Abris et pergolas"
    ]
  },
  {
    id: "depannage-urgence",
    titre: "Dépannage & Urgence",
    description: "Interventions rapides pour réparations urgentes",
    icone: "lightbulb",
    details: [
      "Réparations d'urgence 24h/7j",
      "Colmatage de fuites et fissures",
      "Sécurisation provisoire",
      "Dégâts des eaux - consolidation",
      "Expertise rapide et devis gratuit",
      "Intervention dans les 2h en urgence"
    ]
  }
]

// Messages WhatsApp prédéfinis
export const messagesWhatsApp = {
  devis: "Bonjour Chérubin, je souhaiterais obtenir un devis pour des travaux de maçonnerie. Pouvez-vous me rappeler ?",
  urgence: "Bonjour, j'ai une urgence à mon domicile (fuite, fissure...). Pouvez-vous intervenir rapidement ?",
  renovation: "Bonjour, j'ai un projet de rénovation et j'aimerais discuter avec vous. Quand êtes-vous disponible ?",
  general: "Bonjour Chérubin, j'ai une question concernant vos services de maçonnerie. Pouvez-vous m'aider ?",
  rdv: "Bonjour, j'aimerais programmer un rendez-vous pour étudier mon projet. Merci !"
}