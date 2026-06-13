import { useState, useRef } from "react";
import music from "./assets/musics/until-i-found-you.mp3";

import FallingSakura from "./components/FallingSakura";
import Navbar from "./components/Navbar";

import HeroSection from "./sections/HeroSection";
import BalloonSection from "./sections/BalloonSection";
import MainMessageSection from "./sections/MainMessageSection";
import VideoSection from "./sections/VideoSection";
import GameSection from "./sections/GameSection";
import KitaSection from "./sections/KitaSection";

function App() {
  const [page, setPage] = useState("intro");

  const musicRef = useRef(new Audio(music));

  return (
    <div className="bg-[#f9e7ef] min-h-screen overflow-hidden relative">
      {page !== "mainMessage" && <FallingSakura />}

      {page === "intro" && <HeroSection onNext={() => setPage("balloon")} />}

      {page === "balloon" && (
        <BalloonSection onNext={() => setPage("mainMessage")} />
      )}

      {page === "mainMessage" && (
        <MainMessageSection
          musicRef={musicRef}
          onFinish={() => setPage("memory")}
        />
      )}

      {page === "memory" && (
        <VideoSection
          onGame={() => setPage("game")}
          onKita={() => setPage("kita")}
        />
      )}

      {page === "kita" && (
        <KitaSection
          onKenangan={() => setPage("memory")}
          onGame={() => setPage("game")}
        />
      )}

      {page === "game" && <GameSection onBack={() => setPage("memory")} />}
    </div>
  );
}

export default App;
