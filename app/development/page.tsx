import { ContactForm } from "@/components/sections/contact-form";
import { DevelopmentHero } from "@/components/sections/development-hero";
import { SolutionsContent } from "@/components/sub/solutions-content";
import { WhyChooseUs } from "@/components/sub/why-choose-us";
import { Skills } from "@/components/main/skills";

export default function DevelopmentPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <DevelopmentHero/>
        <SolutionsContent/>
        <WhyChooseUs/>
        <Skills/>
        <ContactForm/>
      </div>
    </main>
  );
}