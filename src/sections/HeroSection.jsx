import { motion } from "framer-motion";

export default function HeroSection({ onNext }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[18px] text-pink-700"
        >
          Untuk
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-2xl md:text-6xl font-bold text-pink-500"
        >
          Pacarku Tersayang
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-4xl md:text-7xl font-black text-pink-700"
        >
          Hafiza Nur Anisa
        </motion.h1>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          onClick={onNext}
          className="mt-5 px-8 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600"
        >
          Klik Dehh
        </motion.button>
      </div>
    </section>
  );
}
