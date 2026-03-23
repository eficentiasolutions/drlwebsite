import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { BookingCTA } from '@/components/sections/booking-cta';
import { Clinics } from '@/components/sections/clinics';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BookingCTA />
      <Clinics />
      <Testimonials />
      <Contact />
    </>
  );
}
