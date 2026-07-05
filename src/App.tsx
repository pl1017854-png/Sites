import { AnnouncementBar } from "@/components/sections/announcement";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { MoonInteractive } from "@/components/sections/moon-interactive";
import { Benefits } from "@/components/sections/benefits";
import { Features } from "@/components/sections/features";
import { Specs } from "@/components/sections/specs";
import { GiftBox } from "@/components/sections/gift";
import { Aroma } from "@/components/sections/aroma";
import { Testimonials } from "@/components/sections/testimonials";
import { Offer } from "@/components/sections/offer";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { StickyCTA } from "@/components/sections/sticky-cta";

export default function App() {
  return (
    <div className="relative min-h-screen bg-night-950">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <MoonInteractive />
        <Benefits />
        <Features />
        <Specs />
        <GiftBox />
        <Aroma />
        <Testimonials />
        <Offer />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
