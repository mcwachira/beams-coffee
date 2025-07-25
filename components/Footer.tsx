import { Coffee, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-coffee-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8 text-coffee-green" />
              <h3 className="font-serif text-2xl font-bold">BeamsCoffee</h3>
            </div>
            <p className="text-coffee-light mb-6 leading-relaxed">
              Your trusted partner for premium Kenyan coffee beans. We connect
              coffee lovers worldwide with the finest coffee from Kenya's
              highland regions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-coffee-green" />
                <span>info@beamscoffee.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-coffee-green" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-coffee-green" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-coffee-light hover:text-coffee-green transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-coffee-light hover:text-coffee-green transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-coffee-light hover:text-coffee-green transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-coffee-light hover:text-coffee-green transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-coffee-light hover:text-coffee-green transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-coffee-light">Coffee Export</li>
              <li className="text-coffee-light">Quality Control</li>
              <li className="text-coffee-light">Global Logistics</li>
              <li className="text-coffee-light">Certification</li>
              <li className="text-coffee-light">Custom Solutions</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-medium mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coffee-light text-sm mb-4 md:mb-0">
            © 2024 BeamsCoffee Trading Company. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-coffee-light hover:text-coffee-green transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-coffee-light hover:text-coffee-green transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-coffee-light hover:text-coffee-green transition-colors"
            >
              Certificates
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
