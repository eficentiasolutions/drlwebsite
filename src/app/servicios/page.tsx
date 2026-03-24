import { Metadata } from 'next';
import { FlaskConical, Truck, BrainCircuit, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Servicios | AI VetLab',
  description: 'Descubre nuestros servicios de gestión de muestras biológicas veterinarias: recepción, envío a laboratorios e interpretación de resultados con IA.',
  openGraph: {
    title: 'Servicios | AI VetLab',
    description: 'Servicios de gestión de muestras biológicas veterinarias.',
  },
};

const services = [
  {
    icon: FlaskConical,
    title: 'Recepción de muestras biológicas',
    description: 'Gestión eficiente de muestras de sangre y orina con los más altos estándares de calidad y seguridad.',
    image: 'https://images.unsplash.com/photo-1579168761940-4a6c1a6d9b4c?w=800&q=80',
    features: [
      'Recepción segura de muestras',
      'Control de temperatura constante',
      'Registro digital y trazabilidad',
      'Almacenamiento certificado',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Truck,
    title: 'Envío a laboratorios certificados',
    description: 'Transporte seguro y confiable de muestras a laboratorios concertados con seguimiento en tiempo real.',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968a0130?w=800&q=80',
    features: [
      'Transporte refrigerado garantizado',
      'Laboratorios con certificación ISO',
      'Seguimiento online del envío',
      'Resultados en 24-48 horas',
    ],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: BrainCircuit,
    title: 'Interpretación con Inteligencia Artificial',
    description: 'Nuestra IA analiza y explica los resultados de forma sencilla para que los entiendas perfectamente.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    features: [
      'Análisis inteligente automatizado',
      'Explicaciones en lenguaje simple',
      'Comparación con valores normales',
      'Recomendaciones personalizadas',
    ],
    color: 'from-teal-500 to-green-500',
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero único */}
      <section className="relative min-h-[50vh] flex items-center bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-8xl font-bold text-primary/10">02</span>
              <span className="text-xl font-semibold text-muted-foreground">Servicios</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Lo que podemos hacer por ti
            </h1>
          </div>
        </div>
      </section>

      {/* Services - Layout alternado único */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-20 lg:space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-8 lg:gap-16`}
                >
                  {/* Number */}
                  <div className="text-8xl font-bold text-primary/5 -mb-4">
                    0{index + 1}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12">
                      {/* Image */}
                      <div className="flex-1 relative min-h-[300px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                          {service.title}
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          href="/#contacto"
                          className="inline-flex items-center gap-2 text-foreground font-semibold border-b-2 border-primary hover:text-primary hover:border-primary/50 transition-colors pb-1"
                        >
                          Solicitar este servicio
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Minimalista */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              ¿Necesitas más información?
            </h2>
            <p className="text-muted-foreground mb-8">
              Estamos aquí para responder cualquier duda sobre nuestros servicios
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-white font-semibold rounded-lg hover:bg-primary transition-colors"
            >
              Contactar con nosotros
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
