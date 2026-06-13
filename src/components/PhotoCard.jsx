export default function PhotoCard({ src, className = "" }) {
  return (
    <img
      src={src}
      alt=""
      className={`
        object-cover
        drop-shadow-2xl
        select-none
        transition-all
        duration-300
        hover:scale-105
        ${className}
      `}
    />
  );
}
