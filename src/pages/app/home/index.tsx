import { CarouselImages } from "./components/carousel-images";

export function HomePage() {
  return (
    <div className="grid grid-cols-2 gap-5 bg-gradient-to-r from-[#112c2c] via-[#173937] to-[#1d4442] px-8 max-md:grid-cols-1">
      <div className="flex h-screen flex-col items-start justify-center text-left">
        <h2 className="w-full max-w-md text-5xl font-bold text-white max-xs:text-3xl max-md:text-center max-3xl:max-w-3xl max-3xl:text-7xl">
          Liberte seu espírito competitivo de jogo
        </h2>
        <p className="my-5 w-full max-w-md text-gray-400 max-md:text-center max-3xl:max-w-3xl max-3xl:text-xl">
          Junte-se à nossa equipe de elite de gamers e eleve suas habilidades a
          novos patamares. Juntos, conquistamos a competição e redefinimos a
          vitória.
        </p>
        <div className="flex w-full items-center justify-start gap-5 max-sm:flex-col max-md:justify-center">
          <button className="hover:border-transparentg min-h-10 w-full max-w-[200px] rounded-sm bg-gray-100 font-bold text-black transition-all">
            Juntar
          </button>
          <button className="min-h-10 w-full max-w-[200px] rounded-sm border-2 border-gray-100 bg-transparent font-bold text-white transition-all">
            Saber mais
          </button>
        </div>
      </div>

      <CarouselImages />
    </div>
  );
}
