'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Mail, Globe, ChevronDown } from 'lucide-react';

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
    { name: 'Inicio', href: '/' },
    { name: 'Acerca de', href: '/acerca-de' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Cómo funciona', href: '/como-funciona' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <>
      {/* Top Bar - Simplificado para AI VetLab */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between py-2 sm:py-2.5 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="font-medium">globalmusic.sl@gmail.com</span>
            </div>
            <div className="hidden sm:block text-xs opacity-90">
              Gestión de muestras biológicas para mascotas
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
        <nav className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-3 sm:px-4">
          {/* Logo AI VetLab */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="AI VetLab - Gestión de muestras biológicas"
              width={160}
              height={50}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-3 sm:px-4 py-2 rounded-xl transition-all hover:bg-primary/5 whitespace-nowrap"
              >
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </span>
                {/* Dropdown indicator */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform" />
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

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <Mail className="h-4 w-4" />
              <span>Contáctanos</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-xl p-2 text-foreground hover:bg-primary hover:text-primary-foreground transition-all md:hidden flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container px-3 sm:px-4 py-4 sm:py-6">
              <div className="grid gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-xl px-3 py-3 text-base font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="#contacto"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-base font-bold text-white shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="h-5 w-5" />
                  Contáctanos
                </a>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-4 rounded-xl bg-muted/50 p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium">globalmusic.sl@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">Almoradí, VC ES</span>
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
