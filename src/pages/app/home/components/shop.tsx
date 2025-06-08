import { motion } from 'framer-motion'

export function Shop() {
  return (
    <section
      id="shop"
      className="bg-gradient-to-b from-gray-900 to-black py-20 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Imagem promocional da loja */}
        <motion.img
          src="https://yampi.com.br/assets/images/illustrations/store-front.svg"
          alt="Loja Serpentz"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 rounded-xl shadow-lg shadow-orange-400/10"
        />

        {/* Texto + botão */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
            Loja Oficial SERPENTZ
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Estilo, atitude e performance. Conheça nossos produtos exclusivos, feitos para quem vive o jogo dentro e fora das telas.
          </p>

          <a
            href="https://serpentz.yampi.com.br" // insira aqui a URL exata da sua loja
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-black font-bold py-3 px-6 rounded-xl hover:bg-orange-600 transition-all shadow-md hover:shadow-orange-400/30"
          >
            Acessar Loja
          </a>
        </motion.div>
      </div>
    </section>
  )
}
