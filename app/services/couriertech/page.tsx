import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Route,
  Smartphone,
  Bell,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
  Package,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const heroSlides = [
  {
    title: "Smart Courier Management Platform",
    subtitle: "COURIERTECH SYSTEMS (KOURIA)",
    description:
      "Streamline your delivery operations with advanced tracking, route optimization, and automated notifications through our comprehensive courier management platform.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Explore Kouria Platform",
    ctaLink: "/contact",
  },
  {
    title: "Revolutionize Your Logistics",
    subtitle: "DIGITAL DELIVERY SOLUTIONS",
    description:
      "Transform your courier business with intelligent route planning, real-time tracking, and seamless communication between dispatchers, couriers, and customers.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Get Started Today",
    ctaLink: "/contact",
  },
];

const features = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description:
      "Track all deliveries in real-time with GPS precision and provide customers with live updates.",
    benefits: [
      "GPS Tracking",
      "Live Location Updates",
      "Delivery Proof",
      "Customer Notifications",
    ],
  },
  {
    icon: Route,
    title: "Smart Route Optimization",
    description:
      "AI-powered route planning that reduces delivery time and fuel costs while maximizing efficiency.",
    benefits: [
      "AI Route Planning",
      "Traffic Optimization",
      "Multi-stop Routing",
      "Fuel Cost Reduction",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App for Couriers",
    description:
      "Intuitive mobile application for couriers with navigation, task management, and communication tools.",
    benefits: [
      "Turn-by-turn Navigation",
      "Task Management",
      "Photo Proof of Delivery",
      "Offline Capability",
    ],
  },
  {
    icon: Bell,
    title: "Automated Notifications",
    description:
      "Keep customers informed with automated SMS and email notifications throughout the delivery process.",
    benefits: [
      "Pickup Notifications",
      "In-transit Updates",
      "Delivery Confirmations",
      "Delay Alerts",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Comprehensive analytics dashboard with performance metrics and business intelligence insights.",
    benefits: [
      "Performance Metrics",
      "Delivery Analytics",
      "Cost Analysis",
      "Custom Reports",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with package protection and compliance with industry standards.",
    benefits: [
      "Package Security",
      "Digital Signatures",
      "Insurance Integration",
      "Audit Trails",
    ],
  },
];

const solutions = [
  {
    title: "Last-Mile Delivery Platform",
    description:
      "Complete last-mile delivery solution with customer communication, proof of delivery, and real-time tracking.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Customer portal",
      "Delivery scheduling",
      "Proof of delivery",
      "Rating system",
    ],
  },
  {
    title: "Fleet Management System",
    description:
      "Comprehensive fleet management with vehicle tracking, maintenance scheduling, and driver management.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Vehicle tracking",
      "Maintenance alerts",
      "Driver performance",
      "Fuel monitoring",
    ],
  },
  {
    title: "E-commerce Integration",
    description:
      "Seamless integration with e-commerce platforms for automated order processing and fulfillment.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "API integration",
      "Order automation",
      "Inventory sync",
      "Multi-platform support",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Faster Deliveries",
    description: "Reduce delivery time by up to 35% with optimized routing",
  },
  {
    icon: Package,
    title: "Improved Accuracy",
    description: "99.5% delivery accuracy with digital proof and tracking",
  },
  {
    icon: Users,
    title: "Better Customer Experience",
    description: "Enhanced customer satisfaction with real-time updates",
  },
  {
    icon: BarChart3,
    title: "Cost Optimization",
    description: "Reduce operational costs by 25% through smart optimization",
  },
];

export default function CouriertechPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white mb-4">
                COURIERTECH SOLUTIONS
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Transforming{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Logistics & Delivery
                </span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kouria, our flagship courier management platform, revolutionizes
                how delivery businesses operate. With advanced tracking,
                intelligent route optimization, and seamless communication
                tools, we help courier companies deliver faster, smarter, and
                more efficiently.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From small local delivery services to large logistics companies,
                our platform scales to meet your needs while providing real-time
                visibility and control over your entire delivery operation.
              </p>
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg transform rotate-3"></div>
              <Image
                width={600}
                height={400}
                src="/placeholder.svg?height=400&width=600"
                alt="Courier management platform"
                className="relative rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white mb-4">
              OUR FEATURES
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Comprehensive Courier{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Management Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a modern, efficient courier and
              delivery operation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white mb-4">
              OUR SOLUTIONS
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Tailored Solutions for{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Every Delivery Need
              </span>
            </h2>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="text-3xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="group hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent transition-all"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Image
                    width={600}
                    height={400}
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Kouria Platform?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Transform your delivery operations with technology that delivers
              measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-orange-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                50K+
              </div>
              <div className="text-gray-600">Deliveries Daily</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                35%
              </div>
              <div className="text-gray-600">Faster Delivery</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                99.5%
              </div>
              <div className="text-gray-600">Delivery Accuracy</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                500+
              </div>
              <div className="text-gray-600">Active Couriers</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How Kouria Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, efficient workflow that transforms your delivery
              operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Order Creation</h3>
              <p className="text-gray-600">
                Create delivery orders through our web portal or integrate with
                your existing systems via API.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Assignment</h3>
              <p className="text-gray-600">
                Our AI automatically assigns orders to the best available
                courier based on location and capacity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Route Optimization</h3>
              <p className="text-gray-600">
                Advanced algorithms create the most efficient routes,
                considering traffic and delivery priorities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Tracking</h3>
              <p className="text-gray-600">
                Track deliveries in real-time with automatic customer
                notifications and proof of delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Revolutionize Your Deliveries?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let{"'"}s discuss how Kouria can help you streamline operations,
            reduce costs, and improve customer satisfaction in your delivery
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
            >
              <Link href="/contact">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/portfolio">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
