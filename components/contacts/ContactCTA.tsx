"use client";

import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <div className="bg-gradient-card rounded-lg p-8 md:p-12">
      <h3 className="font-serif text-3xl font-bold text-primary mb-4">
        Ready to Start Your Coffee Journey?
      </h3>
      <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
        Whether you're a small café or a large distributor, we have the perfect
        coffee solutions for your business. Let's brew something amazing
        together.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-coffee-green hover:bg-coffee-green/90">
          Request Quote
        </Button>
        <Button size="lg" variant="outline">
          Download Catalog
        </Button>
      </div>
    </div>
  );
}
