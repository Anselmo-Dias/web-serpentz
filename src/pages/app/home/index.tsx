import video from "@/assets/banner.mp4";
import { AboutUs } from "./components/about-us";
import Teams from "./components/teams";
import Achievements from "./components/achievements";
import Calendar from "./components/calendar";
import Community from "./components/community";
import Recruitment from "./components/recruitment";
import Partners from "./components/partners";
import Contact from "./components/contact";
import HallOfFame from "./components/hall-of-fame";
import Feedback from "./components/feedback";
import { Shop } from "./components/shop";

export function HomePage() {
  return (
    <>
      <section
        id="home"
        className="relative flex h-screen items-center justify-center bg-black text-center"
      >
        {/* Fundo com imagem ou vídeo */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-30"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="mb-4 text-5xl font-extrabold text-orange-400 drop-shadow md:text-6xl">
            SERPENTZ GAMING
          </h1>
          <p className="mb-6 text-xl text-gray-200 md:text-2xl">
            "Dominando o jogo com estilo e veneno."
          </p>
          <a
            href="#recruitment"
            className="inline-block rounded-full bg-orange-500 px-8 py-4 font-bold text-black transition-all hover:bg-orange-600"
          >
            Junte-se ao time
          </a>
        </div>
      </section>

      <AboutUs />
      <Teams />
      <HallOfFame />
      <Achievements />
      <Calendar />  
      <Shop />
      <Partners />
      <Community />
      <Recruitment />
      <Feedback />
      <Contact />
    </>
  );
}
