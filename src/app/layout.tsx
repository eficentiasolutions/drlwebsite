import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SchemaOrg } from "@/components/schema-org";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Clínicas Veterinarias DRL | Urgencias 24h en Alicante",
    template: "%s | Clínicas Veterinarias DRL",
  },
  description: "Clínicas veterinarias DRL con urgencias 24h, hospitalización y atención especializada. Más de 25 años cuidando de tu mascota en Elche, Torrevieja, Almoradí, Benijófar y San Fulgencio.",
  keywords: ["veterinario", "urgencias 24h", "clínica veterinaria", "hospital veterinario", "Alicante", "Elche", "Torrevieja", "Almoradí", "Benijófar", "San Fulgencio", "mascotas"],
  authors: [{ name: "Clínicas Veterinarias DRL" }],
  creator: "Eficentia Solutions",
  publisher: "Clínicas Veterinarias DRL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://drl.vet"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://drl.vet",
    title: "Clínicas Veterinarias DRL | Urgencias 24h en Alicante",
    description: "Urgencias 24h - 365 días del año. Más de 25 años cuidando de tu mascota.",
    siteName: "Clínicas Veterinarias DRL",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clínicas Veterinarias DRL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínicas Veterinarias DRL | Urgencias 24h en Alicante",
    description: "Urgencias 24h - 365 días del año. Más de 25 años cuidando de tu mascota.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "4fA6K3n98bhov8Hi2akptZ6KSZSXYMuYj6iG3wOCfvM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} font-sans antialiased`}>
      <head>
        <SchemaOrg />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
