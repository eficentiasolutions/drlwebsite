'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/animations/fade-in';

export function Contact() {
  return (
    <section id="contacto" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 to-muted/50" />

      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            CONTACTO
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Conéctate con nosotros
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Estamos aquí para ayudarte. Contáctanos por el medio que prefieras.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          {/* Contact Info - 2 columns */}
          <FadeIn className="lg:col-span-2 space-y-4">
            <Card className="border-2 bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80">Urgencias 24h</p>
                    <p className="text-xl font-bold">900 000 000</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="text-lg font-semibold">info@drl.vet</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Ubicaciones</p>
                    <p className="text-lg font-semibold">Alicante, España</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">WhatsApp</p>
                    <p className="text-sm text-green-700">Respuesta rápida</p>
                  </div>
                </div>
                <button className="w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition-all hover:bg-green-700 hover:scale-[1.02] active:scale-[0.98]">
                  Contactar por WhatsApp
                </button>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Contact Form - 3 columns */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            <Card className="border-2 shadow-lg">
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-bold">Envíanos un mensaje</h3>
                <form className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                        Nombre completo *
                      </label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
                        Teléfono
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+34 XXX XXX XXX"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-semibold">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      placeholder="¿En qué podemos ayudarte?"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Escribe tu mensaje aquí..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" required className="mt-1.5 h-4 w-4" />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      He leído y acepto la{' '}
                      <a href="/privacidad" className="text-primary hover:underline">
                        política de privacidad
                      </a>{' '}
                      *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="h-5 w-5" />
                    Enviar mensaje
                  </button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
