"use client";
import React, { useEffect, useState } from "react";
import MoonIcon from "@/components/icons/MoonIcon";
import SunIcon from "@/components/icons/SunIcon";

const initialThemeState = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme") as "light" | "dark";
  }
  return window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";
};

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">(initialThemeState);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="mb-10 flex items-center space-x-2">
      <h1 className="flex-grow text-3xl font-bold text-blue-950 dark:text-white">
        devfinder
      </h1>
      <span className="uppercase text-blue-950 dark:text-white">
        {theme === "light" ? "dark" : "light"}
      </span>
      <button onClick={handleTheme}>
        {theme === "light" ? (
          <MoonIcon height={25} className="fill-blue-950 dark:fill-white" />
        ) : (
          <SunIcon height={25} className="fill-blue-950 dark:fill-white" />
        )}
      </button>
    </header>
  );
};

export default Navbar;
