'use client'

import { siteConfig } from '@/lib/config'

interface StructuredDataProps {
  type?: 'website' | 'organization' | 'service' | 'article'
  data?: object
}

export default function StructuredData({ type = 'website', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    }

    switch (type) {
      case 'organization':
        return {
          ...baseData,
          '@type': 'Organization',
          name: siteConfig.nom,
          description: siteConfig.description,
          url: siteConfig.url,
          telephone: siteConfig.telephone,
          email: siteConfig.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.adresse.rue,
            addressLocality: siteConfig.adresse.ville.split(' ')[1],
            postalCode: siteConfig.adresse.ville.split(' ')[0],
            addressCountry: 'FR',
          },
          openingHours: [
            'Mo-Fr 08:00-18:00',
            'Sa 09:00-17:00',
          ],
          sameAs: [
            siteConfig.reseauxSociaux.linkedin,
            siteConfig.reseauxSociaux.facebook,
          ],
          serviceArea: {
            '@type': 'Place',
            name: 'Région Parisienne',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services BTP',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Études de Structure',
                  description: 'Calculs et dimensionnement des structures béton, acier et bois',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Gestion de Projet',
                  description: 'Coordination et suivi de projets de construction',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Contrôle Technique',
                  description: 'Vérification et validation de la conformité des travaux',
                },
              },
            ],
          },
          ...data,
        }

      case 'website':
        return {
          ...baseData,
          '@type': 'WebSite',
          name: siteConfig.nom,
          description: siteConfig.description,
          url: siteConfig.url,
          publisher: {
            '@type': 'Organization',
            name: siteConfig.nom,
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${siteConfig.url}/recherche?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
          ...data,
        }

      case 'service':
        return {
          ...baseData,
          '@type': 'Service',
          provider: {
            '@type': 'Organization',
            name: siteConfig.nom,
            url: siteConfig.url,
          },
          areaServed: {
            '@type': 'Place',
            name: 'Région Parisienne',
          },
          ...data,
        }

      default:
        return {
          ...baseData,
          ...data,
        }
    }
  }

  const structuredData = getStructuredData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}