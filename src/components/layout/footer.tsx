'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.svg"
                alt="AI VetLab - Gestión de muestras biológicas"
                width={160}
                height={50}
                className="h-10 lg:h-12 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-md text-muted-foreground leading-relaxed text-sm lg:text-base">
              Gestión de muestras biológicas para mascotas. Rápido, eficaz y económico. Innovación en análisis veterinarios con inteligencia artificial.
            </p>

            {/* Contact info */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm">globalmusic.sl@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Ubicación</p>
                  <p className="text-sm">Almoradí, VC ES</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/acerca-de" className="text-muted-foreground transition-colors hover:text-primary">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-muted-foreground transition-colors hover:text-primary">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="text-muted-foreground transition-colors hover:text-primary">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-muted-foreground transition-colors hover:text-primary">
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

        <div className="mt-8 lg:mt-12 border-t pt-6 lg:pt-8">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-xs lg:text-sm text-muted-foreground">
              © {currentYear} AI VetLab. Todos los derechos reservados.
            </p>
            <p className="text-xs lg:text-sm text-muted-foreground">
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
