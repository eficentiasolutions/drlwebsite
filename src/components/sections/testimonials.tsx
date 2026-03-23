'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/animations/fade-in';
import Image from 'next/image';
import { testimonials } from '@/data/clinics';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonios" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80"
          alt="Happy pet with veterinarian"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            TESTIMONIOS
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            ¿Qué dicen de nosotros?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Reseñas verificadas de nuestros clientes satisfechos
          </p>
        </div>

        <FadeIn>
          <Card className="mx-auto max-w-4xl border-2 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_auto]">
                {/* Quote icon */}
                <div className="hidden md:flex">
                  <Quote className="h-24 w-24 text-primary/20" />
                </div>

                <div className="space-y-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <cite className="not-italic text-lg font-semibold">{currentTestimonial.name}</cite>
                      <p className="text-sm text-muted-foreground">Cliente verificado ★★★★★</p>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-2">
                      <button
                        onClick={prevTestimonial}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary/5 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                        aria-label="Testimonio anterior"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary/5 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                        aria-label="Siguiente testimonio"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </footer>

                  {/* Dots indicator */}
                  <div className="flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2.5 rounded-full transition-all ${
                          index === currentIndex ? 'w-8 bg-primary' : 'w-2.5 bg-muted'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Ir al testimonio ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
