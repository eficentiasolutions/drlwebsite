export interface Clinic {
  id: string;
  name: string;
  type: 'hospital' | 'clinica';
  address: string;
  city: string;
  hours: string;
  phone?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date?: string;
}
