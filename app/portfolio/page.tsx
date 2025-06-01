import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
// import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import {
//   ExternalLink,
//   Github,
//   GraduationCap,
//   CreditCard,
//   Sprout,
//   Users,
//   Calendar,
//   BarChart3,
//   Shield,
// } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";

const heroSlides = [
  {
    title: "Our Portfolio",
    subtitle: "FEATURED PROJECTS",
    description:
      "Explore our innovative solutions across education, fintech, etc that have transformed businesses and communities.",
    backgroundImage: "/images/bg2.jpg",
    ctaText: "View All Projects",
    ctaLink: "#projects",
  },
  {
    title: "Innovation in Action",
    subtitle: "REAL IMPACT",
    description:
      "Discover how our technology solutions have driven digital transformation and created lasting value for our clients.",
    backgroundImage: "/images/bg3.jpg",
    ctaText: "Explore Case Studies",
    ctaLink: "#case-studies",
  },
];

// const projects = [
//   {
//     id: 1,
//     title: "EduConnect Learning Platform",
//     category: "Education",
//     description:
//       "Comprehensive learning management system serving over 10,000 students across 50+ institutions.",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
//     features: [
//       "Virtual Classrooms",
//       "Assessment Tools",
//       "Progress Tracking",
//       "Mobile App",
//     ],
//     results: {
//       students: "10,000+",
//       institutions: "50+",
//       engagement: "85%",
//       satisfaction: "95%",
//     },
//     icon: GraduationCap,
//     color: "from-blue-500 to-purple-600",
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 2,
//     title: "FinSecure Payment Gateway",
//     category: "Fintech",
//     description:
//       "Secure payment processing platform handling millions in transactions with 99.9% uptime.",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["Node.js", "React", "MongoDB", "Stripe API"],
//     features: [
//       "Multi-currency Support",
//       "Fraud Detection",
//       "Real-time Processing",
//       "API Integration",
//     ],
//     results: {
//       transactions: "$50M+",
//       uptime: "99.9%",
//       merchants: "500+",
//       countries: "25+",
//     },
//     icon: CreditCard,
//     color: "from-green-500 to-teal-600",
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 3,
//     title: "AgriSmart Farm Management",
//     category: "Agritech",
//     description:
//       "IoT-enabled farm management system helping farmers increase yield by 30% while reducing costs.",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["React Native", "Python", "IoT Sensors", "Machine Learning"],
//     features: [
//       "IoT Monitoring",
//       "Weather Integration",
//       "Crop Analytics",
//       "Mobile Dashboard",
//     ],
//     results: {
//       farms: "200+",
//       yieldIncrease: "30%",
//       waterSavings: "25%",
//       costReduction: "40%",
//     },
//     icon: Sprout,
//     color: "from-orange-500 to-red-600",
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 4,
//     title: "SchoolSync Management System",
//     category: "Education",
//     description:
//       "Complete school management solution streamlining administrative tasks and improving communication.",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["Vue.js", "Laravel", "MySQL", "Firebase"],
//     features: [
//       "Student Records",
//       "Parent Portal",
//       "Staff Management",
//       "Fee Collection",
//     ],
//     results: {
//       schools: "75+",
//       students: "25,000+",
//       efficiency: "60%",
//       paperless: "90%",
//     },
//     icon: Users,
//     color: "from-indigo-500 to-blue-600",
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 5,
//     title: "CryptoTrade Exchange Platform",
//     category: "Fintech",
//     description:
//       "Advanced cryptocurrency trading platform with real-time market data and secure wallet integration.",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["React", "Node.js", "WebSocket", "Blockchain"],
//     features: [
//       "Real-time Trading",
//       "Secure Wallets",
//       "Market Analysis",
//       "Mobile Trading",
//     ],
//     results: {
//       users: "15,000+",
//       volume: "$100M+",
//       pairs: "50+",
//       security: "100%",
//     },
//     icon: BarChart3,
//     color: "from-purple-500 to-pink-600",
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 6,
//     title: "FarmMarket Digital Marketplace",
//     category: "Agritech",
//     description:
//       "Digital marketplace connecting farmers directly with buyers, eliminating middlemen and increasing profits.",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["Next.js", "Express.js", "PostgreSQL", "Stripe"],
//     features: [
//       "Direct Trading",
//       "Price Discovery",
//       "Quality Assurance",
//       "Logistics Support",
//     ],
//     results: {
//       farmers: "1,000+",
//       buyers: "500+",
//       transactions: "$10M+",
//       profitIncrease: "35%",
//     },
//     icon: Calendar,
//     color: "from-emerald-500 to-green-600",
//     liveUrl: "#",
//     githubUrl: "#",
//   },
// ];

// const categories = ["All", "Education", "Fintech", "Agritech"];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* Portfolio Overview */}
      <section className="pt-10 pb-10 md:pt-20 md:pb-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <Badge className="bg-gradient-to-r from-blue-700 to-blue-900 text-white mb-4">
              OUR PORTFOLIO
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Innovative Solutions{" "}
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                Driving Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse portfolio of successful projects across
              education, fintech, and agritech sectors that have transformed
              businesses and communities.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">25+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">4</div>
              <div className="text-gray-600">Industry Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      {/* <section id="projects" className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold mb-8">Featured Projects</h3>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white hover:border-transparent transition-all cursor-pointer"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    width={400}
                    height={300}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`bg-gradient-to-r ${project.color} text-white`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mr-3`}
                    >
                      <project.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    {Object.entries(project.results)
                      .slice(0, 4)
                      .map(([key, value], idx) => (
                        <div key={idx} className="bg-gray-50 p-2 rounded">
                          <div className="font-bold text-sm">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Let{"'"}s discuss how we can help you achieve similar results with
            our innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-500 hover:bg-white hover:text-orange-500"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
