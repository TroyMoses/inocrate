import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Send,
  BarChart3,
  Clock,
  Shield,
  Smartphone,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const heroSlides = [
  {
    title: "High-Performance Bulk SMS Platform",
    subtitle: "COMMTECH SYSTEMS",
    description:
      "Empower your business with our advanced bulk SMS vending platform that delivers fast, reliable, and trackable messaging at scale.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Explore SMS Solutions",
    ctaLink: "/contact",
  },
  {
    title: "Reach Millions Instantly",
    subtitle: "BULK MESSAGING",
    description:
      "Send targeted SMS campaigns to thousands of recipients simultaneously with real-time delivery tracking and comprehensive analytics.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Get Started Today",
    ctaLink: "/contact",
  },
];

const features = [
  {
    icon: Send,
    title: "Bulk SMS Messaging",
    description:
      "Send thousands of SMS messages instantly with our high-performance delivery infrastructure.",
    benefits: [
      "Mass Message Broadcasting",
      "Contact List Management",
      "Message Templates",
      "Unicode Support",
    ],
  },
  {
    icon: BarChart3,
    title: "Real-Time Delivery Reports",
    description:
      "Track message delivery status in real-time with comprehensive analytics and reporting.",
    benefits: [
      "Delivery Confirmations",
      "Failed Message Tracking",
      "Performance Analytics",
      "Export Reports",
    ],
  },
  {
    icon: Clock,
    title: "Message Scheduling",
    description:
      "Schedule SMS campaigns for optimal delivery times and automate your communication workflow.",
    benefits: [
      "Campaign Scheduling",
      "Time Zone Management",
      "Recurring Messages",
      "Automated Triggers",
    ],
  },
  {
    icon: Globe,
    title: "Easy API Integration",
    description:
      "Seamlessly integrate SMS functionality into your applications with our developer-friendly APIs.",
    benefits: [
      "RESTful APIs",
      "SDK Libraries",
      "Webhook Support",
      "Documentation & Support",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with GDPR compliance and data protection measures.",
    benefits: [
      "Data Encryption",
      "GDPR Compliance",
      "Secure Authentication",
      "Privacy Protection",
    ],
  },
  {
    icon: Smartphone,
    title: "Multi-Channel Support",
    description:
      "Reach customers across multiple channels including SMS, voice calls, and push notifications.",
    benefits: [
      "SMS Gateway",
      "Voice Broadcasting",
      "Push Notifications",
      "Email Integration",
    ],
  },
];

const solutions = [
  {
    title: "Marketing Campaign Platform",
    description:
      "Comprehensive SMS marketing solution with audience segmentation, campaign automation, and performance tracking.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Audience segmentation",
      "A/B testing",
      "Campaign automation",
      "ROI tracking",
    ],
  },
  {
    title: "Transactional SMS Service",
    description:
      "Reliable delivery of critical business messages including OTPs, alerts, and notifications.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "OTP delivery",
      "Payment alerts",
      "Booking confirmations",
      "System notifications",
    ],
  },
  {
    title: "Customer Engagement Suite",
    description:
      "Build stronger customer relationships with personalized messaging and automated workflows.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Personalized messaging",
      "Customer journey mapping",
      "Automated responses",
      "Feedback collection",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Messages delivered in seconds with 99.9% uptime guarantee",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Send messages to over 200 countries worldwide with local rates",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Comprehensive reporting and insights to optimize your campaigns",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption and compliance",
  },
];

export default function CommtechPage() {
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
              <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white mb-4">
                COMMTECH SOLUTIONS
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Revolutionizing{" "}
                <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                  Business Communication
                </span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Commtech SMS platform is designed to transform how
                businesses communicate with their customers. With
                high-performance infrastructure and advanced features, we enable
                organizations to send millions of messages reliably and
                efficiently.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From marketing campaigns to critical transactional messages, our
                platform provides the tools and analytics you need to engage
                your audience effectively and measure your success.
              </p>
              <Button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg transform rotate-3"></div>
              <Image
                width={600}
                height={400}
                src="/placeholder.svg?height=400&width=600"
                alt="SMS communication platform"
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
            <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white mb-4">
              OUR FEATURES
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Comprehensive SMS{" "}
              <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                Platform Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build powerful SMS communication campaigns
              and engage your audience effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
            <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white mb-4">
              OUR SOLUTIONS
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Tailored Solutions for{" "}
              <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                Every Communication Need
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
                    className="group hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600 hover:text-white hover:border-transparent transition-all"
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
      <section className="py-20 bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our SMS Platform?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Transform your business communication with technology that
              delivers real results
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                10M+
              </div>
              <div className="text-gray-600">Messages Sent Daily</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                99.9%
              </div>
              <div className="text-gray-600">Delivery Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                200+
              </div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Active Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our SMS platform serves businesses across various industries with
              tailored solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">E-commerce</h3>
                <p className="text-gray-600 mb-4">
                  Order confirmations, shipping updates, promotional campaigns,
                  and customer support.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Order notifications</li>
                  <li>• Abandoned cart recovery</li>
                  <li>• Flash sale alerts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Banking & Finance</h3>
                <p className="text-gray-600 mb-4">
                  Transaction alerts, OTP verification, account notifications,
                  and security updates.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Transaction alerts</li>
                  <li>• OTP delivery</li>
                  <li>• Account statements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  Appointment reminders, test results, medication alerts, and
                  health tips.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Appointment reminders</li>
                  <li>• Test result notifications</li>
                  <li>• Health tips & alerts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Communication?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let{"'"}s discuss how our SMS platform can help you reach your
            audience more effectively and drive better engagement for your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white"
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
