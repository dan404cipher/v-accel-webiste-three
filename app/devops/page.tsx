import { ContactForm } from "@/components/sections/contact-form";
import { DevOpsHero } from "@/components/sections/devops-hero";
import { DevOpsContent } from "@/components/sub/devops-content";
import { DevOpsSolutionsContent } from "@/components/sub/devops-solutions-content";
import { WhyChooseUs } from "@/components/sub/why-choose-us";
import { Skills } from "@/components/main/skills";

export default function DevOpsPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <DevOpsHero/>
        <DevOpsContent/>
        <DevOpsSolutionsContent/>
        <WhyChooseUs/>
        <Skills/>
        <ContactForm/>
      </div>
    </main>
  );
} 