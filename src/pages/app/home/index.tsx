import a1 from '../../../assets/1.jpeg'
import a2 from '../../../assets/2.jpeg'
import a3 from '../../../assets/3.jpeg'
import a4 from '../../../assets/4.jpeg'

export function HomePage() {
  return (
    <div className="grid grid-cols-2 bg-gradient-to-r from-[#112c2c] via-[#173937] to-[#1d4442] px-8 max-md:grid-cols-1">
      <div className="flex h-screen flex-col items-start justify-center text-left">
        <h2 className="text-5xl font-bold text-white max-sm:text-4xl">
          Liberte seu espírito competitivo de jogo
        </h2>
        <p className="my-5 text-gray-400">
          Junte-se à nossa equipe de elite de gamers e eleve suas habilidades a
          novos patamares. Juntos, conquistamos a competição e redefinimos a
          vitória.
        </p>
        <div className="flex w-full items-center justify-start gap-5 max-sm:flex-col">
          <button className="hover:border-transparentg min-h-10 w-full max-w-[200px] rounded-sm bg-gray-100 font-bold text-black transition-all">
            Juntar
          </button>
          <button className="min-h-10 w-full max-w-[200px] rounded-sm border-2 border-gray-100 bg-transparent font-bold text-white transition-all">
            Saber mais
          </button>
        </div>
      </div>
      {/* relative w-64 overflow-hidden */}
      <div className="relative overflow-hidden flex items-center justify-center">
        <div className='flex items-center justify-center gap-5 max-h-[640px]  carousel-inner animate-slide'>
          <div className='flex flex-col gap-5'>
            <img className='w-full h-[350px] rounded-sm' src={a1} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a2} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a3} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a4} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a1} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a2} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a3} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a4} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a1} alt="" />
          </div>
          <div className='translate-y-[100px] flex flex-col gap-5'>
            <img className='w-full h-[350px] rounded-sm' src={a4} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a3} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a2} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a1} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a4} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a3} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a2} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a1} alt="" />
            <img className='w-full h-[350px] rounded-sm' src={a1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
