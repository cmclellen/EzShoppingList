/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

interface DarkModeProviderProps {
  children: ReactNode;
}

type ThemeType = "light" | "dark";

interface DarkModeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  isDarkTheme: () => boolean;
  //setTheme: Dispatch<SetStateAction<ThemeType>>;
}

const DarkModeContext = createContext<DarkModeContextType>({
  theme: "light",
  toggleTheme: () => {},
  isDarkTheme: () => false,
});

function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [theme, setTheme] = useLocalStorageState("light", "theme");

  function toggleTheme() {
    setTheme((c: string) => (c === "dark" ? "light" : "dark"));
  }

  function isDarkTheme() {
    return theme === "dark";
  }

  useEffect(
    function () {
      document.documentElement.classList.toggle("dark", theme === "dark");
    },
    [theme]
  );

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === null)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
