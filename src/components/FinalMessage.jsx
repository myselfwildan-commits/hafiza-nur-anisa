import { motion } from "framer-motion";

export default function FinalMessage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="text-center"
    >
      <div
        className="
          flex
          items-center
          justify-center
          gap-6
          mb-10
        "
      >
        <div
          className="
            w-28
            h-28
            rounded-full
            bg-pink-200
            flex
            items-center
            justify-center
          "
        >
          FOTO KAMU
        </div>

        <div className="text-5xl">❤️</div>

        <div
          className="
            w-28
            h-28
            rounded-full
            bg-pink-200
            flex
            items-center
            justify-center
          "
        >
          FOTO DIA
        </div>
      </div>

      <div
        className="
          bg-white
          p-8
          rounded-3xl
          shadow-xl
          max-w-md
          mx-auto
        "
      >
        TULIS PESAN TERAKHIRMU DI SINI
      </div>
    </motion.div>
  );
}
