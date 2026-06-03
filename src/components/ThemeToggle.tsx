"use client";

import { MoonHalfRight5Solid, Sun1Solid } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isThemeDark = theme === "dark" || resolvedTheme === "dark";

  function handleClick() {
    const newTheme = isThemeDark ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => document.startViewTransition(handleClick)}
      className="cursor-pointer transition-transform duration-300 hover:scale-110"
    >
      <Lineicons
        icon={isThemeDark ? MoonHalfRight5Solid : Sun1Solid}
        size={20}
      />
    </button>
  );
}
