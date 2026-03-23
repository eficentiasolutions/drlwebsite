'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar, Home, Stethoscope, MapPin, MessageSquare, Star } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Inicio',
      href: '#',
      icon: Home,
      description: 'Página principal'
    },
    {
      name: 'Servicios',
      href: '#servicios',
      icon: Stethoscope,
      description: 'Nuestros servicios'
    },
    {
      name: 'Clínicas',
      href: '#clinicas',
      icon: MapPin,
      description: 'Encuéntranos'
    },
    {
      name: 'Testimonios',
      href: '#testimonios',
      icon: Star,
      description: 'Opiniones'
    },
    {
      name: 'Contacto',
      href: '#contacto',
      icon: MessageSquare,
      description: 'Contáctanos'
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                <span className="font-semibold text-xs lg:text-sm">Urgencias 24h: 900 000 000</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5" />
                <span className="text-xs lg:text-sm">Cita online disponible</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" className="hover:text-white/80 transition-colors" aria-label="Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <nav className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
            <div className="relative flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
              <span className="text-xl lg:text-2xl font-bold">DRL</span>
              <div className="absolute -bottom-1 -right-1 flex h-4 w-4 lg:h-5 lg:w-5 items-center justify-center rounded-full bg-red-500 border-2 border-background">
                <span className="text-[10px] lg:text-xs">+</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-base lg:text-lg font-bold leading-tight">Clínicas Veterinarias</p>
              <p className="text-xs lg:text-sm text-muted-foreground">DRL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 xl:gap-2 lg:flex">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative px-3 lg:px-4 py-2 rounded-xl transition-all hover:bg-primary/5"
                >
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs lg:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                  </div>
                  {/* Dropdown indicator */}
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform" />
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden items-center gap-2 xl:gap-3 lg:flex">
            <a
              href="https://provetcloud.com/6912/onlinebooking/?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 xl:gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-3 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-bold text-amber-950 shadow-lg transition-all hover:from-amber-300 hover:to-amber-400 hover:scale-105 hover:shadow-xl"
            >
              <Calendar className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
              <span className="hidden sm:inline">Agendar Cita</span>
              <span className="sm:hidden">Cita</span>
            </a>
            <a
              href="tel:900000000"
              className="group inline-flex items-center gap-1.5 xl:gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-3 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-bold text-white shadow-lg transition-all hover:from-red-500 hover:to-red-600 hover:scale-105 hover:shadow-xl animate-pulse"
            >
              <Phone className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
              <span className="hidden sm:inline">Urgencias 24h</span>
              <span className="sm:hidden">Urgencias</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-xl p-2 lg:p-2.5 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 lg:h-6 lg:w-6" /> : <Menu className="h-5 w-5 lg:h-6 lg:w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <div className="container space-y-2 px-4 py-4 lg:py-6">
              <div className="grid gap-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 rounded-xl px-3 lg:px-4 py-2.5 lg:py-3 text-base font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex h-9 w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 lg:mt-6 space-y-2 lg:space-y-3">
                <a
                  href="https://provetcloud.com/6912/onlinebooking/?lang=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 lg:gap-3 w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-3 lg:py-4 text-sm lg:text-base font-bold text-amber-950 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Calendar className="h-4 w-4 lg:h-5 lg:w-5" />
                  Agendar Cita Online
                </a>
                <a
                  href="tel:900000000"
                  className="flex items-center justify-center gap-2 lg:gap-3 w-full rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 lg:py-4 text-sm lg:text-base font-bold text-white shadow-lg"
                >
                  <Phone className="h-4 w-4 lg:h-5 lg:w-5" />
                  Urgencias 24h
                </a>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-4 lg:mt-6 rounded-xl bg-muted/50 p-3 lg:p-4 space-y-2 lg:space-y-3">
                <div className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm">
                  <Phone className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-primary shrink-0" />
                  <span className="font-medium">900 000 000</span>
                  <span className="text-muted-foreground">(Urgencias 24h)</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm">
                  <Calendar className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-primary shrink-0" />
                  <span className="font-medium">Cita online disponible</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
