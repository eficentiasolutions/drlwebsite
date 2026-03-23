import { Metadata } from 'next';
import { Heart, Stethoscope, Users, Target } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Quiénes somos | Clínicas Veterinarias DRL',
  description: 'Conoce al equipo de Clínicas Veterinarias DRL. Más de 25 años trabajando por la salud de los animales con un equipo de profesionales altamente capacitados.',
  openGraph: {
    title: 'Quiénes somos | Clínicas Veterinarias DRL',
    description: 'Conoce al equipo de Clínicas Veterinarias DRL. Más de 25 años trabajando por la salud de los animales.',
    url: 'https://drl.vet/quienes-somos',
  },
};

// Team data from original website
const team = {
  juntaDirectiva: [
    {
      name: 'Sandra Vega',
      role: 'Coordinadora de Dirección, Económica y Financiera',
      image: 'https://drl.vet/wp-content/uploads/2023/11/Sandra-Vega.webp',
    },
  ],
  veterinarios: [
    {
      name: 'Dra. Yolanda Bonete',
      role: 'Veterinaria Generalista',
      image: 'https://drl.vet/wp-content/uploads/2023/11/Dra.-Yolanda-Bonete-Veterinaria-Generalista.webp',
    },
    {
      name: 'Dra. Maria Gomis',
      role: 'Veterinaria Generalista',
      image: 'https://drl.vet/wp-content/uploads/2023/11/Dra.-Maria-Gomis-Veterinaria-Generalista.webp',
    },
    {
      name: 'Dra. Daniela Belén Perez',
      role: 'Cirujana Tejidos Blandos',
      image: 'https://drl.vet/wp-content/uploads/2023/11/Dra.-Daniela-Belen-Perez-Cirujana-Tejidos-Blandos.webp',
    },
    {
      name: 'Dr. José Manuel Nicolás',
      role: 'Veterinario Generalista',
      image: 'https://drl.vet/wp-content/uploads/2023/11/Dr.-Jose-Manuel-Nicolas-Veterinario-Generalista.webp',
    },
    {
      name: 'Dr. Javier Valiente',
      role: 'Veterinario Generalista',
      image: 'https://drl.vet/wp-content/uploads/2023/11/Dr.-Javier-Valiente-Veterinario-Generalista.webp',
    },
    {
      name: 'Dr. Francisco Quesada',
      role: 'Cirujano',
      image: 'https://drl.vet/wp-content/uploads/2023/11/Dr.-Francisco-Quesada-Cirujano.webp',
    },
    {
      name: 'Dr. Esteban Puccio',
      role: 'Neurólogo',
      image: 'https://drl.vet/wp-content/uploads/2023/11/Dr.-Esteban-Puccio-Neurologo.webp',
    },
    {
      name: 'Dr. José Maria Robles',
      role: 'Oftalmólogo',
      image: 'https://drl.vet/wp-content/uploads/2025/03/Dr.-Jose-Maria-Robles-Oftalmologo.webp',
    },
    {
      name: 'Dra. Laura Coral',
      role: 'Veterinaria Generalista',
      image: 'https://drl.vet/wp-content/uploads/2025/03/Dra.-Laura-Coral-Veterinaria-Generalista.webp',
    },
    {
      name: 'Dra. Mari Carmen Rodriguez',
      role: 'Especialista animales exóticos y rehabilitación',
      image: 'https://drl.vet/wp-content/uploads/2025/10/Dra.Mari_.Carmen.webp',
    },
  ],
  atv: [
    {
      name: 'Yulia Rodriguez',
      role: 'Auxiliar Técnico Veterinario',
      image: 'https://drl.vet/wp-content/uploads/2023/07/Yulia-Rodriguez.webp',
    },
    {
      name: 'Stefania Ichaso',
      role: 'Auxiliar Técnico Veterinario',
      image: 'https://drl.vet/wp-content/uploads/2025/03/Stefania-Ichaso.webp',
    },
    {
      name: 'Natalia Vera',
      role: 'Auxiliar Técnico Veterinario',
      image: 'https://drl.vet/wp-content/uploads/2025/03/Natalia-Vera.webp',
    },
    {
      name: 'Carolina Vegara',
      role: 'Auxiliar Técnico Veterinario',
      image: 'https://drl.vet/wp-content/uploads/2025/03/Carolina-Vegara.webp',
    },
    {
      name: 'Carmen Birlanga',
      role: 'Auxiliar Técnico Veterinario',
      image: 'https://drl.vet/wp-content/uploads/2025/03/Carmen-Birlanga.webp',
    },
    {
      name: 'Beatriz Rocamora',
      role: 'Auxiliar Técnico Veterinario',
      image: 'https://drl.vet/wp-content/uploads/2025/03/Beatriz-Rocamora.webp',
    },
    {
      name: 'Angela Brotons',
      role: 'Auxiliar Técnico Veterinario',
      image: 'https://drl.vet/wp-content/uploads/2025/03/Angela-Brotons.webp',
    },
    {
      name: 'Óscar Fernández',
      role: 'Auxiliar Técnico Veterinario',
      image: 'https://drl.vet/wp-content/uploads/2025/04/Oscar-Fernandez.webp',
    },
    {
      name: 'Azahara Pagola',
      role: 'Auxiliar Técnico Veterinario',
      image: 'https://drl.vet/wp-content/uploads/2025/06/Azahara-Pagola.webp',
    },
  ],
  recepcionistas: [
    {
      name: 'Anikó Farkas',
      role: 'Recepcionista',
      image: 'https://drl.vet/wp-content/uploads/2023/11/Aniko-Farkas.webp',
    },
    {
      name: 'Alba Corchado',
      role: 'Recepcionista',
      image: 'https://drl.vet/wp-content/uploads/2023/11/Alba-Corchado.webp',
    },
    {
      name: 'Peter Hopkins',
      role: 'Recepcionista',
      image: 'https://drl.vet/wp-content/uploads/2023/11/Peter-Hopkins.webp',
    },
    {
      name: 'Laura Profiti',
      role: 'Recepcionista',
      image: 'https://drl.vet/wp-content/uploads/2023/11/Laura-Profiti.webp',
    },
  ],
};

