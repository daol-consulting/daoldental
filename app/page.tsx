'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  CheckCircle,
} from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import BeforeAfter from './BeforeAfter';
import Difference from './Difference';
import WhyChooseDaolDental from '@/components/WhychooseDaolDental';

export default function Home() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ededed]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div
              className="flex flex-col justify-center space-y-4"
              data-aos="fade-up"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#222176]">
                  Advanced Care for Your Smile
                </h1>
                <p className="max-w-[600px] text-black py-4 md:text-xl">
                  Welcome to Daol Dental Clinic. We combine cutting-edge
                  technology with compassionate care to provide exceptional
                  dental services for your entire family.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="rounded-3xl bg-transparent border-[#222176] border-[2px] flex justify-center items-center text-[#222176] px-6 py-2 md:text-xl md:border-[3px]">
                  <Link href="/register">Book Appointment</Link>
                  <ChevronRight className="ml-2 h-6 w-6" />
                </button>
                {/* <Link href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    Our Services
                  </Button>
                </Link> */}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end md:relative md:top-[128px]">
              <Image
                src="/images/dental-hero-no-bg.png"
                width={800}
                height={800}
                alt="Modern Daol Dental Clinic reception area with comfortable seating and blue accents"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="before-after"
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
      >
        <div className="container px-4 md:px-6">
          <BeforeAfter />
        </div>
      </section>

      <section
        id="difference"
        className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f8fa] bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/dimmed_logo.png)',
        }}
      >
        <div className="container px-4 md:px-6">
          <Difference />
        </div>
      </section>

      {/* Technology Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#222176]">
                Advanced Technology
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                At Daol Dental Clinic, we invest in cutting-edge technology to
                enhance diagnosis accuracy, treatment efficiency, and patient
                comfort.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 md:grid-cols-2">
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl font-bold text-[#222176]">
                Our Advanced Equipment
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Digital 3D Imaging',
                    description:
                      'Precise diagnostics with minimal radiation exposure',
                  },
                  {
                    title: 'Intraoral Scanners',
                    description:
                      'Digital impressions without uncomfortable traditional molds',
                  },
                  {
                    title: 'Dental Lasers',
                    description:
                      'Less invasive treatments with faster healing times',
                  },
                  {
                    title: 'CAD/CAM Technology',
                    description:
                      'Same-day crowns and restorations custom-made in our office',
                  },
                  {
                    title: 'Soft Tissue Management',
                    description:
                      'Precision gum treatments with minimal discomfort',
                  },
                ].map((tech, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#222176] mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{tech.title}</h4>
                      <p className="text-gray-500">{tech.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/dental-tech.png"
                width={500}
                height={400}
                alt="Daol Dental Clinic's advanced 3D imaging system and digital scanner"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseDaolDental />
      {/* About Section
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">
                About Our Clinic
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Daol Dental Clinic was established with a vision to transform
                dental care through innovation and patient-centered approaches.
                Our state-of-the-art facility features the latest dental
                technology, including digital X-rays, intraoral cameras, and
                laser dentistry equipment to ensure precise diagnoses and
                comfortable treatments.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/images/dental-clinic.jpg"
                width={600}
                height={400}
                alt="Modern Daol Dental Clinic treatment room with advanced equipment and comfortable patient chair"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-blue-600">
                        Our Mission
                      </h3>
                      <p className="text-gray-500">
                        To provide exceptional dental care using advanced
                        technology and evidence-based practices while ensuring
                        each patient feels valued, comfortable, and informed
                        throughout their treatment journey.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-blue-600">
                        Our Approach
                      </h3>
                      <p className="text-gray-500">
                        We believe in comprehensive, preventative care tailored
                        to each individual's needs. Our team takes time to
                        understand your concerns and develop personalized
                        treatment plans that prioritize long-term oral health.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-blue-600">
                        Our Promise
                      </h3>
                      <p className="text-gray-500">
                        We promise transparency in treatment options and costs,
                        gentle care that minimizes discomfort, and a commitment
                        to continuing education that keeps us at the forefront
                        of dental advancements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section
        id="services"
        className="w-full py-12 md:py-24 lg:py-32 bg-[#222176] text-white"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                We offer a comprehensive range of dental services using the
                latest techniques and technologies to ensure optimal results
                with minimal discomfort.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Preventative Care',
                description:
                  'Comprehensive exams, digital X-rays, professional cleanings, and personalized oral hygiene education.',
                image: '/images/services/preventative.png',
              },
              {
                title: 'Cosmetic Dentistry',
                description:
                  'Teeth whitening, porcelain veneers, smile makeovers, and aesthetic bonding procedures.',
                image: '/images/services/cosmetic.png',
              },
              {
                title: 'Restorative Dentistry',
                description:
                  'Tooth-colored fillings, crowns, bridges, and full mouth rehabilitation for damaged teeth.',
                image: '/images/services/restorative.png',
              },
              {
                title: 'Implant Dentistry',
                description:
                  'Single and multiple tooth implants, implant-supported dentures, and All-on-4 solutions.',
                image: '/images/services/implant.png',
              },
              {
                title: 'Orthodontics',
                description:
                  'Traditional braces, clear aligners, and accelerated orthodontic treatments for all ages.',
                image: '/images/services/orthodontics.png',
              },
              {
                title: 'Periodontal Therapy',
                description:
                  'Gum disease treatment, deep cleanings, laser therapy, and maintenance programs.',
                image: '/images/services/periodontal.png',
              },
              {
                title: 'Endodontic Treatment',
                description:
                  'Root canal therapy using rotary instruments and microscopic visualization for precision.',
                image: '/images/services/endodontic.png',
              },
              {
                title: 'Pediatric Dentistry',
                description:
                  'Child-friendly care, preventative treatments, and education for developing healthy habits.',
                image: '/images/services/pediatric.png',
              },
              {
                title: 'Emergency Care',
                description:
                  'Same-day appointments for dental emergencies, pain relief, and urgent treatments.',
                image: '/images/services/emergency.png',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden border-blue-100 bg-white rounded-3xl"
              >
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={`${service.title} - Daol Dental Clinic service`}
                  width={300}
                  height={200}
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-[#222176] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-black">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f8fa] bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/dimmed_logo.png)',
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#222176]">
                Meet Our Team
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Our experienced team of dental professionals combines expertise
                with compassion to provide you with exceptional care.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Dr. James Park',
                role: 'Lead Dentist & Founder',
                bio: 'Dr. Park has over 15 years of experience specializing in cosmetic and restorative dentistry. He completed his advanced training at the University of Pennsylvania and is committed to continuing education in the latest dental techniques.',
                image: '/images/team/dr-joo.webp',
              },
              {
                name: 'Dr. Michelle Kim',
                role: 'Orthodontist',
                bio: 'Board-certified in orthodontics, Dr. Kim specializes in both traditional braces and clear aligner therapy. She is passionate about creating beautiful smiles for patients of all ages.',
                image: '/images/team/dr-han.webp',
              },
              {
                name: 'Dr. David Chen',
                role: 'Periodontist',
                bio: 'Dr. Chen focuses on gum health and implant dentistry. His gentle approach to periodontal treatment has helped countless patients restore their oral health and confidence.',
                image: '/images/team/dr-ma.png',
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden rounded-3xl">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={`${member.name} - ${member.role} at Daol Dental Clinic`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 md:p-8">
                  <h3 className="text-xl font-bold text-[#222176] md:text-2xl">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#222176] mb-2 md:text-lg">
                    {member.role}
                  </p>
                  <p className="text-black">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#222176]">
                What Our Patients Say
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Don't just take our word for it. Here's what our patients have
                to say about their experience with us.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "I've always been anxious about dental visits, but Dr. Park and his team made me feel completely at ease. The care I received was exceptional, and for the first time, I actually look forward to my dental appointments!",
                name: 'Robert Williams',
                location: 'Patient since 2020',
              },
              {
                quote:
                  'My entire family sees Dr. Kim for orthodontic work. The clear aligners she recommended for me were perfect, and my teenagers are doing great with their traditional braces. The office is always accommodating with our busy schedules.',
                name: 'Maria Garcia',
                location: 'Patient since 2019',
              },
              {
                quote:
                  'After years of gum problems, Dr. Chen developed a treatment plan that has completely transformed my oral health. The laser treatments were virtually painless, and the results have been amazing.',
                name: 'James Thompson',
                location: 'Patient since 2021',
              },
              {
                quote:
                  'My 4-year-old used to be terrified of the dentist until we found Dr. Johnson. Now she actually gets excited for her checkups! The kid-friendly environment and gentle approach make all the difference.',
                name: 'Emily Parker',
                location: 'Patient since 2022',
              },
              {
                quote:
                  'The technology at Daol Dental is impressive. I needed a crown, and they made it right there in the office – no temporary crown, no second appointment. The whole process was efficient and the result looks completely natural.',
                name: 'David Kim',
                location: 'Patient since 2018',
              },
              {
                quote:
                  "I had a dental emergency while visiting from out of town, and Daol Dental fit me in the same day. The staff was compassionate, and Dr. Park took care of my problem quickly. I couldn't be more grateful!",
                name: 'Lisa Johnson',
                location: 'Emergency Patient',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-blue-100 bg-white">
                <CardContent className="p-6 !h-full flex">
                  <div className="flex flex-col gap-4">
                    <div className="text-lg italic text-gray-500 flex flex-1">
                      "{testimonial.quote}"
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[#222176]">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#222176] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter md:text-5xl">
                Ready to Transform Your Smile?
              </h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto pt-2">
                Book your appointment today and experience the Daol Dental
                difference. New patients receive a comprehensive exam and
                consultation at a special introductory rate.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="rounded-3xl bg-transparent border-white border-[2px] flex justify-center items-center text-white px-6 py-2 md:text-xl md:border-[3px]">
                <Link href="/register">Book Apppointment</Link>
                <ChevronRight className="ml-2 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 bg-white border-t border-blue-100"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-[#222176] mb-4 md:text-4xl">
                Daol Dental Clinic
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-[#222176] mt-0.5 md:h-6 md:w-6" />
                  <div>
                    <h4 className="font-semibold md:text-2xl">Location</h4>
                    <p className="text-gray-500">
                      123 Vancouver Avenue, Suite 200
                    </p>
                    <p className="text-gray-500">Vancouver, BC V0R1L1</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-5 w-5 text-[#222176] mt-0.5 md:h-6 md:w-6" />
                  <div>
                    <h4 className="font-semibold md:text-2xl">
                      Business Hours
                    </h4>
                    <p className="text-gray-500">
                      Monday - Thursday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-500">Friday: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-500">
                      Saturday: 9:00 AM - 2:00 PM (By appointment only)
                    </p>
                    <p className="text-gray-500">Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-[#222176] mt-0.5 md:h-6 md:w-6" />
                  <div>
                    <h4 className="font-semibold md:text-2xl">Phone</h4>
                    <p className="text-gray-500">(604) 123-4567</p>
                    <p className="text-gray-500">Emergency: (604) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-[#222176] mt-0.5 md:h-6 md:w-6" />
                  <div>
                    <h4 className="font-semibold md:text-2xl">Email</h4>
                    <p className="text-gray-500">appointments@daoldental.com</p>
                    <p className="text-gray-500">info@daoldental.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <Link href="#" className="text-[#222176] hover:text-[#222176]">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-[#222176] hover:text-[#222176]">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-[#222176] hover:text-[#222176]">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <iframe
                title="Map of Vancouver"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166620.2194924274!2d-123.09300495214843!3d49.268041693074956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1742894840700!5m2!1sen!2sca"
                width="100%"
                height="256"
                className="rounded-lg border border-blue-100"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing the location of Daol Dental Clinic in Vancouver"
              ></iframe>

              <div className="mt-4">
                <h4 className="font-semibold text-[#222176] mb-2 md:text-2xl">
                  Insurance & Payment
                </h4>
                <p className="text-gray-500 mb-2">
                  We accept most major dental insurance plans and offer flexible
                  payment options including:
                </p>
                <ul className="text-gray-500 list-disc pl-5 space-y-1">
                  <li>All major credit cards</li>
                  <li>Health savings accounts (HSA)</li>
                  <li>Flexible spending accounts (FSA)</li>
                  <li>CareCredit dental financing</li>
                  <li>In-house membership plans</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-blue-100 pt-6 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} Daol Dental Clinic. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
