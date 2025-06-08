import { achievements } from "@/utils/mocks";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-12">Nossas Conquistas</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-300/30 transition transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-orange-400 text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm italic mb-2">{item.year}</p>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
