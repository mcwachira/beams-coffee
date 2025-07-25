import ContactCTA from "@/components/contacts/ContactCTA";
import ContactForm from "@/components/contacts/ContactForm";
import ContactInfo from "@/components/contacts/ContactInfo";
import MapCard from "@/components/contacts/MapCard";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to explore our premium coffee offerings? We'd love to hear
              from you. Reach out for inquiries, partnerships, or just to share
              your coffee passion.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ContactInfo />
              <MapCard />
            </div>
            <ContactForm />
          </div>

          <div className="mt-16 text-center">
            <ContactCTA />
          </div>
        </div>
      </div>
    </div>
  );
}
