'use client';

import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/animations/fade-in';

export function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-amber-100/50 to-orange-50 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-700 border border-amber-200">
                  <Calendar className="mr-2 h-4 w-4" />
              RESERVA TU CITA ONLINE
                </div>

                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  Agenda una cita para tu mascota en segundos
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Utiliza nuestro nuevo portal de citas online. Rápido, fácil y disponible 24/7.
                  Programa la visita que tu mascota necesita sin llamadas telefónicas.
                </p>

                <ul className="space-y-3">
                  {[
                    'Disponible 24 horas, 7 días a la semana',
                    'Sin esperas telefónicas',
                    'Elige la fecha y hora que mejor te convenga',
                    'Confirmación inmediata',
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 shrink-0 text-green-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://provetcloud.com/6912/onlinebooking/?lang=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:from-amber-400 hover:to-amber-500 hover:scale-105 hover:shadow-2xl"
                >
                  <Calendar className="h-6 w-6" />
                  Agendar Cita Ahora
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              {/* Visual Card */}
              <div className="relative">
                <div className="rounded-3xl bg-white p-8 shadow-2xl border border-amber-100">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500">
                      <Calendar className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Portal de Citas</h3>
                      <p className="text-sm text-gray-500">Provet Cloud</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 rounded-xl bg-amber-50 p-4 border border-amber-100">
                      <Clock className="h-8 w-8 text-amber-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Disponible 24/7</p>
                        <p className="text-sm text-gray-600">Reserva cuando quieras</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl bg-green-50 p-4 border border-green-100">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Confirmación instantánea</p>
                        <p className="text-sm text-gray-600">Sin esperas</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-amber-400/20 blur-2xl" />
                <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-orange-400/20 blur-2xl" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
