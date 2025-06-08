import { motion } from "framer-motion";

export function AboutUs() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black via-gray-900 to-black px-6 py-20"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-10 text-4xl font-bold text-orange-400 md:text-5xl">
          Sobre Nós
        </h2>

        <p className="mb-8 text-lg text-gray-300 md:text-xl">
          A{" "}
          <span className="font-semibold text-orange-400">SERPENTZ GAMING</span>{" "}
          nasceu da paixão pelo cenário competitivo, da vontade de vencer e do
          poder da comunidade gamer. Mais que uma organização, somos uma família
          — unidos pela estratégia, foco e respeito.
        </p>

        <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="rounded-xl bg-gray-800 p-6 shadow-md transition-all duration-300 hover:shadow-orange-300/30"
          >
            <h3 className="mb-2 text-xl font-bold text-orange-400">🎯 Missão</h3>
            <p className="text-gray-300">
              Promover o crescimento de jogadores e equipes por meio da
              excelência, disciplina e respeito.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl bg-gray-800 p-6 shadow-md transition-all duration-300 hover:shadow-orange-300/30"
          >
            <h3 className="mb-2 text-xl font-bold text-orange-400">👁 Visão</h3>
            <p className="text-gray-300">
              Ser referência nacional em eSports, reconhecida pela performance,
              organização e paixão pelo jogo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl bg-gray-800 p-6 shadow-md transition-all duration-300 hover:shadow-orange-300/30"
          >
            <h3 className="mb-2 text-xl font-bold text-orange-400">
              💎 Valores
            </h3>
            <ul className="list-inside list-disc text-gray-300">
              <li>Respeito</li>
              <li>Transparência</li>
              <li>Trabalho em equipe</li>
              <li>Paixão pelo competitivo</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-xl bg-gray-800 p-6 shadow-md transition-all duration-300 hover:shadow-orange-300/30"
          >
            <h3 className="mb-2 text-xl font-bold text-orange-400">
              🚀 Propósito
            </h3>
            <p className="text-gray-300">
              Conectar talentos, elevar o cenário nacional e criar oportunidades
              reais para quem vive o jogo como estilo de vida.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
