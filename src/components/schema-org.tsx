import { clinics } from '@/data/clinics';

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  "name": "Clínicas Veterinarias DRL",
  "alternateName": "DRL Veterinaria",
  "url": "https://drl.vet",
  "logo": "https://drl.vet/logo.png",
  "description": "Clínicas veterinarias DRL con urgencias 24h, hospitalización y atención especializada. Más de 25 años cuidando de tu mascota.",
  "telephone": "+34900000000",
  "email": "info@drl.vet",
  "priceRange": "$$",
  "image": "https://drl.vet/og-image.jpg",
  "address": [
    {
      "@type": "VeterinaryCare",
      "name": "Hospital Veterinario DRL Elche",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Carrer Tonico Sansano Mora, 8",
        "addressLocality": "Elche",
        "addressRegion": "Alicante",
        "postalCode": "03293",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "38.2622",
        "longitude": "-0.7011"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "telephone": "+34900000000"
    },
    {
      "@type": "VeterinaryCare",
      "name": "Hospital Veterinario DRL Torrevieja",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Diego Ramírez Pastor, 140",
        "addressLocality": "Torrevieja",
        "addressRegion": "Alicante",
        "postalCode": "03181",
        "addressCountry": "ES"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "00:00"
        }
      ]
    },
    {
      "@type": "VeterinaryCare",
      "name": "Hospital Veterinario DRL Almoradí",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Calle San Emigdio 29",
        "addressLocality": "Almoradí",
        "addressRegion": "Alicante",
        "postalCode": "03160",
        "addressCountry": "ES"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ]
    },
    {
      "@type": "VeterinaryCare",
      "name": "Clínica Veterinaria DRL Benijófar",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Federíco García Lorca, 21, bajo",
        "addressLocality": "Benijófar",
        "addressRegion": "Alicante",
        "postalCode": "03178",
        "addressCountry": "ES"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "14:00"
        }
      ]
    },
    {
      "@type": "VeterinaryCare",
      "name": "Clínica Veterinaria DRL San Fulgencio",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. de Londres, 1A, Local 7",
        "addressLocality": "San Fulgencio",
        "addressRegion": "Alicante",
        "postalCode": "03177",
        "addressCountry": "ES"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ]
    }
  ],
  "sameAs": [
    "https://www.facebook.com/drlvet",
    "https://www.instagram.com/drlvet"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
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
