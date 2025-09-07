import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Home, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-0 shadow-xl bg-white dark:bg-slate-900">
            <CardContent className="p-12">
              {/* Animation 404 */}
              <div className="mb-8">
                <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-construction-orange to-construction-yellow mb-4">
                  404
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-construction-orange to-construction-yellow mx-auto mb-6"></div>
              </div>

              {/* Message */}
              <div className="space-y-4 mb-8">
                <h1 className="text-3xl font-bold text-foreground">
                  Page introuvable
                </h1>
                <p className="text-lg text-muted-foreground">
                  Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
                </p>
                <p className="text-sm text-muted-foreground">
                  Il se peut que l&apos;URL soit incorrecte ou que la page ait été supprimée.
                </p>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Button asChild className="bg-construction-orange hover:bg-construction-orange/90">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Retour à l'accueil
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Nous contacter
                  </Link>
                </Button>
              </div>

              {/* Liens utiles */}
              <div className="border-t pt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Vous cherchez peut-&ecirc;tre :
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/services">Nos services</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/realisations">Réalisations</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/a-propos">À propos</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}