import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import Tilt from "react-parallax-tilt";

import { members } from "@/utils/mocks";

export default function HallOfFame() {
  return (
    <section
      id="hall-da-fama"
      className="relative overflow-hidden bg-black px-6 py-24 text-white"
    >
      {/* Fundo animado */}
      <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-br from-orange-500/10 via-transparent to-black blur-2xl" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <h2 className="mb-16 text-4xl font-extrabold tracking-wide text-orange-400 md:text-5xl">
          Hall da Fama
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {members.map((person) => (
            <SwiperSlide key={person.name}>
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable
                glareColor="#85540c33"
              >
                <div className="p-1">
                  <div className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:border-orange-400">
                    {/* Glow animado */}
                    <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full animate-pulse rounded-2xl bg-gradient-to-tr from-orange-400/5 via-transparent to-black blur-sm" />

                    <div className="relative z-10 mx-auto mb-4 h-28 w-28">
                      <img
                        src={person.image}
                        alt={`Foto de ${person.name}`}
                        className="h-full w-full rounded-full border-4 border-orange-500 object-cover shadow-[0_0_15px_#22c55e80] transition duration-300 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 animate-ping rounded-full border-2 border-orange-400 opacity-10"></span>
                    </div>

                    <h3 className="text-lg font-bold text-orange-300 transition group-hover:text-orange-500 md:text-xl">
                      {person.name}
                    </h3>
                    <p className="mb-2 text-sm text-gray-400">
                      {person.position}
                    </p>

                    {/* Mini bio oculta até hover */}
                    <p className="mt-2 px-2 text-xs text-gray-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
