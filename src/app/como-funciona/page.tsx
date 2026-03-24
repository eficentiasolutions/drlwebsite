import { Metadata } from 'next';
import { FlaskConical, Package, Truck, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Cómo funciona | AI VetLab',
  description: 'Descubre cómo funciona nuestro proceso de gestión de muestras biológicas: recepción, gestión, envío a laboratorios e interpretación de resultados con IA.',
  openGraph: {
    title: 'Cómo funciona | AI VetLab',
    description: 'Proceso de gestión de muestras biológicas veterinarias.',
  },
};

const steps = [
  {
    number: '1',
    icon: FlaskConical,
    title: 'Recepción de muestras',
    description: 'Recepción segura de muestras biológicas con control de temperatura y registro inmediato.',
    image: 'https://images.unsplash.com/photo-1579168761940-4a6c1a6d9b4c?w=600&q=80',
    details: ['Verificación de identificación', 'Control de temperatura', 'Registro en sistema', 'Almacenamiento temporal'],
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    number: '2',
    icon: Package,
    title: 'Gestión de muestras',
    description: 'Procesamiento eficiente y seguro de cada muestra con trazabilidad completa.',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968a0130?w=600&q=80',
    details: ['Etiquetado preciso', 'Trazabilidad completa', 'Control de cadenas de frío', 'Preparación para transporte'],
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
  },
  {
    number: '3',
    icon: Truck,
    title: 'Envío a laboratorios',
    description: 'Transporte seguro a laboratorios certificados con seguimiento en tiempo real.',
    image: 'https://images.unsplash.com/photo-1559753621-93bc6d0f5f3b?w=600&q=80',
    details: ['Transporte refrigerado', 'Seguimiento online', 'Laboratorios certificados', 'Entrega garantizada'],
    color: 'text-teal-500',
    bg: 'bg-teal-500/10',
  },
  {
    number: '4',
    icon: Sparkles,
    title: 'Resultados con IA',
    description: 'Interpretación clara de resultados mediante inteligencia artificial.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    details: ['Análisis automatizado', 'Explicaciones claras', 'Comparación con valores normales', 'Recomendaciones'],
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      {/* Hero único */}
      <section className="relative min-h-[50vh] flex items-center bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-8xl font-bold text-secondary/10">03</span>
              <span className="text-xl font-semibold text-muted-foreground">El proceso</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              De la muestra al resultado
            </h1>
          </div>
        </div>
      </section>

      {/* Timeline Vertical único */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

              <div className="space-y-16">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative flex flex-col sm:flex-row gap-6 sm:gap-8">
                      {/* Number Circle */}
                      <div className="flex-shrink-0 z-10">
                        <div className={`w-16 h-16 rounded-full ${step.bg} ${step.color} flex items-center justify-center border-4 border-background`}>
                          <span className="text-xl font-bold">{step.number}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-2 sm:pt-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center`}>
                            <Icon className={`h-6 w-6 ${step.color}`} />
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                            {step.title}
                          </h2>
                        </div>

                        <p className="text-muted-foreground mb-6 max-w-xl">
                          {step.description}
                        </p>

                        {/* Image */}
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-6 max-w-lg">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-2 gap-3">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                              <div className={`w-1.5 h-1.5 rounded-full ${step.color}`} />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Resumen */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                En resumen
              </h2>
              <p className="text-muted-foreground">
                Un proceso simple que puedes seguir online
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 p-8 bg-card rounded-2xl shadow-lg">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${step.bg} ${step.color} flex items-center justify-center shrink-0 font-bold`}>
                    {step.number}
                  </div>
                  <span className="text-sm sm:text-base font-medium text-foreground hidden sm:block">
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground hidden sm:block" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-muted/50 rounded-xl text-center">
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Tiempo total:</strong> 24-48 horas desde la recepción de la muestra
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-white font-semibold rounded-lg hover:bg-primary transition-colors"
              >
                Iniciar ahora
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
