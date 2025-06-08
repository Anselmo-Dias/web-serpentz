import { feedbacks } from '@/utils/mocks'
import { motion } from 'framer-motion'

export default function Feedback() {
  return (
    <section id="feedbacks" className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-16 tracking-tight"
        >
          O que dizem sobre a SERPENTZ
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {feedbacks.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-800 hover:border-orange-400 hover:shadow-[0_0_20px_#22c55e77] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="rounded-full object-cover w-full h-full border-2 border-orange-500"
                  />
                  <span className="absolute inset-0 animate-ping rounded-full border-2 border-orange-400 opacity-10"></span>
                </div>
                <p className="font-semibold text-orange-300">{item.name}</p>
              </div>
              <p className="text-gray-300 italic leading-relaxed">"{item.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
