import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { partners } from "@/utils/mocks";

export default function Partners() {
  return (
    <section
      id="parceiros"
      className="bg-gradient-to-br from-black to-gray-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-4xl font-extrabold tracking-wide text-orange-400 md:text-5xl"
        >
          Nossos Parceiros
        </motion.h2>

        <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 md:grid-cols-3">
          {partners.map((item) => {
            return (
              <Tilt
                key={item.id}
                glareEnable={true}
                glareMaxOpacity={0.3}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
                className="transition-transform duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: item.id * 0.2 }}
                  className="rounded-xl border border-orange-500/10 bg-black p-6 text-center shadow-lg backdrop-blur-sm hover:shadow-orange-500/40"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="animate-pulse-slow mb-4 h-24 w-24 object-contain rounded-full"
                  />
                  <h3 className="text-lg font-bold text-orange-400">{item.name}</h3>
                  <p className="mt-2 text-sm text-gray-400">{item.description}</p>
                </motion.div>
              </Tilt>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <p className="text-gray-400">Quer se tornar um patrocinador?</p>
          <a
            href="#contato"
            className="mt-4 inline-block rounded-lg bg-orange-500 px-6 py-3 font-bold text-black shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-400/50"
          >
            Entre em Contato
          </a>
        </motion.div>
      </div>
    </section>
  );
}
