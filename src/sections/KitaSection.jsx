import { motion } from "framer-motion";

import Navbar from "../components/Navbar";

import wildan from "../assets/kita/wildan.png";
import nisa from "../assets/game/nisa.png";
import heart from "../assets/game/heart.png";

import photo1 from "../assets/kita/photo1.jpg";
import photo2 from "../assets/kita/photo2.jpg";
import photo3 from "../assets/kita/photo3.jpg";

export default function KitaSection({ onKenangan, onGame }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f9e7ef] px-6 py-16">
      {/* NAVBAR */}
      <Navbar onKenangan={onKenangan} onKita={() => {}} onGame={onGame} />

      {/* TOP ROW */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-10 mb-10 mt-10"
      >
        <img src={wildan} className="w-28 md:w-32" />
        <img src={heart} className="w-16 md:w-20 opacity-80" />
        <img src={nisa} className="w-[84px] md:w-32" />
      </motion.div>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold text-pink-500 mb-6 text-center"
      >
        Orang Kesayangan Wildann
      </motion.h1>

      {/* BOTTOM ROW */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-wrap justify-center"
      >
        <img src={photo2} className="w-28 md:w-40 hover:scale-105 transition" />
        <img src={photo1} className="w-28 md:w-40 hover:scale-105 transition" />
        <img src={photo3} className="w-28 md:w-40 hover:scale-105 transition" />
      </motion.div>
    </section>
  );
}
