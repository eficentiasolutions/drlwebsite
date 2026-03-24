import { Metadata } from 'next';
import { Microscope, Target, Zap, Eye, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Acerca de | AI VetLab',
  description: 'Conoce AI VetLab, tu aliado en gestión de muestras biológicas veterinarias. Innovación, tecnología y dedicación para el bienestar de tu mascota.',
  openGraph: {
    title: 'Acerca de | AI VetLab',
    description: 'Conoce AI VetLab y nuestros valores.',
  },
};

const values = [
  { icon: Target, title: 'Precisión', description: 'Cada muestra tratada con máximo cuidado' },
  { icon: Zap, title: 'Innovación', description: 'IA para interpretación de resultados' },
  { icon: Eye, title: 'Transparencia', description: 'Proceso visible en cada etapa' },
  { icon: Heart, title: 'Compromiso', description: 'Dedicados al bienestar animal' },
];

export default function AcercaDePage() {
  return (
    <>
      {/* Hero único */}
      <section className="relative min-h-[60vh] flex items-center bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-8xl font-bold text-secondary/10">05</span>
              <span className="text-xl font-semibold text-muted-foreground">Nosotros</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Revolucionando el análisis veterinario
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
                  alt="Laboratorio AI VetLab"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Lo que nos hace diferentes
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                En <strong className="text-primary">AI VetLab</strong>, combinamos tecnología de vanguardia con un profundo compromiso con el bienestar animal.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                Nuestro sistema permite la recepción, gestión y envío de muestras a laboratorios concertados. Lo único que nos diferencia es nuestra <strong className="text-primary">interpretación de resultados mediante inteligencia artificial</strong> para que entiendas todo claramente.
              </p>

              <div className="flex flex-wrap gap-3">
                {['IA Avanzada', 'Laboratorios ISO', 'Resultados 24-48h', 'Soporte Directo'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Minimalista */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border/50 text-center group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-foreground text-white rounded-2xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Nuestra misión</h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  Facilitar el acceso a análisis diagnósticos de calidad, haciendo que el proceso sea rápido, eficaz y económico. Utilizamos tecnología avanzada para garantizar resultados precisos y comprensibles para cada dueño de mascota.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Años experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Análisis realizados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              ¿Quieres saber más?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estamos aquí para resolver cualquier duda que tengas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-white font-semibold rounded-lg hover:bg-primary transition-colors"
              >
                Contáctanos
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/como-funciona"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
              >
                Ver proceso
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
