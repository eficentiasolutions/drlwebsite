import { Metadata } from 'next';
import { Microscope, FlaskConical, BrainCircuit, ArrowRight, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'AI VetLab | Gestión de muestras biológicas para mascotas',
  description: 'Gestión rápida, eficaz y económica de muestras biológicas veterinarias. Recepción, envío a laboratorios e interpretación de resultados con IA.',
  keywords: ['análisis veterinario', 'muestras biológicas', 'laboratorio veterinario', 'IA veterinaria', 'análisis de sangre', 'análisis de orina', 'Almoradí'],
  openGraph: {
    title: 'AI VetLab | Gestión de muestras biológicas para mascotas',
    description: 'Rápido, eficaz y económico. Gestión de muestras biológicas para tu mascota.',
    type: 'website',
  },
};

const services = [
  {
    icon: FlaskConical,
    title: 'Recepción de muestras',
    description: 'Gestión eficiente de sangre y orina',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968a0130?w=600&q=80',
    features: ['Control de temperatura', 'Registro inmediato', 'Almacenamiento seguro'],
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Microscope,
    title: 'Envío a laboratorios',
    description: 'Transporte seguro y confiable',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
    features: ['Laboratorios certificados', 'Seguimiento online', 'Resultados rápidos'],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: BrainCircuit,
    title: 'IA en resultados',
    description: 'Interpretación clara con IA',
    image: 'https://images.unsplash.com/photo-1677052134778-24a9b5f03d0b?w=600&q=80',
    features: ['Análisis inteligente', 'Explicaciones simples', 'Historial completo'],
    gradient: 'from-teal-500 to-emerald-500',
  },
];

const processSteps = [
  {
    number: '1',
    title: 'Recepción',
    description: 'Recibimos tus muestras',
    bg: 'bg-blue-600',
  },
  {
    number: '2',
    title: 'Gestión',
    description: 'Procesamos con cuidado',
    bg: 'bg-cyan-600',
  },
  {
    number: '3',
    title: 'Envío',
    description: 'A laboratorios certificados',
    bg: 'bg-teal-600',
  },
  {
    number: '4',
    title: 'Resultados',
    description: 'Interpretación con IA',
    bg: 'bg-emerald-600',
  },
];

const benefits = [
  { text: '24-48h respuesta', color: 'bg-blue-500' },
  { text: 'Sin cita previa', color: 'bg-cyan-500' },
  { text: 'Interpretación IA', color: 'bg-teal-500' },
  { text: 'Soporte directo', color: 'bg-emerald-500' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Diseño vibrante */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
                <span className="animate-ping">●</span>
                Innovación Veterinaria
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Análisis<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500">
                  veterinarios
                </span>
                <br />
                con IA
              </h1>

              <p className="text-xl sm:text-2xl text-foreground mb-8 font-medium">
                Rápido · Eficaz · Económico
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Gestiona muestras biológicas de tu mascota sin salir de casa. Recepción, envío a laboratorios certificados e interpretación de resultados con inteligencia artificial.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contacto"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-3">
                    Empezar ahora
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/como-funciona"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-foreground bg-white text-foreground font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Ver proceso
                </Link>
              </div>

              {/* Benefits pills */}
              <div className="flex flex-wrap gap-3 mt-8">
                {benefits.map((item, i) => (
                  <div key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-border">
                    <span className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image con overlay vibrante */}
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border-2 border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse]" />

                {/* Image */}
                <div className="absolute inset-8 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
                    alt="Laboratorio veterinario moderno"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-emerald-600/20" />
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 border-2 border-blue-200">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    24-48h
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Tiempo respuesta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Cards vibrantes */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-bold mb-4">
              NUESTROS SERVICIOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Todo lo que necesitas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tres servicios diseñados para simplificar el análisis veterinario de tu mascota
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href="/servicios"
                  className={`group relative ${index === 1 ? 'md:-mt-8' : ''}`}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primary/30">
                    {/* Image con overlay de color */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80 group-hover:opacity-90 transition-opacity`} />

                      {/* Icon badge */}
                      <div className="absolute top-4 right-4 w-14 h-14 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}>
                                                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                              </svg>
                                                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-2 font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        <span>Ver detalles</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process - Tarjetas coloridas */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full text-sm font-bold mb-4">
              CÓMO FUNCIONA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Proceso en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">4 pasos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/30 h-full">
                  <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/como-funciona"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Ver proceso completo
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats - Con vibrante gradiente */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.3\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div className="group">
              <div className="text-5xl lg:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">24h</div>
              <div className="text-sm opacity-90">Tiempo respuesta</div>
            </div>
            <div className="group">
              <div className="text-5xl lg:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm opacity-90">Análisis/mes</div>
            </div>
            <div className="group">
              <div className="text-5xl lg:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-sm opacity-90">Satisfacción</div>
            </div>
            <div className="group">
              <div className="text-5xl lg:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">365</div>
              <div className="text-sm opacity-90">Días/año</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Con colores vibrantes */}
      <section id="contacto" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-bold mb-4">
              CONTACTO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              ¿Tienes dudas?
            </h2>
            <p className="text-lg text-muted-foreground">
              Escríbenos y te respondemos lo antes posible
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Cards con colores */}
            <div className="space-y-4">
              <a href="mailto:globalmusic.sl@gmail.com" className="group flex items-center gap-4 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">globalmusic.sl@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-cyan-500">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shrink-0">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Ubicación</p>
                  <p className="text-sm text-muted-foreground">Almoradí, Valencia, España</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-teal-500">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shrink-0">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Horario</p>
                  <p className="text-sm text-muted-foreground">Lun-Dom: 9:00 - 22:00</p>
                </div>
              </div>
            </div>

            {/* Formulario con gradiente */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Envíanos un mensaje
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Tu nombre *"
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Tu email *"
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <textarea
                  placeholder="¿En qué podemos ayudarte? *"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  required
                />
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="consent" className="w-5 h-5 text-blue-500 border-2 border-blue-500 rounded focus:ring-blue-500" required />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    Acepto la política de privacidad
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-95"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button optimizado */}
      <a
        href="https://wa.me/34XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 hover:bg-[#20BA5A] animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52.075-.149.669-1.612.916-2.207.242-.579.487-.5.669-.5.173-.001.347-.001.52-.001.149.001.347.001.52.149.149.149.347.646.347 1.085 0 .438-.001 1.586-.001 1.586 0 .438.521 1.013 1.274 1.274.767.26 1.372.361 1.843.223.438-.149 1.476-.605 1.688-1.189.213-.583.213-1.083.149-1.189.064-.032.298-.149.644-.446z" />
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52.075-.149.669-1.612.916-2.207.242-.579.487-.5.669-.5.173-.001.347-.001.52-.001.149.001.347.001.52.149.149.149.347.646.347 1.085 0 .438-.001 1.586-.001 1.586 0 .438.521 1.013 1.274 1.274.767.26 1.372.361 1.843.223.438-.149 1.476-.605 1.688-1.189.213-.583.213-1.083.149-1.189.064-.032.298-.149.644-.446z" fill="currentColor" />
        </svg>
      </a>
    </>
  );
}
