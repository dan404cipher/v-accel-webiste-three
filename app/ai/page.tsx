import { ContactForm } from "@/components/sections/contact-form";
import { AIHero } from "@/components/sections/ai-hero";
import { AiSolutionsContent } from "@/components/sub/ai-solutions-content";
import { WhyChooseUs } from "@/components/sub/why-choose-us";
import { Skills } from "@/components/main/skills";

export default function AIPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <AIHero/>
        <AiSolutionsContent/>
        <WhyChooseUs/>
        <Skills/>
        <ContactForm/>
      </div>
    </main>
  );
} 