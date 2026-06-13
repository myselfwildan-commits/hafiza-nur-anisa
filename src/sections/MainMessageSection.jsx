import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import typewriterSound from "../assets/sounds/typing.mp3";

const messages = [
  `"Selamat lulus ya, sayang. 🤍

Hari ini adalah hari yang sangat spesial untuk kamu. Semua tugas, ujian, rasa lelah, dan perjuangan yang sudah kamu lewati akhirnya terbayarkan. Aku benar-benar bangga melihat sejauh ini kamu sudah melangkah."`,

  `"Kalau dipikir-pikir, udah lama yahh kita kenal, dari semenjak aku kelas 8 dan kamu kelas 9.

Selama itu juga kita saling berbalas pesan, walaupun sempat ada jarak di antara kita. Tapi sampai hari ini, kita masih bisa saling mengenal dan saling peduli."`,

  `"Aku juga mau minta maaf karena nggak bisa hadir di acara graduate kamu.

Jujur, aku ingin sekali melihat senyum bahagiamu secara langsung. Walaupun aku nggak ada di sana, percayalah kalau aku ikut bahagia dan bangga dari sini."`,

  `"Dan ada satu hal yang harus kamu ketahui: aku sayang banget sama kamu.

Makasih sudah menjadi salah satu alasan aku untuk terus berkembang dan menjadi lebih baik."`,

  `"Sekali lagi, selamat lulus, sayang.

Aku bangga sama kamu, bahagia untuk kamu, dan berharap semua impianmu bisa terwujud satu per satu.

Terus bersinar ya. Karena kamu memang pantas untuk itu. 🤍🌷"`,
];

export default function MainMessageSection({ onFinish, musicRef }) {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [show, setShow] = useState(true);

  const typingAudio = useRef(new Audio(typewriterSound));

  // Mulai lagu ketika masuk pesan terakhir
  useEffect(() => {
    if (index === 4) {
      if (musicRef?.current?.paused) {
        musicRef.current.volume = 0.15;
        musicRef.current.loop = true;

        musicRef.current.play().catch(() => {});
      }
    }
  }, [index, musicRef]);

  useEffect(() => {
    if (!show) return;

    const text = messages[index];
    let i = 0;

    typingAudio.current.volume = 0.05;
    typingAudio.current.loop = true;

    typingAudio.current.play().catch(() => {});

    const typing = setInterval(() => {
      setTyped(text.slice(0, i));
      i++;

      if (i > text.length) {
        clearInterval(typing);

        typingAudio.current.pause();
        typingAudio.current.currentTime = 0;

        setTimeout(() => {
          setShow(false);
        }, 1500);
      }
    }, 35);

    return () => {
      clearInterval(typing);
      typingAudio.current.pause();
    };
  }, [index, show]);

  useEffect(() => {
    if (show) return;

    const timer = setTimeout(() => {
      if (index === messages.length - 1) {
        onFinish();
      } else {
        setIndex((prev) => prev + 1);
        setTyped("");
        setShow(true);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [show, index, onFinish]);

  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        px-8
      "
    >
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              max-w-4xl
            "
          >
            <p
              className="
                text-pink-600
                text-xl
                md:text-3xl
                leading-relaxed
                whitespace-pre-line
              "
              style={{
                fontFamily: "serif",
              }}
            >
              {typed}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
