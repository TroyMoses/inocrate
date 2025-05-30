import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  BookOpen,
  Users,
  BarChart3,
  Video,
  Shield,
  Globe,
  Smartphone,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const heroSlides = [
  {
    title: "Transform Education with Technology",
    subtitle: "EDUCATION SYSTEMS",
    description:
      "Comprehensive learning management systems and digital solutions that enhance educational outcomes and streamline administrative processes.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Explore Our Solutions",
    ctaLink: "/contact",
  },
  {
    title: "Digital Learning Platforms",
    subtitle: "MODERN EDUCATION",
    description:
      "Interactive learning environments that engage students and empower educators with powerful tools for effective teaching.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Get Started Today",
    ctaLink: "/contact",
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Learning Management System",
    description:
      "Comprehensive LMS with course management, assignment tracking, and progress monitoring.",
    benefits: [
      "Course Creation Tools",
      "Assignment Management",
      "Grade Tracking",
      "Progress Analytics",
    ],
  },
  {
    icon: Users,
    title: "Student Information System",
    description:
      "Complete student data management with enrollment, attendance, and academic records.",
    benefits: [
      "Student Profiles",
      "Attendance Tracking",
      "Academic Records",
      "Parent Portals",
    ],
  },
  {
    icon: Video,
    title: "Virtual Classrooms",
    description:
      "Interactive online learning environments with video conferencing and collaboration tools.",
    benefits: [
      "Live Video Classes",
      "Screen Sharing",
      "Interactive Whiteboards",
      "Recording Capabilities",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Detailed insights into student performance and institutional metrics.",
    benefits: [
      "Performance Analytics",
      "Custom Reports",
      "Data Visualization",
      "Predictive Insights",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Learning Apps",
    description:
      "Native mobile applications for learning on-the-go with offline capabilities.",
    benefits: [
      "Offline Content",
      "Push Notifications",
      "Mobile Assessments",
      "Cross-Platform Support",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "FERPA-compliant systems with robust security measures to protect student data.",
    benefits: [
      "Data Encryption",
      "Access Controls",
      "Audit Trails",
      "Compliance Reporting",
    ],
  },
];

const solutions = [
  {
    title: "K-12 Education Platform",
    description:
      "Comprehensive solution for primary and secondary education with age-appropriate interfaces and parental involvement features.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Grade-specific curricula",
      "Parent-teacher communication",
      "Homework management",
      "Progress tracking",
    ],
  },
  {
    title: "Higher Education System",
    description:
      "Advanced platform for universities and colleges with research management and alumni networking capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Research collaboration",
      "Alumni networks",
      "Career services",
      "Academic planning",
    ],
  },
  {
    title: "Corporate Training Platform",
    description:
      "Professional development and training solutions for businesses and organizations.",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Skills assessment",
      "Certification tracking",
      "Performance metrics",
      "Custom content",
    ],
  },
];

export default function EducationPage() {
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
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
                EDUCATION TECHNOLOGY
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Revolutionizing{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Education Systems
                </span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our education technology solutions are designed to enhance
                learning outcomes, streamline administrative processes, and
                create engaging digital learning environments for students,
                teachers, and administrators.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From K-12 schools to universities and corporate training
                programs, our platforms adapt to meet the unique needs of each
                educational institution.
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transform rotate-3"></div>
              <Image
                width={600}
                height={400}
                src="/placeholder.svg?height=400&width=600"
                alt="Education technology"
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
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
              OUR FEATURES
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Comprehensive Education{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Technology Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create modern, effective educational
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
              OUR SOLUTIONS
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Tailored Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Every Educational Need
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
                    className="group hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all"
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
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our Education Solutions?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your educational institution with technology that makes
              a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Improved Learning Outcomes
              </h3>
              <p className="text-blue-100">
                Enhanced student engagement and academic performance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data-Driven Insights</h3>
              <p className="text-blue-100">
                Make informed decisions with comprehensive analytics
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessible Anywhere</h3>
              <p className="text-blue-100">
                Learn and teach from anywhere with cloud-based solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Compliant</h3>
              <p className="text-blue-100">
                FERPA-compliant with enterprise-grade security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Educational Institution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let{"'"}s discuss how our education technology solutions can enhance
            learning outcomes and streamline your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
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
