import { PROJECTS } from "@/constants";
import { WorkHero } from "@/components/sections/workHero";
import { WorkSection } from "@/components/sections/work-section";
import { ContactForm } from "@/components/sections/contact-form";

export default function ServicesPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">

      <WorkHero />
      <WorkSection/>
      <ContactForm/>
      </div>
    </main>
  );
}