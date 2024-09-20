import { AppleCardsCarouselDemo } from "@/components/CarosuelVideos";
import Footer from "@/components/Footer";
import { HeroScrollDemo } from "@/components/Hero2";
import { Testimonials } from "@/components/TestimonialsSticky";
import { Features } from "@/components/ui/Features";
import { SpotlightHero } from "@/components/ui/SpotlightHero";

export default function Home() {
  return (
    
    <main>
      <SpotlightHero/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
