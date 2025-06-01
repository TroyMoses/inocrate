import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Users,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const heroSlides = [
  {
    title: "Get in Touch with Our Team",
    subtitle: "CONTACT US",
    description:
      "Ready to transform your business with innovative technology solutions? Let's discuss your project and explore how we can help you achieve your goals.",
    backgroundImage: "/images/bg2.jpg",
    ctaText: "Start Conversation",
    ctaLink: "#contact-form",
  },
  {
    title: "Let's Build Amazing Things Together",
    subtitle: "COLLABORATION",
    description:
      "From initial consultation to project delivery, we're here to support you every step of the way with our expertise and innovative solutions.",
    backgroundImage: "/images/bg-educ.jpg",
    ctaText: "Schedule Meeting",
    ctaLink: "#contact-form",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Ntinda, Kigoowa Road. Kampala, Uganda"],
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+256 701 618 653", "+256 703 196 362", "Mon-Fri 9AM-6PM EST"],
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: [
      "info@inocrate.com",
      "support@inocrate.com",
      "careers@inocrate.com",
    ],
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed",
    ],
    color: "from-purple-500 to-pink-600",
  },
];

const services = [
  "Education Systems",
  "Fintech Solutions",
  "Agritech Platforms",
  "Custom Software Development",
  "Mobile App Development",
  "Web Development",
  "UI/UX Design",
  "Consulting Services",
];

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Work with experienced developers and designers who understand your industry",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description:
      "50+ successful projects across education, fintech, and agritech sectors",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Regular updates and transparent communication throughout the project lifecycle",
  },
  {
    icon: Calendar,
    title: "Timely Delivery",
    description:
      "We respect deadlines and deliver high-quality solutions on time",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* Contact Information */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500 to-blue-900 text-white mb-4">
              GET IN TOUCH
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              We{"'"}d Love to{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
                Hear From You
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you have a project in mind, need technical consultation,
              or want to explore partnership opportunities, our team is here to
              help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="py-8 md:py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Send Us a Message</h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we{"'"}ll get back to you within 24
                hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <Input placeholder="Enter your company name" />
                </div>

                <div>
                  <label
                    htmlFor="service-interested"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service-interested"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="project-budget"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Budget
                  </label>
                  <select
                    id="project-budget"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <Textarea
                    placeholder="Tell us about your project, requirements, and goals..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-900 text-white"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Visit Our Office</h3>
              <p className="text-gray-600 mb-8">
                We{"'"}re located in the heart of Kampala City. Feel free to visit
                us for a face-to-face consultation.
              </p>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">
                    Ntinda, Kigoowa Road. Kampala, Uganda
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold">Why Choose Inocrate?</h4>
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">{reason.title}</h5>
                      <p className="text-gray-600 text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4 md:mb-10">
            <Badge className="bg-gradient-to-r from-blue-500 to-blue-900 text-white mb-4">
              FREQUENTLY ASKED
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-3">
                  How long does a typical project take?
                </h3>
                <p className="text-gray-600">
                  Project timelines vary depending on complexity and scope.
                  Simple projects may take 4-8 weeks, while complex enterprise
                  solutions can take 3-6 months. We provide detailed timelines
                  during consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-3">
                  Do you provide ongoing support and maintenance?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer comprehensive support and maintenance packages
                  to ensure your systems run smoothly. This includes bug fixes,
                  security updates, performance optimization, and feature
                  enhancements.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-3">
                  Can you work with our existing systems?
                </h3>
                <p className="text-gray-600">
                  We specialize in integrating new solutions with existing
                  systems and can help modernize your current infrastructure
                  while maintaining business continuity.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-3">
                  What technologies do you specialize in?
                </h3>
                <p className="text-gray-600">
                  We work with modern technologies including React, Next.js,
                  Node.js, Python, TypeScript, cloud platforms (AWS, Azure),
                  databases (PostgreSQL, MongoDB), and mobile development
                  frameworks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Let{"'"}s schedule a consultation to discuss your requirements and
            explore how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Schedule Consultation
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
