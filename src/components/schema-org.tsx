const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "DiagnosticLab",
  "name": "AI VetLab",
  "alternateName": "AI VetLab - Gestión de Muestras Biológicas",
  "url": "https://aivetlab.com",
  "logo": "https://aivetlab.com/logo.svg",
  "description": "Gestión rápida, eficaz y económica de muestras biológicas veterinarias. Recepción, envío a laboratorios e interpretación de resultados con inteligencia artificial.",
  "telephone": "+34XXXXXXXXX",
  "email": "globalmusic.sl@gmail.com",
  "priceRange": "$$",
  "image": "https://aivetlab.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Almoradí",
    "addressRegion": "Valencia",
    "addressCountry": "ES"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "09:00",
      "closes": "12:00"
    }
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "38.1083",
      "longitude": "-0.7892"
    },
    "geoRadius": "100000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Laboratorio Veterinario",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "DiagnosticLab",
          "name": "Recepción de muestras biológicas",
          "description": "Gestión eficiente de muestras de sangre y orina"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "DiagnosticLab",
          "name": "Envío de muestras a laboratorios",
          "description": "Transporte seguro y confiable de muestras"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "DiagnosticLab",
          "name": "Interpretación de resultados con IA",
          "description": "Comprende los informes de análisis diagnósticos"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
    />
  );
}
