'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, Phone, Clock, Zap } from 'lucide-react'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { messagesWhatsApp } from '@/lib/config'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { openWhatsAppWithPreset } = useWhatsApp()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleQuickContact = (preset: keyof typeof messagesWhatsApp) => {
    openWhatsAppWithPreset(preset)
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Button
                  size="lg"
                  className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 relative"
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                  <motion.div
                    className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <span className="text-xs font-bold text-white">!</span>
                  </motion.div>
                </Button>
              </motion.div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                  <span>Contactez-nous sur WhatsApp</span>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Choisissez le type de contact qui vous convient le mieux :
                </p>

                <div className="grid gap-3">
                  <Card 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleQuickContact('devis')}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-construction-orange" />
                        <span>Demande de devis</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-xs">
                        Obtenez un devis gratuit pour votre projet
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleQuickContact('urgence')}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        <span>Urgence</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-xs">
                        Situation urgente nécessitant une intervention rapide
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleQuickContact('rdv')}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-construction-blue" />
                        <span>Rendez-vous</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-xs">
                        Planifier un rendez-vous pour votre projet
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleQuickContact('general')}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center space-x-2">
                        <MessageCircle className="h-4 w-4 text-green-500" />
                        <span>Question générale</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-xs">
                        Toute autre question sur nos services
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground text-center">
                    Vous serez redirigé vers WhatsApp avec un message prérempli
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      )}
    </AnimatePresence>
  )
}