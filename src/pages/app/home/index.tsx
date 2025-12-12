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
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function HomePage() {
  return (
    <>
      <section
        id="home"
        className="relative flex h-screen items-start justify-center bg-black text-center"
      >
        {/* <div className="absolute inset-0 z-0">
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
*/}

        <div className="relative z-10 px-4 flex flex-col items-center">
          <div className="flex mt-40 mb-5 items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>🐍 A organiação do futuro</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>

          <h1 className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
            SERPENTZ GAMING
          </h1>

          <p className="mb-12 mt-6 text-xl max-w-2xl text-balance text-gray-200 md:text-2xl my-5 text-muted-foreground">
            Beautifully designed, animated components and templates built with
            Tailwind CSS, React, and Framer Motion.
          </p>

        </div>

        <StarsBackground
          starColor={'#cc6b10'}
          className={cn(
            'absolute inset-0 flex items-center justify-center rounded-xl',
            'dark:bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)] bg-[radial-gradient(ellipse_at_bottom,_#f5f5f5_0%,_#fff_100%)]',
          )}
        />
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
