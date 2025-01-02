import { HiMoon, HiSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { toggleTheme, isDarkTheme } = useDarkMode();

  function toggleDarkMode() {
    toggleTheme();
  }

  return (
    <button
      type="button"
      onClick={() => toggleDarkMode()}
      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">{isDarkTheme() ? "Dark" : "Light"} mode</span>
      {isDarkTheme() ? (
        <HiSun aria-hidden="true" className="size-6" />
      ) : (
        <HiMoon aria-hidden="true" className="size-6" />
      )}
    </button>
  );
}

export default DarkModeToggle;
