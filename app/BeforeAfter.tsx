'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const videos = [
  {
    src: 'https://player.vimeo.com/video/927002463?h=204168f575&background=1&autoplay=1&loop=1&muted=1&byline=0&title=0',
    thumbnail: '/images/ba-sample-1.jpg',
  },
  {
    src: 'https://player.vimeo.com/video/927002415?h=6334d1985c&background=1&autoplay=1&loop=1&muted=1&byline=0&title=0',
    thumbnail: '/images/ba-sample-2.jpg',
  },
  {
    src: 'https://player.vimeo.com/video/927002415?h=6334d1985c&background=1&autoplay=1&loop=1&muted=1&byline=0&title=0',
    thumbnail: '/images/ba-sample-3.jpg',
  },
  {
    src: 'https://player.vimeo.com/video/927002415?h=6334d1985c&background=1&autoplay=1&loop=1&muted=1&byline=0&title=0',
    thumbnail: '/images/ba-sample-4.jpg',
  },
  // 필요한 만큼 데이터 추가
];

export default function BeforeAfter() {
  const [currentVideo, setCurrentVideo] = useState(videos[0].src);

  return (
    <div className="text-black">
      <div className="w-full flex justify-center mb-4 md:justify-end">
        <div className="text-center md:text-right">
          <p className="font-semibold md:text-2xl">BEFORE &amp; AFTER</p>
          <p className="text-[#222176] font-bold text-2xl md:text-4xl">DAOL</p>
          <p className="mt-2 md:text-lg">
            Healthy dental restoration
            <br />
            solutions just for you
          </p>
          <div className="hidden relative top-8 left-10 md:block">
            <button className="rounded-3xl bg-transparent border-[#222176] border-[2px] flex justify-center items-center text-[#222176] px-6 py-2 md:text-xl md:border-[3px]">
              <Link href="/register">View More Cases</Link>
              <ChevronRight className="ml-2 h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="inner">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Image
              src="/images/ba-sample.jpg"
              width={650}
              height={369}
              alt="Modern Daol Dental Clinic reception area with comfortable seating and blue accents"
              className="rounded-3xl object-cover"
            />
          </div>

          <div className="flex">
            {/* <div className="">
              <div className="pagination">
                <button className="prev">이전</button>
                <button className="next">다음</button>
              </div>
            </div> */}

            <Swiper
              modules={[Navigation]}
              navigation={{ prevEl: '.prev', nextEl: '.next' }}
              slidesPerView={4}
              spaceBetween={20}
            >
              {videos.map((video, index) => (
                <SwiperSlide
                  key={index}
                  className="!flex justify-end items-end"
                >
                  <div onClick={() => setCurrentVideo(video.src)}>
                    <img
                      src={video.thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-[120px] h-[120px] rounded-2xl md:w-[200px] md:h-[200px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="md:hidden">
            <button className="rounded-3xl bg-transparent border-[#222176] border-[2px] flex justify-center items-center text-[#222176] px-6 py-2 md:text-xl md:border-[3px]">
              <Link href="/register">View More Case</Link>
              <ChevronRight className="ml-2 h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
