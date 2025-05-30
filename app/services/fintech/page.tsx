import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, Smartphone, Shield, BarChart3, Zap, Globe, Lock, TrendingUp, Wallet, Building } from "lucide-react"
import Link from "next/link"

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
    description: "Next-generation banking solutions with seamless user experiences and robust security features.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Get Started Today",
    ctaLink: "/contact",
  },
]

const features = [
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Secure and fast payment processing solutions with multiple payment methods support.",
    benefits: ["Multi-currency Support", "Real-time Processing", "Fraud Detection", "PCI Compliance"],
  },
  {
    icon: Wallet,
    title: "Digital Wallets",
    description: "Modern digital wallet solutions with contactless payments and loyalty programs.",
    benefits: ["Contactless Payments", "Loyalty Integration", "P2P Transfers", "QR Code Payments"],
  },
  {
    icon: Building,
    title: "Banking APIs",
    description: "Comprehensive banking APIs for seamless integration with existing systems.",
    benefits: ["Account Management", "Transaction APIs", "KYC Integration", "Regulatory Compliance"],
  },
  {
    icon: BarChart3,
    title: "Financial Analytics",
    description: "Advanced analytics and reporting tools for financial insights and decision making.",
    benefits: ["Real-time Dashboards", "Risk Analytics", "Performance Metrics", "Custom Reports"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with full regulatory compliance and fraud prevention.",
    benefits: ["End-to-end Encryption", "Multi-factor Authentication", "Compliance Monitoring", "Audit Trails"],
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description: "Feature-rich mobile banking applications with intuitive user interfaces.",
    benefits: ["Biometric Authentication", "Push Notifications", "Offline Capabilities", "Cross-platform Support"],
  },
]

const solutions = [
  {
    title: "Digital Banking Platform",
    description:
      "Complete digital banking solution with account management, transactions, and customer service features.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Account opening", "Transaction management", "Customer support", "Regulatory reporting"],
  },
  {
    title: "Payment Gateway",
    description: "Robust payment processing platform supporting multiple payment methods and currencies.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Multi-payment support", "Fraud prevention", "Real-time processing", "Merchant dashboard"],
  },
  {
    title: "Lending Platform",
    description: "Automated lending solutions with credit scoring, risk assessment, and loan management.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Credit scoring", "Risk assessment", "Automated approvals", "Loan tracking"],
  },
]

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process transactions in milliseconds with our optimized infrastructure",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "Military-grade encryption and security protocols protect your data",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Support for multiple currencies and international payment methods",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Grow your business with solutions that scale with your needs",
  },
]

export default function FintechPage() {
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
                FINTECH SOLUTIONS
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Transforming{" "}
                <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                  Financial Services
                </span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our fintech solutions are designed to revolutionize the financial services 
                industry with secure, scalable, and user-friendly platforms that enhance 
                customer experiences and streamline operations.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From digital banking to payment processing and lending platforms, we provide 
                comprehensive solutions that meet the evolving needs of modern financial institutions.
              </p>
              <Button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg transform rotate-3"></div>
              <img 
                src="/placeholder.svg?height=400&width=600" 
                alt="Fintech solutions\
