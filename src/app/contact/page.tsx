import { ContactForm } from "@/components/contact-form";
import { ContactPageHero } from "@/components/contact-page-hero";

export default function ContactPage() {
  return (
    <main className="bg-[#FFFFFF]">
      <ContactPageHero />
      <section className="mx-auto py-10 w-full max-w-6xl px-6 bg-[#FFFFFF]">
        <ContactForm />
      </section>
    </main>
  );
}
