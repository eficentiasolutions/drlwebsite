'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <span className="text-xl font-bold text-primary-foreground">DRL</span>
              </div>
              <span className="text-2xl font-bold">Clínicas Veterinarias DRL</span>
            </div>
            <p className="mb-6 max-w-md text-muted-foreground leading-relaxed">
              Más de 25 años cuidando de tu mascota con urgencias 24h, hospitalización y atención especializada. Siempre contigo, cuando lo necesites.
            </p>

            {/* Contact info */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>Urgencias 24h</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@drl.vet</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Alicante, España</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <Link
                href="https://facebook.com"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white transition-all hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground transition-colors hover:text-primary">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#clinicas" className="text-muted-foreground transition-colors hover:text-primary">
                  Nuestras Clínicas
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-muted-foreground transition-colors hover:text-primary">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-muted-foreground transition-colors hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacidad" className="text-muted-foreground transition-colors hover:text-primary">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground transition-colors hover:text-primary">
                  Política de cookies
                </Link>
              </li>
              <li>
                <Link href="/aviso-legal" className="text-muted-foreground transition-colors hover:text-primary">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-muted-foreground transition-colors hover:text-primary">
                  Términos y condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Clínicas Veterinarias DRL. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Desarrollado por{' '}
              <a href="https://eficentia.com" className="font-semibold text-primary hover:underline">
                Eficentia Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