const values = [
  { icon: Heart, label: 'Empatía' },
  { icon: Heart, label: 'Amor' },
  { icon: Stethoscope, label: 'Vocación' },
  { icon: Users, label: 'Paciencia' },
  { icon: Target, label: 'Conocimiento' },
  { icon: Heart, label: 'Dedicación' },
];

function TeamCard({ member }: { member: { name: string; role: string; image: string } }) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/50">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{member.name}</h3>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </div>
    </div>
  );
}

export default function QuienesSomosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-primary font-semibold text-base sm:text-lg mb-3">
                Equipo especializado
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Quiénes somos
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Centros modernos, innovadores y comprometidos con el bienestar de tu mascota.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Más de 25 años trabajando por la salud de los animales
              </p>
            </div>

            {/* Hero Image */}
            <div className="flex-1 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://drl.vet/wp-content/uploads/2023/11/dostor.jpg"
                  alt="Equipo veterinario DRL"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-2xl sm:rounded-3xl" />
              <div className="absolute -z-10 -top-4 -left-4 w-full h-full bg-secondary/10 rounded-2xl sm:rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
              ¿Quiénes somos?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Los hospitales veterinarios DRL son unos centros modernos, innovadores y comprometidos con el bienestar de las mascotas.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Nuestras instalaciones de última generación y nuestro equipo de profesionales altamente capacitados están dedicados a brindar la mejor atención médica.
            </p>

            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                "Más de 25 años trabajando por la salud de los animales"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
              Nuestra historia
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6">
              Un gran proyecto
            </h3>

            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border mb-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este proyecto nace de la vocación y de la ilusión del <strong>Doctor László Szakács</strong>: Padre, veterinario y amante de animales.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Apasionado por la medicina veterinaria, lleva dedicándose sin descanso, desde hace más de 25 años a la misma.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Aunando su gran entusiasmo y amor por la medicina veterinaria, ha decidido crear este hospital con el objetivo de seguir creciendo tanto a nivel profesional como personal.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hospital en el que ha puesto todo su corazón y el más estricto cuidado a los detalles para poder dar a los pacientes y a los clientes el mejor de los cuidados.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este hospital reúne a expertos de las diferentes ramas de la medicina veterinaria, que junto a los equipos de última generación con los que cuentan, trabajan en conjunto para poder diagnosticar y ayudar a todos nuestros pacientes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para ello ofrecemos un servicio de calidad de <strong>urgencias 24 horas</strong> conformado por personal con experiencia, altamente cualificado y formado.
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl p-6 sm:p-8 border-l-4 border-primary">
              <p className="text-foreground font-medium leading-relaxed">
                La misión del Doctor László con este nuevo hospital, es poder llegar a más pacientes y hacer equipo con profesionales de clínicas cercanas, para poder ayudar a los animales y llevar la medicina veterinaria al mayor nivel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Nuestra visión
            </h2>
            <p className="text-xl text-primary font-semibold mb-10">
              Para nosotros ser veterinario es sinónimo de:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-all border border-border/50"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-foreground">{value.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="bg-muted/30 rounded-2xl p-6 sm:p-8 text-left">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ser veterinario es uno de los trabajos más bonitos pero también más exigentes que existen. Es tratar a seres sensibles e inocentes que no pueden hablar ni expresarse. Para a través de sus tutores y pruebas diagnósticas, poder comprender el mal que les aqueja.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Es aunar el amor que se les tiene con el amor a la ciencia para así poder ayudarlos en todos los sentidos.
              </p>
              <p className="text-foreground font-medium">
                Nuestro equipo de profesionales multicultural, está compuesto por personas vocacionales, sensibles, profesionales y comprometidas.
              </p>
              <p className="text-primary font-semibold mt-2">
                Por lo que podemos asegurarte que tanto tú como tu mascota, podréis sentiros acogidos y bien tratados, en un ambiente cálido y seguro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Contamos con grandes profesionales
            </h2>
            <p className="text-lg text-muted-foreground">
              Conoce al equipo que hace posible nuestra misión
            </p>
          </div>

          {/* Junta Directiva */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
              Junta Directiva
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.juntaDirectiva.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Veterinarios */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
              Veterinarios
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {team.veterinarios.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* ATV */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
              Auxiliares Técnicos Veterinarios (ATV)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {team.atv.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Recepcionistas */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
              Recepcionistas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.recepcionistas.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Siempre contigo cuando lo necesites
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nuestro equipo está disponible 24 horas para atender a tu mascota
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:900000000"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-red-600 px-6 py-3 text-base font-bold text-red-600 transition-all hover:bg-red-600 hover:text-white"
              >
                Urgencias 24h
              </a>
              <a
                href="https://provetcloud.com/6912/onlinebooking/?lang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Agendar Cita
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
