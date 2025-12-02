import { useContext, useState } from "react";
import { AppThemeContext } from "../contexts/MyThemeContext";
import i18n from "../i18n";

export default function Settings() {
  const { theme, setTheme } = useContext(AppThemeContext);
  const [currentLang, setCurrentLang] = useState("fr");

  return (
    <div className="flex flex-col max-w-md w-full mx-auto">
      <h2 className="font-semibold text-3xl text-center mb-4 dark:text-white">
        Paramètres
      </h2>
      <div className="border-2 border-gray-300 rounded-xl bg-white dark:bg-gray-800 dark:text-gray-100 p-4">
        <div className="flex items-center justify-between gap-3 border-b border-b-gray-300 py-3">
          <span className="text-lg font-semibold">Mode sombre</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-checked:bg-violet-600 rounded-full peer peer-focus:ring-2 peer-focus:ring-violet-500 transition-all"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>

        <div className="flex items-center justify-between gap-3 border-b border-b-gray-300 py-3">
          <label className="relative text-lg font-semibold inline-flex items-center cursor-pointer">
            Langues
          </label>
          <select
            value={currentLang}
            onChange={(e) => {
              setCurrentLang(e.target.value);
              i18n.changeLanguage(e.target.value);
            }}
            className="outline-none p-2 border-2 border-gray-300 rounded-xl focus:border-2 focus:border-purple-600 dark:bg-gray-800"
          >
            <option value="fr">Français</option>
            <option value="en">Anglais</option>
          </select>
        </div>
      </div>
    </div>
  );
}
3;
