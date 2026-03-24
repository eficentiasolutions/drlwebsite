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
    default: "AI VetLab | Gestión de muestras biológicas para mascotas",
    template: "%s | AI VetLab",
  },
  description: "Gestión rápida, eficaz y económica de muestras biológicas veterinarias. Recepción, envío a laboratorios e interpretación de resultados con inteligencia artificial.",
  keywords: ["análisis veterinario", "muestras biológicas", "laboratorio veterinario", "IA veterinaria", "análisis de sangre", "análisis de orina", "Almoradí", "diagnóstico veterinario"],
  authors: [{ name: "AI VetLab" }],
  creator: "Eficentia Solutions",
  publisher: "AI VetLab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aivetlab.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://aivetlab.com",
    title: "AI VetLab | Gestión de muestras biológicas para mascotas",
    description: "Rápido, eficaz y económico. Gestión de muestras biológicas con IA.",
    siteName: "AI VetLab",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI VetLab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI VetLab | Gestión de muestras biológicas para mascotas",
    description: "Rápido, eficaz y económico. Gestión de muestras biológicas con IA.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
      <head>
        <SchemaOrg />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
