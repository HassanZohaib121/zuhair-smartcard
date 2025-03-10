export default function BgAnimation() {
  return (
    <div className="area">
      <ul className="circles">
        {Array.from({ length: 14 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
}
