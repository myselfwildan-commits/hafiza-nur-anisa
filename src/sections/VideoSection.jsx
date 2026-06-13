import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import couple1 from "../assets/couple/couple1.mp4";
import couple2 from "../assets/couple/couple2.mp4";
import couple3 from "../assets/couple/couple3.mp4";
import couple4 from "../assets/couple/couple4.mp4";
import couple5 from "../assets/couple/couple5.mp4";
import couple6 from "../assets/couple/couple6.mp4";
import couple7 from "../assets/couple/couple7.mp4";
import couple8 from "../assets/couple/couple8.mp4";

export default function VideoSection({ onBack, onGame }) {
  return (
    <section
      id="video"
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-6
        pt-28
        pb-20
        gap-8
      "
    >
      <Navbar
        onKenangan={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        onKita={() => {}}
        onGame={onGame}
      />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1
          className="
      text-4xl
      md:text-6xl
      font-bold
      text-pink-500
    "
          style={{
            fontFamily: "serif",
          }}
        >
          Kenangan Kita 🤍
        </h1>

        <p
          className="text-pink-400 mt-2 text-lg"
          style={{ fontFamily: "serif" }}
        >
          Beberapa momen yang tidak akan aku lupakan
        </p>
      </motion.div>

      {/* VIDEO BOX 1 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          max-w-4xl
        "
      >
        <video autoPlay muted loop playsInline className="w-full h-60 block">
          <source src={couple6} type="video/mp4" />
        </video>
      </motion.div>

      {/* VIDEO BOX 2 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          max-w-4xl
        "
      >
        <video autoPlay muted loop playsInline className="w-full h-60 block">
          <source src={couple7} type="video/mp4" />
        </video>
      </motion.div>

      {/* VIDEO BOX 3 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          max-w-4xl
        "
      >
        <video autoPlay muted loop playsInline className="w-full h-60 block">
          <source src={couple8} type="video/mp4" />
        </video>
      </motion.div>

      {/* VIDEO BOX 4 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          max-w-4xl
        "
      >
        <video autoPlay muted loop playsInline className="w-full h-60 block">
          <source src={couple1} type="video/mp4" />
        </video>
      </motion.div>

      {/* VIDEO BOX 5 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          max-w-4xl
        "
      >
        <video autoPlay muted loop playsInline className="w-full h-60 block">
          <source src={couple3} type="video/mp4" />
        </video>
      </motion.div>

      {/* VIDEO BOX 6 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          max-w-4xl
        "
      >
        <video autoPlay muted loop playsInline className="w-full h-60 block">
          <source src={couple4} type="video/mp4" />
        </video>
      </motion.div>

      {/* VIDEO BOX 7 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          max-w-4xl
        "
      >
        <video autoPlay muted loop playsInline className="w-full h-60 block">
          <source src={couple5} type="video/mp4" />
        </video>
      </motion.div>

      {/* VIDEO BOX 8 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          w-full
          max-w-4xl
        "
      >
        <video autoPlay muted loop playsInline className="w-full h-60 block">
          <source src={couple2} type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
}
