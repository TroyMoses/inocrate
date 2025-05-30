import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Thermometer,
  Droplets,
  BarChart3,
  Smartphone,
  Shield,
  Wifi,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Leaf,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const heroSlides = [
  {
    title: "Smart Agriculture Technology",
    subtitle: "AGRITECH INNOVATION",
    description:
      "Empowering farmers with intelligent agricultural systems that optimize productivity and sustainability through cutting-edge technology.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Explore Agritech Solutions",
    ctaLink: "/contact",
  },
  {
    title: "Precision Farming Solutions",
    subtitle: "MODERN AGRICULTURE",
    description:
      "Data-driven farming solutions that maximize yield while minimizing environmental impact through smart monitoring and automation.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Get Started Today",
    ctaLink: "/contact",
  },
];

const features = [
  {
    icon: Thermometer,
    title: "IoT Sensor Networks",
    description:
      "Advanced sensor systems for monitoring soil conditions, weather patterns, and crop health in real-time.",
    benefits: [
      "Soil Temperature Monitoring",
      "Humidity Sensors",
      "pH Level Tracking",
      "Weather Station Integration",
    ],
  },
  {
    icon: Droplets,
    title: "Smart Irrigation Systems",
    description:
      "Automated irrigation solutions that optimize water usage based on real-time data and weather forecasts.",
    benefits: [
      "Automated Watering",
      "Water Conservation",
      "Schedule Optimization",
      "Remote Control",
    ],
  },
  {
    icon: BarChart3,
    title: "Farm Analytics Platform",
    description:
      "Comprehensive analytics dashboard providing insights into crop performance, yield predictions, and farm efficiency.",
    benefits: [
      "Yield Predictions",
      "Performance Analytics",
      "Cost Analysis",
      "ROI Tracking",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Farm Management",
    description:
      "Mobile applications for farmers to monitor and manage their operations from anywhere, anytime.",
    benefits: [
      "Real-time Monitoring",
      "Task Management",
      "Inventory Tracking",
      "Field Reports",
    ],
  },
  {
    icon: Wifi,
    title: "Drone Integration",
    description:
      "Aerial monitoring and crop surveillance using drone technology for precision agriculture applications.",
    benefits: [
      "Crop Surveillance",
      "Pest Detection",
      "Field Mapping",
      "Spray Applications",
    ],
  },
  {
    icon: Shield,
    title: "Crop Protection Systems",
    description:
      "Early warning systems for pest detection, disease prevention, and crop protection measures.",
    benefits: [
      "Pest Early Warning",
      "Disease Detection",
      "Treatment Recommendations",
      "Preventive Measures",
    ],
  },
];

const solutions = [
  {
    title: "Smart Farm Management Platform",
    description:
      "Comprehensive farm management solution with IoT integration, analytics, and mobile access for modern farming operations.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "IoT sensor integration",
      "Real-time monitoring",
      "Automated alerts",
      "Performance analytics",
    ],
  },
  {
    title: "Agricultural Marketplace",
    description:
      "Digital marketplace connecting farmers with buyers, suppliers, and agricultural service providers.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Direct farmer-buyer connection",
      "Price transparency",
      "Quality assurance",
      "Logistics support",
    ],
  },
  {
    title: "Precision Agriculture Suite",
    description:
      "Advanced precision farming tools with GPS guidance, variable rate application, and field mapping capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "GPS field mapping",
      "Variable rate seeding",
      "Fertilizer optimization",
      "Harvest planning",
    ],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Productivity",
    description:
      "Boost crop yields by up to 30% with data-driven farming decisions",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Reduce water usage by 25% through smart irrigation systems",
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Promote eco-friendly practices with precision agriculture",
  },
  {
    icon: Zap,
    title: "Cost Reduction",
    description: "Lower operational costs through automation and optimization",
  },
];

export default function AgritechPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* Overview Section */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white mb-4">
                AGRITECH SOLUTIONS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Revolutionizing{" "}
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Modern Agriculture
                </span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our agritech solutions combine IoT sensors, data analytics, and
                mobile technology to create smart farming systems that increase
                productivity, reduce costs, and promote sustainable agricultural
                practices.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From precision farming to agricultural marketplaces, we provide
                comprehensive solutions that empower farmers with the tools they
                need to succeed in modern agriculture.
              </p>
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg transform rotate-3"></div>
              <Image
                width={600}
                height={400}
                src="/placeholder.svg?height=400&width=600"
                alt="Smart agriculture technology"
                className="relative rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white mb-4">
              OUR FEATURES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Agritech{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Technology Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to modernize your farming operations and
              maximize productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white mb-4">
              OUR SOLUTIONS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tailored Solutions for{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Modern Farming
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
                    className="group hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white hover:border-transparent transition-all"
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
      <section className="py-10 md:py-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Agritech Solutions?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Transform your farming operations with technology that delivers
              real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-green-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl md:text-5xl font-bold text-green-500 mb-2">
                30%
              </div>
              <div className="text-gray-600">Yield Increase</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                25%
              </div>
              <div className="text-gray-600">Water Savings</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                40%
              </div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                100+
              </div>
              <div className="text-gray-600">Farms Connected</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Modernize Your Farm?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let{"'"}s discuss how our agritech solutions can help you increase
            productivity, reduce costs, and promote sustainable farming
            practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
            >
              <Link href="/contact">Schedule a Demo</Link>
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
