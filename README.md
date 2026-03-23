# Clínicas Veterinarias DRL - Web MVP

Web moderna para Clínicas Veterinarias DRL, desarrollada con Next.js 14+, TypeScript, Tailwind CSS y shadcn/ui.

## 🚀 Características

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **SEO Completo**: Meta tags, Open Graph, Schema.org, robots.txt y sitemap
- **Animaciones**: Efectos suaves con Framer Motion
- **Componentes Modernos**: shadcn/ui para UI consistente
- **Tipo Seguro**: TypeScript en todo el proyecto

## 🛠️ Stack Tecnológico

| Componente | Tecnología |
|------------|------------|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Componentes UI | shadcn/ui |
| Animaciones | Framer Motion |
| Formularios | React Hook Form + Zod |
| Iconos | Lucide React |

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con SEO
│   ├── page.tsx           # Página de inicio
│   ├── globals.css        # Estilos globales
│   ├── robots.ts          # Configuración robots.txt
│   └── sitemap.ts         # Sitemap dinámico
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   ├── layout/            # Header y Footer
│   ├── sections/          # Secciones de la página
│   ├── animations/        # Animaciones Framer Motion
│   └── schema-org.tsx     # Schema.org JSON-LD
├── data/
│   └── clinics.ts         # Datos de clínicas y servicios
├── types/
│   └── index.ts           # Tipos TypeScript
└── lib/
    └── utils.ts           # Utilidades
```

## 🏥 Secciones Implementadas

1. **Header**: Navegación sticky con menú móvil
2. **Hero**: Presentación principal con CTAs
3. **Servicios**: Cards con iconos (Urgencias 24h, Hospitalización, etc.)
4. **Clínicas**: Listado de 5 clínicas con direcciones y horarios
5. **Testimonios**: Carousel de reseñas de clientes
6. **Contacto**: Formulario e información de contacto
7. **Footer**: Enlaces y redes sociales

## 🗺️ Clínicas Incluidas

1. **Hospital Veterinario DRL Elche** - Abierto 24h
2. **Hospital Veterinario DRL Torrevieja** - 8:00h a 00:00h
3. **Hospital Veterinario DRL Almoradí** - Abierto 24h
4. **Clínica Veterinaria DRL Benijófar** - Lun-Sáb 9:00-14:00h
5. **Clínica Veterinaria DRL San Fulgencio** - Lun-Vie 9:00-18:00h, Sáb 9:00-14:00h

## 🚀 Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Ejecutar producción
npm start

# Linting
npm run lint
```

## 🎨 Colores del Tema

- **Primary**: Sky Blue (#0ea5e9)
- **Secondary**: Indigo (#6366f1)
- **Accent**: Amber (#fbbf24)
- **Urgencias**: Red (#dc2626)

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (< 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🔍 SEO Features

- Meta tags optimizados
- Open Graph para redes sociales
- Schema.org para Veterinarias
- Sitemap XML dinámico
- Robots.txt configurado
- Verificación de Google Search Console

## 📄 Licencia

Desarrollado por Eficentia Solutions para Clínicas Veterinarias DRL.

---

**Estado**: MVP funcional listo para presentar al cliente 🎉
