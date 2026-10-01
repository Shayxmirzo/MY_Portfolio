
'use client';

import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { ProjectObjects } from '@/app/Types/ProductTypes';

import 'swiper/css';
import 'swiper/css/pagination';

const MyProjects: ProjectObjects[] = [
  {
    title: 'ClickOn',
    description: 'My first working e-commerce project, built with React.',
    image: '/Снимок экрана 2026-10-01 184658.png',
    link: 'https://e-commerce-parody.vercel.app/',
  },
  {
    title: 'Shop.co',
    description: 'E-commerce that was maden by next.js.',
    image: '/Снимок экрана 2026-10-01 191145.png',
    link: 'https://the-ecomerce-rho.vercel.app/',
  },
  {
    title: 'Kuda_pizza',
    description: 'Project, that uses launges changer, and send messages',
    image: '/Снимок экрана 2026-10-01 191723.png',
    link: 'https://pizza-e-commerce-mu.vercel.app/',
  },
];

export default function ForthPart() {
  return (
    <section className="w-full bg-black py-16 text-white md:py-24">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-5 md:px-8">
        <div>
          <p className="mb-3 text-sm text-center font-semibold uppercase tracking-[0.2em] text-[#89D467]">
            Selected work
          </p>
          <h2 className="text-4xl text-center font-semibold md:text-6xl">My Projects</h2>
        </div>

        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          grabCursor
          loop
          pagination={{ clickable: true }}
          slidesPerView={1}
          modules={[Autoplay, Pagination]}
          className="w-full flex items-center justify-center pb-12 [--swiper-pagination-color:#89D467] [--swiper-pagination-bullet-inactive-color:#ffffff]"
        >
          {MyProjects.map((project, index) => (
            <SwiperSlide key={`${project.title}-${index}`} className='flex items-center justify-center'>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group mx-auto relative block aspect-video w-[70%] justify-center items-center overflow-hidden border border-white/15 bg-[#111511] transition-[border-color,box-shadow] duration-300 hover:border-[#89D467]/80 hover:shadow-[0_0_36px_rgba(137,212,103,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#89D467]"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover object-top transition-transform duration-500  motion-reduce:transition-none"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/35 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:p-10 motion-reduce:transition-none">
                  <h3 className="text-3xl font-semibold md:text-4xl">{project.title}</h3>
                  <p className="mt-3 max-w-lg leading-7 text-white/80">{project.description}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
