import { networks } from '@/utils/mocks'

export default function Contact() {
  return (
    <section id="contato" className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Aura de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent blur-2xl animate-pulse z-0" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-10 tracking-wide">
          Contato
        </h2>

        <div className="text-gray-300 mb-6 text-lg flex justify-center items-center gap-2">
          <span className="text-orange-400">📧</span>
          <span className="bg-gray-900 px-4 py-2 rounded-lg border border-orange-500/30 font-mono text-sm">
            contato@serpentz.gg
          </span>
        </div>

        <div className="flex justify-center gap-6 mb-10 text-2xl">
          {networks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-white transition transform hover:scale-110 relative group"
              aria-label={item.name}
            >
              <span className="group-hover:animate-ping absolute -inset-1 rounded-full bg-orange-500 opacity-10 z-0" />
              <span className="relative z-10">{item.icon}</span>
            </a>
          ))}
        </div>

        {/* <a
          href="https://serpentz.gg/loja"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-orange-400/50 hover:-translate-y-1 transition-all duration-300 animate-glow"
        >
          Acessar Loja Oficial
        </a> */}
      </div>
    </section>
  )
}
