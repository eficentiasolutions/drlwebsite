'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Calendar, Globe, ChevronDown } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('es');
  const langRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigation = [
    { name: 'Quiénes somos', href: '/quienes-somos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Clínicas', href: '#clinicas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between py-2 sm:py-2.5 text-sm sm:text-base">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <Phone className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                <span className="font-bold">Urgencias 24h: 900 000 000</span>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="https://facebook.com" className="hover:text-white/80 transition-colors" aria-label="Facebook">
                <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
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
        <nav className="container mx-auto flex h-16 sm:h-20 lg:h-24 items-center justify-between px-3 sm:px-4">
          {/* Logo Oficial DRL */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-drl.svg"
              alt="Clínicas Veterinarias DRL"
              width={180}
              height={66}
              className="h-10 sm:h-12 lg:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-3 sm:px-4 lg:px-5 py-2.5 rounded-xl transition-all hover:bg-primary/5 whitespace-nowrap"
              >
                <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </span>
                {/* Dropdown indicator */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-primary/70 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            ))}

            {/* Language Selector Desktop */}
            <div className="relative ml-2" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-primary/5 transition-all group"
                aria-label="Seleccionar idioma"
              >
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-lg leading-none">{currentLanguage.flag}</span>
                <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-xl shadow-lg py-2 min-w-[160px] z-50 animate-in fade-in slide-in-from-top-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary/5 ${
                        currentLang === lang.code ? 'text-primary bg-primary/5' : 'text-foreground'
                      }`}
                    >
                      <span className="text-lg leading-none">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {currentLang === lang.code && (
                        <span className="ml-auto text-primary">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* CTA Secundario - Urgencias */}
            <a
              href="tel:900000000"
              className="group inline-flex items-center gap-2 rounded-lg border-2 border-red-600 px-4 py-2 text-sm font-bold text-red-600 transition-all hover:bg-red-600 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">Urgencias 24h</span>
              <span className="xl:hidden">Urgencias</span>
            </a>
            {/* CTA Principal - Agendar Cita */}
            <a
              href="https://provetcloud.com/6912/onlinebooking/?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <Calendar className="h-4 w-4" />
              <span>Agendar Cita</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-xl p-2 text-foreground hover:bg-primary hover:text-primary-foreground transition-all lg:hidden flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <div className="container px-3 sm:px-4 py-3 sm:py-4">
              <div className="grid gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 text-base font-bold text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {/* CTA Principal - Agendar Cita */}
                <a
                  href="https://provetcloud.com/6912/onlinebooking/?lang=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 px-4 py-3 text-base font-bold text-white shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Calendar className="h-5 w-5" />
                  Agendar Cita
                </a>
                {/* CTA Secundario - Urgencias */}
                <a
                  href="tel:900000000"
                  className="flex items-center justify-center gap-2 w-full rounded-lg border-2 border-red-600 px-4 py-3 text-base font-bold text-red-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  Urgencias 24h
                </a>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-4 rounded-xl bg-muted/50 p-3 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="font-medium">900 000 000</span>
                  <span className="text-muted-foreground hidden xs:inline">(Urgencias)</span>
                </div>
              </div>

              {/* Language Selector Mobile */}
              <div className="mt-4">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-1">
                  Idioma / Language
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                        currentLang === lang.code
                          ? 'bg-primary/10 border-2 border-primary'
                          : 'bg-muted/50 border-2 border-transparent hover:bg-muted'
                      }`}
                    >
                      <span className="text-xl leading-none">{lang.flag}</span>
                      <span className="text-[10px] font-medium uppercase">{lang.code}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
