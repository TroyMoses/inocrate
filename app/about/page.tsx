import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  TrendingUp,
  Award,
  Handshake,
} from "lucide-react";
import Image from "next/image";

const heroSlides = [
  {
    title: "About Inocrate",
    subtitle: "WHO WE ARE",
    description:
      "Delivering smart, human-centered innovations that simplify communication, education, logistics, and technology.",
    backgroundImage: "/images/bg2.jpg",
    ctaText: "Learn More About Us",
    ctaLink: "/contact",
  },
  {
    title: "Our Mission",
    subtitle: "DRIVING INNOVATION",
    description:
      "To create a smarter world through purposeful innovations that transform industries and improve lives.",
    backgroundImage: "/images/bg2.jpg",
    ctaText: "Join Our Journey",
    ctaLink: "/contact",
  },
];

const ikigaiValues = [
  {
    icon: Award,
    title: "Impact",
    description:
      "We create with purpose, delivering solutions that leave a meaningful imprint on society.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge",
    description:
      "We pursue learning and mastery to continually grow our competence and creativity.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with honesty, honor our word, and foster trust through transparency and accountability.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We are committed to personal and organizational development, always striving to evolve.",
  },
  {
    icon: Handshake,
    title: "Alignment",
    description:
      "We build in harmony with our values, passions, skills, and the needs of the world.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We embrace creativity and challenge convention to design bold, future-ready solutions.",
  },
];

// const team = [
//   {
//     name: "Benon",
//     role: "Chief Executive Officer",
//     description:
//       "Visionary leader with 15+ years in technology innovation and business strategy.",
//     image: "/images/team/Benon.png",
//   },
//   {
//     name: "Gerald",
//     role: "Chief Technology Officer",
//     description:
//       "Expert in system architecture and emerging technologies with a passion for scalable solutions.",
//     image: "/images/team/Benon.png",
//   },
//   {
//     name: "John",
//     role: "Head of Product",
//     description:
//       "Product strategist focused on user experience and market-driven innovation.",
//     image: "/images/team/Benon.png",
//   },
//   {
//     name: "Emily",
//     role: "Lead Developer",
//     description:
//       "Full-stack developer specializing in modern web technologies and cloud solutions.",
//     image: "/images/team/Benon.png",
//   },
// ];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* Company Overview */}
      <section className="pt-10 pb-5 md:pt-20 md:pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-blue-700 to-blue-900 text-white mb-4">
                WHO WE ARE
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Empowering Industries Through{" "}
                <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  Innovative Technology
                </span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Inocrate Digital Technologies Limited is a forward-thinking
                technology company dedicated to revolutionizing education,
                communication, and logistics sectors. We believe in the power of
                technology to transform businesses and create meaningful impact
                in people{"'"}s lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of experienced developers, designers, and strategists
                work together to deliver solutions that are not only technically
                excellent but also user-friendly and business-focused.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg transform rotate-3"></div>
              <Image
                width={600}
                height={400}
                src="/images/bg-educ.jpg"
                alt="Team collaboration"
                className="relative rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver smart, human-centered innovations that simplify
                  communication, education, logistics, and technology.
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
                  To create a smarter world through purposeful innovations.
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
                  Guided by IKIGAI principles - Impact, Knowledge, Integrity,
                  Growth, Alignment, and Innovation - we build solutions that
                  make a difference.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* IKIGAI Values */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Our Core Values - IKIGAI
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Our values are rooted in the Japanese concept of IKIGAI - the
              intersection of what you love, what you{"'"}re good at, what the
              world needs, and what you can be paid for.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ikigaiValues.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2 text-lg">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-700 to-blue-900 text-white mb-4">
              MEET THE TEAM
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our Hard Working{" "}
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
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
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 rounded-lg"
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
      </section> */}

      {/* Company Stats */}
      <section className="py-10 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
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
              <div className="text-4xl md:text-5xl font-bold mb-2">4</div>
              <div className="text-blue-100">Industry Sectors</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
