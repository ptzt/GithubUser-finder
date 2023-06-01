"use client";
import React, { useEffect, useState } from "react";
import MoonIcon from "@/components/icons/MoonIcon";
import SunIcon from "@/components/icons/SunIcon";
import DarkModeComponent from "./DarkModeToggle";

const initialThemeState = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as "light" | "dark";
    }
    return window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "dark"
      : "light";
  }
  return "dark";
};

const Navbar = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(initialThemeState);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!hasMounted) {
    return <></>;
  }

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="mb-10 flex items-center space-x-2">
      <a
        href=""
        className="flex-grow text-3xl font-bold text-blue-950 dark:text-white"
      >
        <h1>devfinder</h1>
      </a>

      <DarkModeComponent
        darkMode={theme === "dark"}
        toggleDarkMode={handleTheme}
      />
    </header>
  );
};

export default Navbar;
