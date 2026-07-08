import { Preloader } from "@/components/preloader";
import { Hero } from "@/components/sections/hero";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Pricing } from "@/components/sections/pricing";
import { Tech3D } from "@/components/sections/tech-3d";
import { Portfolio } from "@/components/sections/portfolio";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Preloader />
      <Hero />
      <ProblemSolution />
      <Pricing />
      <Tech3D />
      <Portfolio />
      <SocialProof />
      <FinalCta />
      <Footer />
    </main>
  );
}
