import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Eye,
  Heart,
  Users,
  Lightbulb,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";

const heroSlides = [
  {
    title: "About Inocrate",
    subtitle: "WHO WE ARE",
    description:
      "Empowering businesses through innovative technology solutions across education, fintech, and agritech sectors.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Learn More About Us",
    ctaLink: "/contact",
  },
  {
    title: "Our Mission",
    subtitle: "DRIVING INNOVATION",
    description:
      "To revolutionize industries through cutting-edge technology solutions that create lasting impact and drive sustainable growth.",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    ctaText: "Join Our Journey",
    ctaLink: "/contact",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly push boundaries to deliver cutting-edge solutions that transform industries.",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Security is at the core of everything we build, ensuring your data and systems are protected.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients to understand their needs and deliver tailored solutions.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description:
      "Our solutions are designed to optimize processes and maximize productivity for our clients.",
  },
];

const team = [
  {
    name: "Alex Johnson",
    role: "Chief Executive Officer",
    description:
      "Visionary leader with 15+ years in technology innovation and business strategy.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    description:
      "Expert in system architecture and emerging technologies with a passion for scalable solutions.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    description:
      "Product strategist focused on user experience and market-driven innovation.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emily Davis",
    role: "Lead Developer",
    description:
      "Full-stack developer specializing in modern web technologies and cloud solutions.",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-4">
                WHO WE ARE
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Empowering Industries Through{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Innovative Technology
                </span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Inocrate is a forward-thinking technology company dedicated to
                revolutionizing the education, fintech, and agritech sectors. We
                believe in the power of technology to transform businesses and
                create meaningful impact in people{"'"}s lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of experienced developers, designers, and strategists
                work together to deliver solutions that are not only technically
                excellent but also user-friendly and business-focused.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform rotate-3"></div>
              <Image
                width={600}
                height={400}
                src="/placeholder.svg?height=400&width=600"
                alt="Team collaboration"
                className="relative rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with innovative technology solutions
                  that drive growth, efficiency, and positive impact across
                  industries.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading technology partner for businesses seeking
                  digital transformation and sustainable growth in the modern
                  economy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Innovation, integrity, collaboration, and excellence guide
                  everything we do as we build solutions that make a difference.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-8">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-4">
              MEET THE TEAM
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Meet Our Hard Working{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experts
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is driven by a shared passion for technology innovation
              and excellence. Together, we strive to deliver impactful solutions
              for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    width={300}
                    height={300}
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-500 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
              <div className="text-blue-100">Industry Sectors</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
