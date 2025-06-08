import { teams } from "@/utils/mocks";
import { motion } from "framer-motion";

export default function Teams() {
  return (
    <section id="teams" className="bg-black px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-4xl font-bold text-orange-400 md:text-5xl">
          Nossas Equipes
        </h2>

        {teams.map((item, index) => (
          <motion.div
            key={item.game}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="mb-20"
          >
            <div key={item.game} className="mb-16">
              <h3 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
                {item.game}
              </h3>

              <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-4">
                {item.players.map((player) => (
                  <div
                    key={player.name}
                    className="group min-w-[100px] transform overflow-hidden rounded-xl bg-gray-900 shadow-md transition hover:scale-105 hover:shadow-orange-300/30"
                  >
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-orange-400">
                        {player.name}
                      </h4>
                      <p className="text-sm text-gray-400">{player.function}</p>
                      <p className="mt-2 px-2 text-xs text-gray-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        Pro player dedicado, sempre em busca da vitória e
                        evolução constante nos jogos.,
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
