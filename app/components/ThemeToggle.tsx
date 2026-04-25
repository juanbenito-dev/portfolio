"use client";

import { useTheme } from "next-themes";
import Moon from "@/components/icons/Moon";
import Sun from "@/components/icons/Sun";

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
      onClick={() => document.startViewTransition(handleClick)}
    >
      {isThemeDark ? <Moon /> : <Sun />}
    </button>
  );
}
