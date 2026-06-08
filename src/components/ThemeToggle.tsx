"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
<button
  onClick={() =>
    setTheme(theme === "dark" ? "light" : "dark")
  }
  className="
    fixed
    top-6
    right-6
    z-50
    p-3
    rounded-full
    border
    border-zinc-300
    dark:border-zinc-700
    bg-white/80
    dark:bg-zinc-900/80
    text-zinc-700
    dark:text-zinc-200
    backdrop-blur-md
    shadow-md
    hover:scale-105
    hover:border-purple-500
    hover:text-purple-600
    dark:hover:text-purple-400
    transition-all
    duration-300
  "
>
  {theme === "dark" ? (
    <Sun size={20} />
  ) : (
    <Moon size={20} />
  )}
</button>
  );
}