import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Globe, Award } from "lucide-react";
import coffeeBeansImage from "@/assets/coffee-beans.jpg";
import coffeeHandsImage from "@/assets/coffee-hands.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Your Gateway to Kenya&apos;s Finest Coffee
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At BeamsCoffee Trading Company, we are dedicated to delivering
              green coffee beans that meet the highest industry standards. Our
              rigorous quality control processes and close relationships with
              growers ensure that our clients receive beans that are perfect for
              roasting, cupping, and savoring.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Kenya&apos;s green coffee beans are celebrated worldwide for their
              bright acidity, full-bodied flavor, and delightful fruity notes.
              We partner with local farmers who share our dedication to quality,
              ensuring that each bean is a perfect representation of the unique
              Kenyan terroir.
            </p>
            <Button
              size="lg"
              className="bg-coffee-green hover:bg-coffee-green/90 shadow-medium"
            >
              Learn More About Us
            </Button>
          </div>

          <div className="relative w-full h-72 sm:h-96 lg:h-[480px] rounded-lg overflow-hidden">
            <Image
              src={coffeeBeansImage}
              alt="Premium coffee beans"
              fill
              className="object-cover rounded-lg shadow-strong"
              placeholder="blur"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/30 to-transparent rounded-lg" />
          </div>
        </div>

        {/* Business Concept */}
        <div className="text-center mb-16">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Business Concept
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through a business model that is geared towards easy access and
              convenience for our customers, BeamsCoffee Trading Company has
              evolved to become a trusted coffee dealer and exporter of Kenyan
              green Arabica coffee. Our business model has continued to earn
              global recognition in terms of coffee quality assurance, friendly
              sales contracts, and timely delivery of shipments.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              Icon: Shield,
              title: "Quality Assurance",
              text: "Rigorous quality control processes ensure every bean meets international standards.",
            },
            {
              Icon: Users,
              title: "Farmer Partnerships",
              text: "Direct relationships with local farmers who share our commitment to excellence.",
            },
            {
              Icon: Globe,
              title: "Global Expertise",
              text: "Worldwide shipping and logistics network ensuring timely delivery.",
            },
            {
              Icon: Award,
              title: "Traceability",
              text: "Complete transparency from farm to roastery with detailed origin tracking.",
            },
          ].map(({ Icon, title, text }, idx) => (
            <Card
              key={idx}
              className="text-center p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-coffee-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-xl mb-3 text-primary">
                  {title}
                </h4>
                <p className="text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative rounded-lg overflow-hidden">
          <div className="w-full h-64 md:h-80 relative">
            <Image
              src={coffeeHandsImage}
              alt="Hands holding coffee beans"
              fill
              className="object-cover"
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-coffee-dark/70 flex items-center justify-center px-4 text-center">
              <div className="text-white max-w-xl mx-auto">
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Ready to Experience Premium Coffee?
                </h3>
                <p className="text-xl mb-6 text-coffee-cream">
                  Join our global network of satisfied customers
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
