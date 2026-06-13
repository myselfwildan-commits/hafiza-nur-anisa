import { useEffect, useRef, useState } from "react";

import wildan from "../assets/game/wildan.png";
import nisa from "../assets/game/nisa.png";
import pipe from "../assets/game/pipe.png";
import heart from "../assets/game/heart.png";
import happy from "../assets/game/happy.mp4";

export default function GameSection({ onBack }) {
  const GAME_HEIGHT = window.innerHeight * 0.85;

  const PLAYER_SIZE = 90;
  const PIPE_WIDTH = 90;
  const GAP_HEIGHT = 220;
  const HEART_SIZE = 70;

  const SPEED = 3.5;

  // =========================
  // 🎯 ATUR JARAK DI SINI
  // =========================
  const NISA_X = 250;
  const GAP_TO_NISA = 120;
  const TARGET_X = NISA_X - GAP_TO_NISA;

  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const [score, setScore] = useState(0);

  const [playerY, setPlayerY] = useState(250);
  const [playerX, setPlayerX] = useState(70);

  const [pipeX, setPipeX] = useState(450);
  const [gapY, setGapY] = useState(180);

  const [heartTaken, setHeartTaken] = useState(false);

  // ending states
  const [meeting, setMeeting] = useState(false);
  const [kissMoment, setKissMoment] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  // refs
  const playerYRef = useRef(playerY);
  const playerXRef = useRef(playerX);
  const pipeXRef = useRef(pipeX);
  const gapYRef = useRef(gapY);
  const heartTakenRef = useRef(heartTaken);

  useEffect(() => {
    playerYRef.current = playerY;
  }, [playerY]);
  useEffect(() => {
    playerXRef.current = playerX;
  }, [playerX]);
  useEffect(() => {
    pipeXRef.current = pipeX;
  }, [pipeX]);
  useEffect(() => {
    gapYRef.current = gapY;
  }, [gapY]);
  useEffect(() => {
    heartTakenRef.current = heartTaken;
  }, [heartTaken]);

  const moveUp = () => {
    if (showVideo || showFinal) return;
    setPlayerY((p) => Math.max(20, p - 50));
  };

  const moveDown = () => {
    if (showVideo || showFinal) return;
    setPlayerY((p) => Math.min(GAME_HEIGHT - PLAYER_SIZE - 30, p + 50));
  };

  // =========================
  // GAME LOOP
  // =========================
  useEffect(() => {
    if (!started || showFinal) return;

    let animationId;

    const loop = () => {
      let nextPipeX = pipeXRef.current - SPEED;

      // =========================
      // ENDING MODE
      // =========================
      if (score >= 10) {
        if (!meeting) setMeeting(true);

        nextPipeX = pipeXRef.current;

        setPlayerX((prev) => {
          const dist = TARGET_X - prev;

          if (dist > 2) {
            return prev + Math.min(3, dist * 0.12);
          }

          if (!kissMoment) {
            setTimeout(() => {
              setKissMoment(true);
              setShowVideo(true);
            }, 1200);
          }

          return TARGET_X;
        });
      }

      // =========================
      // PIPE RESET
      // =========================
      if (score < 10 && nextPipeX < -PIPE_WIDTH) {
        nextPipeX = 450;

        const newGap = 120 + Math.random() * 220;
        setGapY(newGap);
        gapYRef.current = newGap;

        setHeartTaken(false);
        heartTakenRef.current = false;
      }

      setPipeX(nextPipeX);
      pipeXRef.current = nextPipeX;

      // =========================
      // HEART COLLISION
      // =========================
      const playerLeft = playerXRef.current;
      const playerRight = playerXRef.current + PLAYER_SIZE;
      const playerTop = playerYRef.current;
      const playerBottom = playerYRef.current + PLAYER_SIZE;

      const heartLeft = nextPipeX + 110;
      const heartRight = heartLeft + HEART_SIZE;
      const heartTop = gapYRef.current + GAP_HEIGHT / 2 - HEART_SIZE / 2;
      const heartBottom = heartTop + HEART_SIZE;

      const hitHeart =
        playerRight > heartLeft &&
        playerLeft < heartRight &&
        playerBottom > heartTop &&
        playerTop < heartBottom;

      if (hitHeart && !heartTakenRef.current && score < 10) {
        setHeartTaken(true);
        heartTakenRef.current = true;

        setScore((s) => s + 1);
      }

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, [started, score, showFinal, meeting, kissMoment, TARGET_X]);

  // =========================
  // AUTO FINAL PAGE AFTER VIDEO
  // =========================
  useEffect(() => {
    if (showVideo) {
      const timer = setTimeout(() => {
        setShowFinal(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showVideo]);

  // =========================
  // PLAYER
  // =========================
  const Player = () => {
    if (showVideo) {
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute"
          style={{
            width: 120,
            left: playerX,
            top: playerY,
          }}
        >
          <source src={happy} type="video/mp4" />
        </video>
      );
    }

    return (
      <img
        src={wildan}
        className="absolute"
        style={{
          width: PLAYER_SIZE,
          left: playerX,
          top: playerY,
        }}
      />
    );
  };

  // =========================
  // FINAL PAGE
  // =========================
  if (showFinal) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#f9e7ef] px-6">
        <div className="text-center">
          <h1 className="text-4xl font-black text-pink-500 mb-6">
            Makasi Telah Membantu Wildann!! ❤️
          </h1>

          <div className="flex items-center">
            <video autoPlay muted loop playsInline className="w-48">
              <source src={happy} type="video/mp4" />
            </video>

            <img src={nisa} className="w-32" />
          </div>

          <button
            onClick={onBack}
            className="w-full mt-10 py-4 bg-pink-500 text-white rounded-full font-bold"
          >
            Kembali
          </button>
        </div>
      </section>
    );
  }

  // =========================
  // START SCREEN
  // =========================
  if (!started) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#f9e7ef] px-6">
        <div className="text-center">
          <h1 className="text-4xl font-black text-pink-500 mb-6">
            Bantu Wildan Menemukan Cintanyaa!! ❤️
          </h1>

          <button
            onClick={() => setStarted(true)}
            className="px-10 py-4 bg-pink-500 text-white rounded-full font-bold text-xl"
          >
            Mulai Game
          </button>
        </div>
      </section>
    );
  }

  // =========================
  // GAME SCREEN
  // =========================
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f9e7ef] px-4">
      <div className="relative w-full max-w-105 h-[85vh] overflow-hidden rounded-3xl border-2 border-pink-300 bg-[#f9e7ef]">
        {/* SCORE */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-5 py-2 rounded-full font-bold">
          ❤️ {score}/10
        </div>

        {/* PIPE TOP */}
        <img
          src={pipe}
          className="absolute"
          style={{
            left: pipeX,
            top: 0,
            width: PIPE_WIDTH,
            height: gapY,
            transform: "scaleY(-1)",
            transformOrigin: "center",
          }}
        />

        {/* PIPE BOTTOM */}
        <img
          src={pipe}
          className="absolute"
          style={{
            left: pipeX,
            top: gapY + GAP_HEIGHT,
            width: PIPE_WIDTH,
            height: GAME_HEIGHT,
          }}
        />

        {/* HEART */}
        {!heartTaken && score < 10 && (
          <img
            src={heart}
            className="absolute"
            style={{
              width: HEART_SIZE,
              left: pipeX + 110,
              top: gapY + GAP_HEIGHT / 2 - HEART_SIZE / 2,
            }}
          />
        )}

        {/* NISA */}
        {meeting && (
          <img
            src={nisa}
            className="absolute"
            style={{
              width: 90,
              left: NISA_X,
              top: playerY,
            }}
          />
        )}

        {/* PLAYER */}
        <Player />

        {/* CONTROLS (HILANG SAAT VIDEO / FINAL) */}
        {!showVideo && !showFinal && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={moveUp}
              className="w-20 h-20 bg-white rounded-2xl text-4xl shadow-xl"
            >
              ↑
            </button>

            <button
              onClick={moveDown}
              className="w-20 h-20 bg-white rounded-2xl text-4xl shadow-xl"
            >
              ↓
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
