'use client';

import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StaggerContainer, StaggerItem } from '@/animations/fade-in';
import { clinics } from '@/data/clinics';

function getGoogleMapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function Clinics() {
  return (
    <section id="clinicas" className="bg-gradient-to-b from-muted/30 to-muted/50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            NUESTRAS CLÍNICAS
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Encuentra la clínica más cercana
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Contamos con 5 centros en Alicante para estar siempre cerca de ti y tu mascota
          </p>
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clinics.map((clinic) => (
            <StaggerItem key={clinic.id}>
              <Card className="group h-full border-2 transition-all hover:border-primary hover:shadow-xl">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="mb-3 flex items-start justify-between">
                    <Badge
                      variant={clinic.type === 'hospital' ? 'default' : 'secondary'}
                      className="text-xs font-semibold"
                    >
                      {clinic.type === 'hospital' ? '🏥 Hospital 24h' : '🩺 Clínica'}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{clinic.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{clinic.city}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{clinic.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Horario</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{clinic.hours}</p>
                    </div>
                  </div>

                  <a
                    href={getGoogleMapsUrl(clinic.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Cómo llegar
                  </a>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
