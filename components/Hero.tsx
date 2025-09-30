import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee } from "lucide-react";
import heroImage from "@/assets/coffee-hero.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      {/* Optimized background */}
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        className="object-cover object-center z-0"
        priority
        placeholder="blur"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/80 to-coffee-medium/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-coffee-green/30 rounded-full px-4 py-2 mb-6">
            <Coffee className="h-5 w-5 text-coffee-green-light" />
            <span className="text-coffee-green-light font-medium">
              Premium Coffee Export
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            BeamsCoffee
            <span className="block text-coffee-green-light">
              Trading Company
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-coffee-cream mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for premium Kenyan coffee beans. Experience
            excellence in every bean with complete traceability and global
            expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-medium shadow-medium"
              >
                Explore Our Coffee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-gray-600 hover:bg-white dark:text-gray-900 dark:bg-gray-200 hover:text-gray-900 px-8 py-3 text-lg font-medium"
              >
                Learn Our Story
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                7+
              </div>
              <div className="text-coffee-cream">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-coffee-cream">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                100%
              </div>
              <div className="text-coffee-cream">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
