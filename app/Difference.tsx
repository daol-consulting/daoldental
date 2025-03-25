'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Difference() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-black">
        <div className="txt_wrap" data-aos="fade-up">
          <div className="flex flex-col gap-4 md:text-2xl">
            <div>
              <p className="sub_ttl">What makes Daol different?</p>
              <strong className="text-[#222176] text-2xl md:text-4xl">
                Because we restore <b>molars</b>
              </strong>
            </div>

            <div>
              <p className="sub_txt">
                We perfected 0.1mm-thin restorations
                <br />
                over 10 years ago. <br />
                Daol has advanced precision processing <br />
                technology to restore even molars.
              </p>
            </div>
            <div>
              <button className="rounded-3xl bg-transparent border-[#222176] border-[2px] flex justify-center items-center my-4 text-[#222176] px-6 py-2 md:text-xl md:border-[3px] md:my-6">
                <Link href="/register">Learn More</Link>
                <ChevronRight className="ml-2 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <ul className="flex flex-col items-end gap-6" data-aos="fade-up">
          <li className="flex justify-between bg-[#e1e2ed] md:text-2xl w-full p-5 md:p-8 rounded-3xl md:w-[455px]">
            <div className="flex items-end">
              <div>
                <strong className="text-[#222176]">Daol</strong> is <br />
                not laminate
              </div>
            </div>
            <div className="bg-white rounded-[50%] p-4 w-[60px] h-[60px] md:w-[100px] md:h-[100px] md:p-6">
              <Image
                src="/images/difference-1.png"
                width={60}
                height={60}
                alt="Modern Daol Dental Clinic reception area with comfortable seating and blue accents"
                className="object-cover"
              />
            </div>
          </li>
          <li className="flex justify-between bg-[#a2a2c5] md:text-2xl w-full p-5 md:p-8 rounded-3xl md:w-[455px]">
            <div className="flex items-end">
              <div>
                It’s not just{' '}
                <strong className="text-[#222176]">cosmetic shaping</strong>
              </div>
            </div>
            <div className="bg-white rounded-[50%] p-4 w-[60px] h-[60px] md:w-[100px] md:h-[100px] md:p-6">
              <Image
                src="/images/difference-2.png"
                width={60}
                height={60}
                alt="Modern Daol Dental Clinic reception area with comfortable seating and blue accents"
                className="object-cover"
              />
            </div>
          </li>
          <li className="flex justify-between bg-[#222176] text-white md:text-2xl w-full p-5 md:p-8 rounded-3xl md:w-[455px]">
            <div className="flex items-end">
              <div>
                It’s a <strong>dental restoration solution</strong>
              </div>
            </div>
            <div className="bg-white rounded-[50%] p-4 w-[60px] h-[60px] md:w-[100px] md:h-[100px] md:p-6">
              <Image
                src="/images/difference-3.png"
                width={60}
                height={60}
                alt="Modern Daol Dental Clinic reception area with comfortable seating and blue accents"
                className="object-cover"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
