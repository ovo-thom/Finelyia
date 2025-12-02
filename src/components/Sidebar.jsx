import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TbSettings } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <aside
      role="navigation"
      aria-label="Main navigation"
      className="min-h-screen w-20 md:w-72 bg-gradient-to-b from-[#4b2bc2] via-[#7e21c9] to-[#9f1dd9]"
    >
      <div className="w-3/4 mx-auto mt-5">
        <h1
          className="hidden md:block text-2xl font-semibold tracking-wide text-violet-100"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Finelyia
        </h1>
        <p className="hidden md:block text-violet-200 md:text-sm mt-2 font-light italic">
          {t("sidebar.text")}
        </p>
      </div>
      <ul className="text-gray-100 w-3/4 mx-auto py-12">
        <li
          className={`flex items-center px-4 rounded-xl mb-5 py-2 cursor-pointer ${
            location.pathname === "/"
              ? "bg-white/20 font-semibold"
              : "hover:bg-white/10"
          }`}
        >
          <Link
            to="/"
            title="Tableau de bord"
            className="flex items-center py-2"
          >
            <span className="mr-3">
              <MdSpaceDashboard className="text-2xl md:text-lg" />
            </span>
            <span className="hidden md:inline">{t("sidebar.dashboard")}</span>
          </Link>
        </li>
        <li
          className={`flex items-center px-4 rounded-xl mb-5 py-2 cursor-pointer ${
            location.pathname === "/transactions"
              ? "bg-white/20 font-semibold"
              : "hover:bg-white/10"
          }`}
        >
          <Link
            to="/transactions"
            title="Transactions"
            className="flex items-center py-2"
          >
            <span className="mr-3">
              <HiOutlineDocumentText className="text-2xl md:text-lg" />
            </span>
            <span className="hidden md:inline">
              {t("sidebar.transactions")}
            </span>
          </Link>
        </li>
        <li
          className={`flex items-center px-4 rounded-xl mb-5 py-2 cursor-pointer ${
            location.pathname === "/parametres"
              ? "bg-white/20 font-semibold"
              : "hover:bg-white/10"
          }`}
        >
          <Link
            to="/parametres"
            title="Paramètres"
            className="flex items-center py-2"
          >
            <span className="mr-3">
              <TbSettings className="text-2xl md:text-lg" />
            </span>
            <span className="hidden md:inline">{t("sidebar.settings")}</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
