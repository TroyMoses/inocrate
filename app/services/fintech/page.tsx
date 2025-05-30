import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Smartphone,
  Shield,
  BarChart3,
  Zap,
  Globe,
  Lock,
  TrendingUp,
  Wallet,
  Building,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const heroSlides = [
  {
    title: "Revolutionary Fintech Solutions",
    subtitle: "FINANCIAL TECHNOLOGY",
    description:
      "Secure, scalable, and efficient financial technology solutions that drive digital transformation in the finance sector.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Explore Fintech Solutions",
    ctaLink: "/contact",
  },
  {
    title: "Digital Banking Platforms",
    subtitle: "MODERN BANKING",
    description:
      "Next-generation banking solutions with seamless user experiences and robust security features.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Get Started Today",
    ctaLink: "/contact",
  },
];

const features = [
  {
    icon: CreditCard,
    title: "Payment Processing",
    description:
      "Secure and fast payment processing solutions with multiple payment methods support.",
    benefits: [
      "Multi-currency Support",
      "Real-time Processing",
      "Fraud Detection",
      "PCI Compliance",
    ],
  },
  {
    icon: Wallet,
    title: "Digital Wallets",
    description:
      "Modern digital wallet solutions with contactless payments and loyalty programs.",
    benefits: [
      "Contactless Payments",
      "Loyalty Integration",
      "P2P Transfers",
      "QR Code Payments",
    ],
  },
  {
    icon: Building,
    title: "Banking APIs",
    description:
      "Comprehensive banking APIs for seamless integration with existing systems.",
    benefits: [
      "Account Management",
      "Transaction APIs",
      "KYC Integration",
      "Regulatory Compliance",
    ],
  },
  {
    icon: BarChart3,
    title: "Financial Analytics",
    description:
      "Advanced analytics and reporting tools for financial insights and decision making.",
    benefits: [
      "Real-time Dashboards",
      "Risk Analytics",
      "Performance Metrics",
      "Custom Reports",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with full regulatory compliance and fraud prevention.",
    benefits: [
      "End-to-end Encryption",
      "Multi-factor Authentication",
      "Compliance Monitoring",
      "Audit Trails",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description:
      "Feature-rich mobile banking applications with intuitive user interfaces.",
    benefits: [
      "Biometric Authentication",
      "Push Notifications",
      "Offline Capabilities",
      "Cross-platform Support",
    ],
  },
];

const solutions = [
  {
    title: "Digital Banking Platform",
    description:
      "Complete digital banking solution with account management, transactions, and customer service features.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Account opening",
      "Transaction management",
      "Customer support",
      "Regulatory reporting",
    ],
  },
  {
    title: "Payment Gateway",
    description:
      "Robust payment processing platform supporting multiple payment methods and currencies.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Multi-payment support",
      "Fraud prevention",
      "Real-time processing",
      "Merchant dashboard",
    ],
  },
  {
    title: "Lending Platform",
    description:
      "Automated lending solutions with credit scoring, risk assessment, and loan management.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Credit scoring",
      "Risk assessment",
      "Automated approvals",
      "Loan tracking",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Process transactions in milliseconds with our optimized infrastructure",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description:
      "Military-grade encryption and security protocols protect your data",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Support for multiple currencies and international payment methods",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Grow your business with solutions that scale with your needs",
  },
];

export default function FintechPage() {
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
              <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white mb-4">
                FINTECH SOLUTIONS
              </Badge>
              <h2 className="text-3xl md:text-4x font-bold mb-6">
                Transforming{" "}
                <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                  Financial Services
                </span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our fintech solutions are designed to revolutionize the
                financial services industry with secure, scalable, and
                user-friendly platforms that enhance customer experiences and
                streamline operations.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From digital banking to payment processing and lending
                platforms, we provide comprehensive solutions that meet the
                evolving needs of modern financial institutions.
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
                alt="Fintech solutions"
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
            <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white mb-4">
              OUR FEATURES
            </Badge>
            <h2 className="text-3xl md:text-4x font-bold mb-6">
              Comprehensive Fintech{" "}
              <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                Technology Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build modern, secure, and scalable
              financial applications
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
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white mb-4">
              OUR SOLUTIONS
            </Badge>
            <h2 className="text-3xl md:text-4x font-bold mb-6">
              Tailored Solutions for{" "}
              <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                Financial Innovation
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
      <section className="py-10 md:py-20 bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4x font-bold mb-6">
              Why Choose Our Fintech Solutions?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Transform your financial services with technology that delivers
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
              <div className="text-4x md:text-5xl font-bold text-green-500 mb-2">
                $50M+
              </div>
              <div className="text-gray-600">Transaction Volume</div>
            </div>
            <div>
              <div className="text-4x md:text-5xl font-bold text-green-500 mb-2">
                99.9%
              </div>
              <div className="text-gray-600">System Uptime</div>
            </div>
            <div>
              <div className="text-4x md:text-5xl font-bold text-green-500 mb-2">
                500+
              </div>
              <div className="text-gray-600">Active Merchants</div>
            </div>
            <div>
              <div className="text-4x md:text-5xl font-bold text-green-500 mb-2">
                25+
              </div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4x font-bold mb-6">
            Ready to Transform Your Financial Services?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let{"'"}s discuss how our fintech solutions can help you enhance
            customer experiences, improve security, and drive digital
            transformation in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white"
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
