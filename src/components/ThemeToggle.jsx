import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Charger le thème au montage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Basculement entre mode clair et mode sombre
  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-primary text-white dark:bg-accent p-2 rounded-md shadow-md"
    >
      {isDark ? "☀️ Mode Clair" : "🌙 Mode Sombre"}
    </button>
  );
};

export default ThemeToggle;
