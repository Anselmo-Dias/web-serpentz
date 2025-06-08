import { highlights, networks } from "@/utils/mocks";

export default function Community() {
  return (
    <section id="community" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 text-center mb-12">
          Comunidade SERPENTZ
        </h2>

        {/* Redes sociais */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {networks.map((network) => (
            <a
              key={network.name}
              href={network.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 hover:bg-orange-500 hover:text-black px-5 py-3 rounded-full transition"
            >
              {network.icon}
              <span className="font-semibold">{network.name}</span>
            </a>
          ))}
        </div>

        {/* Destaques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-orange-400 transition transform hover:-translate-y-1"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-400 italic">{item.type}</p>
                <h3 className="text-lg font-bold text-orange-400">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
