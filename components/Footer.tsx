"use client";

import { Coffee, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-coffee-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8 text-coffee-green" />
              <h3 className="font-serif text-2xl font-bold">BeamsCoffee</h3>
            </div>
            <p className="text-coffee-light mb-6 leading-relaxed max-w-md">
              Your trusted partner for premium Kenyan coffee beans. We connect
              coffee lovers worldwide with the finest coffee from Kenya&apos;s
              highland regions.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-coffee-green" />
                <span>info@beamscoffee.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-coffee-green" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-coffee-green" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                // { label: "Products", href: "#products" },
                { label: "Contact", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-coffee-light hover:text-coffee-green transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Coffee Export",
                "Quality Control",
                "Global Logistics",
                "Certification",
                "Custom Solutions",
              ].map((service) => (
                <li key={service} className="text-coffee-light">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-medium mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-coffee-light mb-4 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} BeamsCoffee Trading Company. All
            rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link
              href="#"
              className="text-coffee-light hover:text-coffee-green transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-coffee-light hover:text-coffee-green transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-coffee-light hover:text-coffee-green transition-colors"
            >
              Certificates
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
