import { ContactForm } from "@/components/sections/contact-form";
import { MicroservicesHero } from "@/components/sections/microservices-hero";
import { MicroservicesContent } from "@/components/sub/microservices-content";
import { WhyChooseUs } from "@/components/sub/why-choose-us";
import { Skills } from "@/components/main/skills";

export default function MicroservicesPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <MicroservicesHero/>
        <MicroservicesContent/>
        <WhyChooseUs/>
        <Skills/>
        <ContactForm/>
      </div>
    </main>
  );
} 