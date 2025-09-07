'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { useTheme } from 'next-themes'
import { Menu, Sun, Moon, Phone, Mail } from 'lucide-react'
import { siteConfig, navigationPrincipale } from '@/lib/config'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      {/* Barre de contact supérieure */}
      <div className="bg-construction-blue text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{siteConfig.telephone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{siteConfig.email}</span>
            </div>
          </div>
          <div className="text-sm">
            {siteConfig.horaires.semaine}
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="h-8 w-8 bg-construction-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BTP</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-foreground">{siteConfig.nom}</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">{siteConfig.slogan}</p>
              </div>
            </motion.div>
          </Link>

          {/* Navigation desktop */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationPrincipale.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent">
                        {item.titre}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                          {item.items.map((subItem) => (
                            <li key={subItem.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subItem.titre}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        {item.titre}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Toggle thème */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Changer le thème</span>
            </Button>

            {/* Bouton CTA */}
            <Button 
              asChild 
              className="hidden md:flex text-white shadow-lg font-semibold border-2" 
              style={{ 
                backgroundColor: '#000000',
                borderColor: '#333333'
              }}
            >
              <Link href="/contact">
                Devis Gratuit
              </Link>
            </Button>

            {/* Menu mobile */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="lg:hidden"
                  size="icon"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu de navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu de Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                  {navigationPrincipale.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-2 py-1 text-lg font-medium hover:text-construction-orange transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.titre}
                      </Link>
                      {item.items && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.titre}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <Button 
                      asChild 
                      className="w-full text-white shadow-lg font-semibold border-2" 
                      style={{ 
                        backgroundColor: '#000000',
                        borderColor: '#333333'
                      }}
                    >
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        Devis Gratuit
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}