import { ContactForm } from "@/components/sections/contact-form";
import { SaasHero } from "@/components/sections/saas-hero";
import { SaasContent } from "@/components/sub/saas-content";
import { WhyChooseUs } from "@/components/sub/why-choose-us";
import { Skills } from "@/components/main/skills";
import { SaasSolutionsContent } from "@/components/sub/saas-solutions-content";

export default function SaasPage() {
  return (
    <main className="flex flex-col gap-20">
      <SaasHero />
      <SaasContent />
      <SaasSolutionsContent />
      <WhyChooseUs />
      <Skills />
      <ContactForm />
    </main>
  );
} 