import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { FaCalendarAlt, FaTrophy, FaVideo } from 'react-icons/fa'
import { ReactNode } from 'react'
import { IEventType } from '@/types';
import { events } from '@/utils/mocks';

const iconeType: Record<IEventType, ReactNode> = {
  Treino: <FaCalendarAlt className="text-orange-400 text-2xl" />,
  Campeonato: <FaTrophy className="text-yellow-400 text-2xl" />,
  Live: <FaVideo className="text-pink-400 text-2xl" />,
};

export default function Calendar() {
  return (
    <section id="calendar" className="py-24 px-6 bg-gradient-to-br from-black to-gray-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-16"
        >
          Calendário de Competições
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {events.map((event, idx) => (
            <Tilt key={idx} glareEnable glareMaxOpacity={0.2} tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
                className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-orange-300/50 border border-orange-300/10 text-left min-h-[200px] flex flex-col justify-between"
              >
                <div className="flex items-center gap-4 mb-4">
                  {iconeType[event.type]}
                  <h3 className="text-xl font-bold text-orange-400">{event.title}</h3>
                </div>
                <div className="text-gray-300 space-y-1">
                  <p>
                    <span className="font-semibold">📅 Data:</span> {event.data}
                  </p>
                  <p>
                    <span className="font-semibold">⏰ Horário:</span> {event.hours}
                  </p>
                  <p className="italic text-sm text-gray-400">Tipo: {event.type}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}
