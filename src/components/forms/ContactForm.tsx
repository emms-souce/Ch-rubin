'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  Send, 
  Phone, 
  Mail, 
  Building, 
  User,
  MessageSquare,
  Clock,
  AlertCircle,
  Zap,
  CheckCircle
} from 'lucide-react'
import { contactSchema, type ContactFormData } from '@/lib/validations/contact'
import { services } from '@/lib/config'
import { cn } from '@/lib/utils'

interface ContactFormProps {
  className?: string
}

export default function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nom: '',
      entreprise: '',
      telephone: '',
      email: '',
      service: '',
      urgence: 'normale',
      message: '',
      accepteConditions: false,
      accepteNewsletter: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulation d'envoi d'email (à remplacer par l'API réelle)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Données du formulaire:', data)
      
      setSubmitStatus('success')
      form.reset()
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const urgenceOptions = [
    { value: 'normale', label: 'Normale', icon: Clock, color: 'text-green-600' },
    { value: 'urgente', label: 'Urgente', icon: AlertCircle, color: 'text-orange-600' },
    { value: 'tres_urgente', label: 'Très urgente', icon: Zap, color: 'text-red-600' },
  ]

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <Card className="border-0 shadow-xl bg-white dark:bg-slate-900">
        <CardHeader className="text-center pb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-16 h-16 bg-gradient-to-br from-construction-orange to-construction-yellow rounded-lg flex items-center justify-center mb-4"
          >
            <Send className="h-8 w-8 text-white" />
          </motion.div>
          <CardTitle className="text-2xl font-bold">
            Contactez-nous
          </CardTitle>
          <CardDescription className="text-base">
            Remplissez ce formulaire et nous vous répondrons sous 24h
          </CardDescription>
        </CardHeader>

        <CardContent>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="text-green-800 dark:text-green-200 font-medium">
                  Message envoyé avec succès ! Nous vous répondrons rapidement.
                </p>
              </div>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
            >
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-red-800 dark:text-red-200 font-medium">
                  Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.
                </p>
              </div>
            </motion.div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Informations personnelles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Nom complet *</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Votre nom complet"
                          {...field}
                          className="focus:ring-construction-orange focus:border-construction-orange"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="entreprise"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span>Entreprise</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Nom de votre entreprise"
                          {...field}
                          className="focus:ring-construction-orange focus:border-construction-orange"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Téléphone *</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="01 23 45 67 89"
                          {...field}
                          className="focus:ring-construction-orange focus:border-construction-orange"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email *</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="votre@email.com"
                          {...field}
                          className="focus:ring-construction-orange focus:border-construction-orange"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Service et urgence */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service concerné</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-construction-orange focus:border-construction-orange">
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.titre}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="urgence"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Niveau d'urgence</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-construction-orange focus:border-construction-orange">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {urgenceOptions.map((option) => {
                            const IconComponent = option.icon
                            return (
                              <SelectItem key={option.value} value={option.value}>
                                <div className="flex items-center space-x-2">
                                  <IconComponent className={cn("h-4 w-4", option.color)} />
                                  <span>{option.label}</span>
                                </div>
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>Message *</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                        className="min-h-[120px] focus:ring-construction-orange focus:border-construction-orange"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Minimum 10 caractères, maximum 1000 caractères
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Cases à cocher */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="accepteConditions"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          J'accepte les conditions d'utilisation et la politique de confidentialité *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="accepteNewsletter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          Je souhaite recevoir votre newsletter avec les actualités BTP
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {/* Bouton de soumission */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-construction-orange hover:bg-construction-orange/90 disabled:opacity-50"
                  size="lg"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                    </motion.div>
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>* Champs obligatoires</p>
                <p className="mt-2">
                  Vos données sont protégées et ne seront jamais partagées avec des tiers.
                </p>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}