'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reasons = [
  {
    title: 'Scale',
    heading: 'A Large-Scale Dental Hospital with 14 Floors in Vancouver',
    description:
      'Daol Dental is not a small clinic—its a comprehensive dental hospital across 14 floors.',
    img: '/images/new_main/why_minish_pic01.jpg',
  },
  {
    title: 'Trust',
    heading: '10-Year Warranty Backed by Authentic Certification',
    description:
      'We guarantee our dental treatments with up to 10 years of certified coverage—because your trust matters.',
    img: '/images/new_main/why_minish_pic02.jpg',
  },
  {
    title: 'Experience',
    heading: 'Over 20 Years of Dental Expertise',
    description:
      'Since 2005, Daol Dental has grown by listening to patients and delivering results.',
    img: '/images/new_main/why_minish_pic03.jpg',
  },
];

export default function WhyChooseDaolDental() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        {/* 제목 영역 */}
        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#222176] mb-4">
            Why so many{' '}
            <span className="font-black">patients choose Daol Dental</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 md:text-xl lg:text-base xl:text-xl font-medium">
            <b>
              [ One-Day Treatments / Advanced Implants / Specialized
              Orthodontics ]
            </b>
            <br />
            For complex and high-level dental procedures, trust Daol Dental
            Hospital.
          </p>
        </div>

        {/* 3개 카드 */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-[#222176] bg-opacity-60" />
              <div className="absolute top-4 left-4 right-4 text-white z-10">
                <span className="inline-block mb-2 text-xs font-semibold px-3 py-1 bg-[#222176] rounded-full w-fit">
                  {item.title}
                </span>
                <h3 className="text-base font-bold leading-snug mb-1">
                  {item.heading}
                </h3>
                <p className="text-sm text-white text-opacity-90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 진료팀 소개 */}
        <div
          className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden px-6 py-10 md:px-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-full max-w-4xl">
              <span className="inline-block bg-[#222176] text-white text-xs font-semibold px-4 py-1 rounded-full mb-3">
                Expert Care & Convenience
              </span>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                12 dental specialists provide evening care 365 days a year to
                support your treatment needs.
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                From complex orthodontics to high-difficulty implants, our team
                of 12 certified specialists is available every day, offering
                late-night treatment to ensure your convenience.
              </p>
            </div>

            <div className="w-full max-w-5xl mt-4">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/new_main/group.png"
                  alt="Daol Dental Specialists Group"
                  width={1200}
                  height={300}
                  className="w-full h-[220px] object-contain bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
