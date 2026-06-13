import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

import balloon1 from "../assets/balloons/balloon1.png";
import balloon2 from "../assets/balloons/balloon2.png";
import balloon3 from "../assets/balloons/balloon3.png";
import balloon4 from "../assets/balloons/balloon4.png";
import balloon5 from "../assets/balloons/balloon5.png";
import balloon6 from "../assets/balloons/balloon6.png";
import popSound from "../assets/sounds/pop.mp3";

export default function BalloonSection({ onNext }) {
  const [popped, setPopped] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [lastPop, setLastPop] = useState(null);

  const audioRef = useRef(new Audio(popSound));

  const balloons = [
    { id: 1, img: balloon1, top: "15%", left: "10%", rotate: -8 },
    { id: 2, img: balloon2, top: "20%", left: "75%", rotate: 8 },
    { id: 3, img: balloon3, top: "55%", left: "15%", rotate: -10 },
    { id: 4, img: balloon4, top: "60%", left: "72%", rotate: 10 },
    { id: 5, img: balloon5, top: "28%", left: "45%", rotate: -5 },
    { id: 6, img: balloon6, top: "48%", left: "52%", rotate: 6 },
  ];

  const popBalloon = (id) => {
    if (popped.includes(id)) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play();

    setLastPop(id);

    setTimeout(() => {
      setPopped((prev) => {
        const updated = [...prev, id];

        if (updated.length === balloons.length) {
          setShowConfetti(true);

          setTimeout(() => {
            setShowButton(true);
          }, 1200);
        }

        return updated;
      });

      setLastPop(null);
    }, 300);
  };

  return (
    <section
      id="balloons"
      className="
        min-h-screen
        relative
        overflow-hidden
        flex
        items-center
        justify-center
       
      "
    >
      {showConfetti && <Confetti recycle={false} numberOfPieces={350} />}

      <div className="text-center">
        <h2
          className="
            text-5xl
            font-black
            text-pink-500
            mb-3
            
          "
        >
          Pecahkan Semua Balonnya 🎈
        </h2>

        <p className="text-pink-700">
          Ada sesuatu untukmu setelah semuanya pecah...
        </p>
      </div>

      <AnimatePresence>
        {balloons
          .filter((balloon) => !popped.includes(balloon.id))
          .map((balloon) => (
            <motion.div
              key={balloon.id}
              onClick={() => popBalloon(balloon.id)}
              className="
                absolute
                cursor-pointer
                select-none
              "
              style={{
                top: balloon.top,
                left: balloon.left,
              }}
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -15, 0],
              }}
              exit={{
                scale: 1.8,
                opacity: 0,
              }}
              transition={{
                scale: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.4,
                },
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              <img
                src={balloon.img}
                alt=""
                className="
                  w-32
                  md:w-40
                  drop-shadow-2xl
                  hover:scale-105
                  transition
                "
              />

              {lastPop === balloon.id && (
                <motion.div
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1.5,
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-xl
                    font-black
                    text-red-500
                    pointer-events-none
                  "
                >
                  POP!
                </motion.div>
              )}
            </motion.div>
          ))}
      </AnimatePresence>

      {showButton && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
          onClick={onNext}
          className="
            absolute
            bottom-48
            px-10
            py-5
            rounded-full
            bg-linear-to-r
            from-pink-500
            to-rose-500
            text-white
            text-xl
            font-bold
            shadow-2xl
            hover:scale-105
            transition
          "
        >
          💌 Lihat Pesan Akuu ❤️
        </motion.button>
      )}
    </section>
  );
}
