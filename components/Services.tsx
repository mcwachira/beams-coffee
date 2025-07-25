import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, FileCheck, Beaker, MapPin, Clock, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Beaker className="h-8 w-8" />,
      title: "Quality Control",
      description:
        "Comprehensive testing and grading of all coffee beans to ensure they meet international standards and customer specifications.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Global Logistics",
      description:
        "Efficient shipping and delivery network ensuring your coffee arrives fresh and on time, anywhere in the world.",
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Certification & Documentation",
      description:
        "Complete paperwork handling including certificates of origin, quality certificates, and export documentation.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Origin Traceability",
      description:
        "Full transparency with detailed information about the farm, processing method, and journey of your coffee beans.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timely Delivery",
      description:
        "Reliable delivery schedules with real-time tracking and communication throughout the shipping process.",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Custom Solutions",
      description:
        "Tailored services to meet your specific requirements, from small specialty orders to large commercial shipments.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From quality control to global delivery, we provide comprehensive
            services to ensure your coffee experience exceeds expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 border-border/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{service.icon}</div>
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-gradient-card rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose BeamsCoffee?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us
              apart in the coffee export industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-coffee-green mb-2">
                30+
              </div>
              <div className="text-lg font-medium text-primary mb-2">
                Years of Experience
              </div>
              <p className="text-muted-foreground">
                Three decades of expertise in coffee trading and export.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-coffee-green mb-2">
                100%
              </div>
              <div className="text-lg font-medium text-primary mb-2">
                Quality Guarantee
              </div>
              <p className="text-muted-foreground">
                Every shipment meets our rigorous quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-coffee-green mb-2">
                24/7
              </div>
              <div className="text-lg font-medium text-primary mb-2">
                Customer Support
              </div>
              <p className="text-muted-foreground">
                Round-the-clock assistance for all your coffee needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
