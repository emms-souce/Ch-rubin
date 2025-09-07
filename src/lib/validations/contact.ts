import { z } from 'zod'

export const contactSchema = z.object({
  nom: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  
  entreprise: z
    .string()
    .optional(),
  
  telephone: z
    .string()
    .min(10, 'Le numéro de téléphone doit contenir au moins 10 chiffres')
    .regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Format de téléphone invalide'),
  
  email: z
    .string()
    .email('Adresse email invalide')
    .min(1, 'L\'email est requis'),
  
  service: z
    .string()
    .optional(),
  
  urgence: z
    .string()
    .default('normale'),
  
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
  
  accepteConditions: z
    .boolean()
    .refine(val => val === true, 'Vous devez accepter les conditions d\'utilisation'),
  
  accepteNewsletter: z
    .boolean()
    .optional()
})

export type ContactFormData = z.infer<typeof contactSchema>