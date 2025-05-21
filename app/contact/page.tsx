import { ContactHero } from "@/components/sections/contactHero";
import { ContactForm } from "@/components/sections/contact-form";
export default function ContactPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">

      <ContactHero/>
      <ContactForm/>
      </div>
    </main>
  );
}