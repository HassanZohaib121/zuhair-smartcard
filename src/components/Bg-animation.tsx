'use client'

import { useTheme } from "next-themes";

export default function BgAnimation() {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"
  return (
    <div className="area">
      <ul className="circles">
        {Array.from({ length: 14 }).map((_, i) => (
          <li className={"bg-primary"} key={i}></li>
        ))}
      </ul>
    </div>
  );
}
