import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  CreditCard,
  Sprout,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import Link from "next/link";

const heroSlides = [
  {
    title: "Systems for Modern Education",
    subtitle: "EDUCATION TECHNOLOGY",
    description:
      "Transform learning experiences with cutting-edge educational management systems and digital learning platforms.",
    backgroundImage: "/images/bg2.jpg",
    ctaText: "Explore Education Solutions",
    ctaLink: "/services/education",
  },
  {
    title: "Revolutionary Fintech Solutions",
    subtitle: "FINANCIAL TECHNOLOGY",
    description:
      "Secure, scalable, and efficient financial technology solutions that drive digital transformation in the finance sector.",
    backgroundImage: "/images/bg1.jpg",
    ctaText: "Discover Fintech Services",
    ctaLink: "/services/fintech",
  },
  {
    title: "Smart Agriculture Technology",
    subtitle: "AGRITECH INNOVATION",
    description:
      "Empowering farmers with intelligent agricultural systems that optimize productivity and sustainability.",
    backgroundImage: "/images/agritech.jpg",
    ctaText: "Learn About Agritech",
    ctaLink: "/services/agritech",
  },
];

const services = [
  {
    icon: GraduationCap,
    title: "Education Systems",
    description:
      "Comprehensive learning management systems, student information systems, and digital classroom solutions that enhance educational outcomes.",
    features: [
      "LMS Platforms",
      "Student Portals",
      "Assessment Tools",
      "Virtual Classrooms",
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: CreditCard,
    title: "Fintech Solutions",
    description:
      "Secure payment platforms, digital banking solutions, and financial management systems that revolutionize financial services.",
    features: [
      "Payment Gateways",
      "Digital Wallets",
      "Banking APIs",
      "Risk Management",
    ],
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Sprout,
    title: "Agritech Platforms",
    description:
      "Smart farming solutions, crop monitoring systems, and agricultural marketplaces that modernize farming practices.",
    features: [
      "Farm Management",
      "IoT Sensors",
      "Market Platforms",
      "Data Analytics",
    ],
    color: "from-orange-500 to-red-600",
  },
];

const stats = [
  { number: "50+", label: "Projects Completed", icon: Award },
  { number: "25+", label: "Happy Clients", icon: Users },
  { number: "3", label: "Industry Sectors", icon: TrendingUp },
  { number: "99%", label: "Client Satisfaction", icon: Star },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Education Director",
    company: "TechEdu Institute",
    content:
      "Inocrate's education platform transformed our learning environment. Student engagement increased by 40% and administrative efficiency improved dramatically.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "FinanceFlow",
    content:
      "Their fintech solution provided us with a robust, secure platform that scaled with our business. The integration was seamless and support exceptional.",
    rating: 5,
  },
  {
    name: "David Okonkwo",
    role: "Farm Manager",
    company: "GreenHarvest Farms",
    content:
      "The agritech platform revolutionized our farming operations. We've seen 30% increase in yield and significant cost savings through smart monitoring.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* What We Do Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <Badge className="bg-gradient-to-r from-blue-700 to-blue-900 text-white mb-4">
              WHAT WE DO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We Offer Creative{" "}
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                Technological Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative systems designed for education, finance, and
              agriculture sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent transition-all cursor-pointer"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12" />
                </div>
                <div className="text-3xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-blue-700 to-blue-900 text-white mb-4">
                WHY CHOOSE US
              </Badge>
              <h2 className="text-[28px] md:text-4xl font-bold mb-4 md:mb-6">
                Innovative, Secure{" "}
                <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Choosing us means partnering with a trusted leader in technology
                innovation. Our solutions provide unparalleled efficiency and
                security across education, fintech, and agritech sectors. We
                prioritize user experience and deliver scalable systems that
                grow with your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3" />
                  <span>Cutting-edge technology stack</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3" />
                  <span>24/7 technical support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3" />
                  <span>Scalable and secure solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3" />
                  <span>Industry expertise and experience</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-2 border-orange-100">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Projects</div>
              </Card>
              <Card className="text-center p-6 border-2 border-green-100">
                <div className="text-4xl font-bold text-blue-500 mb-2">25+</div>
                <div className="text-gray-600">Clients</div>
              </Card>
              <Card className="text-center p-6 border-2 border-blue-100">
                <div className="text-4xl font-bold text-blue-500 mb-2">3</div>
                <div className="text-gray-600">Industries</div>
              </Card>
              <Card className="text-center p-6 border-2 border-purple-100">
                <div className="text-4xl font-bold text-purple-500 mb-2">
                  99%
                </div>
                <div className="text-gray-600">Satisfaction</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pt-10 pb-10 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-700 to-blue-900 text-white mb-4">
              WHAT CLIENTS SAY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Clients Say About Our{" "}
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    {"'"}
                    {testimonial.content}
                    {"'"}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Let{"'"}s discuss how our innovative solutions can drive your
            digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-500 hover:bg-white hover:text-blue-600"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
