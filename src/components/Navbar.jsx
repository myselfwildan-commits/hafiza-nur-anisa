export default function Navbar({ onKenangan, onKita, onGame }) {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/80
        backdrop-blur-md
        border-b
        border-pink-200
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        <h1
          className="
            text-sm
            md:text-2xl
            font-bold
            text-pink-500
          "
        >
          Hafiza Nur Anisa
        </h1>

        <div className="flex gap-6 text-pink-500 font-medium">
          <button onClick={onKenangan}>Kenangan</button>

          <button onClick={onKita}>Kita</button>

          <button onClick={onGame}>Game</button>
        </div>
      </div>
    </nav>
  );
}
