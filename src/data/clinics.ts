import { Clinic } from '@/types';

export const clinics: Clinic[] = [
  {
    id: 'elche',
    name: 'Hospital Veterinario DRL Elche',
    type: 'hospital',
    address: 'Carrer Tonico Sansano Mora, 8, 03293 Elx, Alicante',
    city: 'Elche',
    hours: 'Abierto 24h toda la semana',
  },
  {
    id: 'torrevieja',
    name: 'Hospital Veterinario DRL Torrevieja',
    type: 'hospital',
    address: 'Av. Diego Ramírez Pastor, 140, 03181 Torrevieja, Alicante',
    city: 'Torrevieja',
    hours: 'De 8:00h a 00:00h toda la semana',
  },
  {
    id: 'almoradi',
    name: 'Hospital Veterinario DRL Almoradí',
    type: 'hospital',
    address: 'Calle San Emigdio 29, 03160 Almoradí',
    city: 'Almoradí',
    hours: 'Abierto 24h toda la semana',
  },
  {
    id: 'benijofar',
    name: 'Clínica Veterinaria DRL Benijófar',
    type: 'clinica',
    address: 'Av. Federíco García Lorca, 21, bajo, 03178 Benijófar, Alicante',
    city: 'Benijófar',
    hours: 'Lunes – sábado de 9:00h a 14:00h | Domingo – Cerrado',
  },
  {
    id: 'san-fulgencio',
    name: 'Clínica Veterinaria DRL San Fulgencio',
    type: 'clinica',
    address: 'Av. de Londres, 1A, Local 7, 03177 San Fulgencio, Alicante',
    city: 'San Fulgencio',
    hours: 'Lunes – viernes de 9:00h a 18:00h | Sábado de 9:00h a 14:00h | Domingo – Cerrado',
  },
];

export const services = [
  {
    id: 'urgencias',
    title: 'Urgencias 24h',
    description: 'Puedes confiar en nosotros. Todas las urgencias las pasan personal con amplia experiencia y disponibles de forma inmediata.',
    icon: 'AlertCircle',
  },
  {
    id: 'hospitalizacion',
    title: 'Hospitalización',
    description: 'Disponemos de amplia zona de hospitalización, en la cual nuestro personal está vigilando a los pacientes constantemente.',
    icon: 'BedDouble',
  },
  {
    id: 'consulta',
    title: 'Consulta General',
    description: 'Atención veterinaria completa para tu mascota con profesionales especializados y equipamiento de última generación.',
    icon: 'Stethoscope',
  },
  {
    id: 'diagnostico',
    title: 'Diagnóstico Avanzado',
    description: 'Tecnología puntera para diagnósticos precisos: ecografías, radiografías, análisis clínicos y más.',
    icon: 'Microscope',
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Ana María Campello Segarra',
    rating: 5,
    text: 'Operamos de urgencias a nuestra cachorra Trufa porque se tragó un imperdible y estamos muy contentos con el resultado, la cuidaron y mimaron muchísimo los días que estuvo ingresada. A nosotros nos lo explicaron perfectamente todo el proceso.',
  },
  {
    id: '2',
    name: 'Inés Checa Mallebrera',
    rating: 5,
    text: 'Ante una urgencia nos han atendido por teléfono rápidamente. Al llegar el trato estupendo y el peque rápidamente con su tratamiento. Estamos muy agradecidos.',
  },
  {
    id: '3',
    name: 'Alba Serrano González',
    rating: 5,
    text: 'El miércoles tuvimos que llevar a nuestra perrita de 13 años, de urgencia por una piometra. La han operado y ha estado ingresada 3 días, no podemos estar más contentos y agradecidos por su gran trabajo y amor que han dedicado a nuestra mascota.',
  },
  {
    id: '4',
    name: 'Nataniel Rubio Martín',
    rating: 5,
    text: '100% recomendable, el mejor trato que hemos recibido de cualquier veterinario, sin lugar a dudas este es nuestro nuevo veterinario.',
  },
  {
    id: '5',
    name: 'Cliente Verificado',
    rating: 5,
    text: 'Tecnología punta. Personal excepcional, atento y muy profesional. Un lugar donde atienden a tu mascota con el cariño que le procesas.',
  },
];
