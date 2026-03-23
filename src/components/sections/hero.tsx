'use client';

import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { FadeIn } from '@/animations/fade-in';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1920&q=80"
          alt="Veterinaria con mascotas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative z-20 mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/20">
              🏥 Más de 25 años de experiencia
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Clínicas Veterinarias
              <span className="mt-2 block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                DRL
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mb-8 text-xl text-white/90 md:text-2xl">
              Siempre contigo. Cuando lo necesitas.
            </p>
          </FadeIn>

          {/* Urgencias Badge Mejorado */}
          <FadeIn delay={0.3}>
            <a
              href="tel:900000000"
              className="group mb-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-lg font-bold text-white shadow-2xl border-2 border-red-400 transition-all hover:from-red-500 hover:to-red-600 hover:scale-105 animate-pulse hover:animate-none"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Phone className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-xs font-medium text-white/80">URGENCIAS 24H</p>
                <p className="text-lg">Llama ahora: 900 000 000</p>
              </div>
            </a>
          </FadeIn>

          {/* Botones de acción */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              {/* Botón Agendar Cita - Destacado */}
              <a
                href="https://provetcloud.com/6912/onlinebooking/?lang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 px-8 text-lg font-bold text-amber-950 shadow-2xl transition-all hover:from-amber-300 hover:to-amber-400 hover:scale-105 hover:shadow-amber-500/50"
              >
                <Calendar className="h-6 w-6" />
                Agendar Cita
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#clinicas"
                className="group inline-flex h-16 items-center justify-center gap-2 rounded-2xl bg-white px-8 text-lg font-semibold text-primary transition-all hover:bg-white/90 hover:scale-105 hover:shadow-xl"
              >
                Ver nuestras clínicas
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contacto"
                className="inline-flex h-16 items-center justify-center rounded-2xl border-2 border-white px-8 text-lg font-semibold text-white transition-all hover:bg-white/10 hover:scale-105 backdrop-blur-sm"
              >
                Contactar
              </a>
            </div>
          </FadeIn>

          {/* Trust indicators */}
          <FadeIn delay={0.5}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white">
              <div className="text-center">
                <p className="text-3xl font-bold">5</p>
                <p className="text-sm text-white/80">Clínicas</p>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div className="text-center">
                <p className="text-3xl font-bold">25+</p>
                <p className="text-sm text-white/80">Años</p>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div className="text-center">
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-white/80">Urgencias</p>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div className="text-center">
                <p className="text-3xl font-bold">4.8★</p>
                <p className="text-sm text-white/80">Valoración</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}
