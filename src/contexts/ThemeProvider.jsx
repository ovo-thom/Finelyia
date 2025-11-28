import { useState, useEffect } from "react";
import { AppThemeContext } from "./MyThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
 console.log("EFFECT RUNNING, theme =", theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <AppThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
}
