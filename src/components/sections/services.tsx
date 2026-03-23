'use client';

import {
  AlertCircle,
  BedDouble,
  Stethoscope,
  Microscope,
  type LucideIcon,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { StaggerContainer, StaggerItem } from '@/animations/fade-in';
import { services } from '@/data/clinics';

const iconMap: Record<string, LucideIcon> = {
  AlertCircle,
  BedDouble,
  Stethoscope,
  Microscope,
};

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            NUESTROS SERVICIOS
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            ¿En qué podemos ayudarte?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Estamos a su disposición las 24 horas, los 365 días del año.
            Tenemos un personal amable y vocacional, totalmente dedicado a preservar
            y mejorar la salud y calidad de vida de vuestro querido peludo.
          </p>
        </div>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <StaggerItem key={service.id}>
                <Card className="group h-full border-2 transition-all hover:border-primary hover:shadow-xl hover:-translate-y-2">
                  <CardHeader>
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
