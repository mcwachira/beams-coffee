import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Users,
  Globe,
  Award,
  Coffee,
  Leaf,
  Star,
  Heart,
} from "lucide-react";
import coffeeBeansImage from "@/assets/coffee-beans.jpg";
import coffeeHandsImage from "@/assets/coffee-hands.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
              About BeamsCoffee
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connecting Kenya's finest coffee farmers with the world through
              quality, sustainability, and passion for excellence.
            </p>
          </section>

          {/* Our Story */}
          <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to showcase Kenya's exceptional coffee
                heritage, BeamsCoffee Trading Company has grown from a small
                local operation to a globally recognized exporter of premium
                green coffee beans.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our journey began with a simple belief: that every coffee bean
                tells a story of the soil, the climate, and the hands that
                nurtured it. We work directly with coffee farmers across Kenya's
                highlands, ensuring fair trade practices and sustainable farming
                methods.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, our beans reach coffee roasters and enthusiasts in over
                50 countries, carrying with them the unique characteristics that
                make Kenyan coffee one of the world's most sought-after origins.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-coffee-green hover:bg-coffee-green/90 shadow-medium"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-strong">
              <Image
                src={coffeeBeansImage}
                alt="Premium coffee beans"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/30 to-transparent rounded-lg" />
            </div>
          </section>

          {/* Mission and Vision */}
          <section className="grid md:grid-cols-2 gap-12 mb-20">
            {[
              {
                icon: <Heart className="h-6 w-6 text-white" />,
                title: "Our Mission",
                text: "To bridge the gap between Kenya's dedicated coffee farmers and global coffee lovers...",
              },
              {
                icon: <Star className="h-6 w-6 text-white" />,
                title: "Our Vision",
                text: "To be the world's most trusted source for premium Kenyan coffee...",
              },
            ].map(({ icon, title, text }, i) => (
              <Card key={i} className="p-8 shadow-soft">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-coffee-green rounded-full flex items-center justify-center">
                      {icon}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary">
                      {title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Core Values */}
          <section className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Core Values
            </h3>
          </section>
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                desc: "Rigorous quality control processes ensure every bean meets international standards.",
              },
              {
                icon: Users,
                title: "Farmer Partnerships",
                desc: "Direct relationships with local farmers who share our commitment to excellence.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                desc: "Environmentally conscious practices that protect Kenya's coffee regions.",
              },
              {
                icon: Award,
                title: "Traceability",
                desc: "Complete transparency from farm to roastery with detailed origin tracking.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Card
                key={i}
                className="text-center p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-coffee-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-xl mb-3 text-primary">
                    {title}
                  </h4>
                  <p className="text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Process */}
          <section className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Process
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl mx-auto">
              From farm to export, every step of our process is designed to
              preserve the unique characteristics of Kenyan coffee while
              ensuring the highest quality standards.
            </p>
          </section>
          <section className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Coffee,
                title: "Sourcing",
                desc: "Direct partnerships with certified farmers across Kenya's premier coffee-growing regions.",
              },
              {
                icon: Shield,
                title: "Processing",
                desc: "State-of-the-art facilities with strict quality control at every processing stage.",
              },
              {
                icon: Globe,
                title: "Export",
                desc: "Global logistics network ensuring fresh, traceable coffee reaches customers worldwide.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-coffee-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-semibold text-xl mb-3 text-primary">
                  {title}
                </h4>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </section>

          {/* Call to Action */}
          <section className="relative rounded-lg overflow-hidden h-64 md:h-80">
            <Image
              src={coffeeHandsImage}
              alt="Hands holding coffee beans"
              layout="fill"
              objectFit="cover"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-coffee-dark/70 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Ready to Experience Premium Coffee?
                </h3>
                <p className="text-xl mb-6 text-coffee-cream">
                  Join our global network of satisfied customers
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/products">
                    <Button
                      size="lg"
                      className="bg-coffee-green hover:bg-coffee-green/90"
                    >
                      Explore Our Coffee
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-coffee-dark"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
