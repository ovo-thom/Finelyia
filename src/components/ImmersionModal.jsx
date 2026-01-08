import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ImmersionModal({ onClose }) {
  const { t } = useTranslation();
  return createPortal(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-xs sm:max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Fermer"
        >
          <RxCross2 />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-violet-700 text-center">
          {t("immersionModal.title")}
        </h2>
        <p className="mb-6 text-center text-gray-700">
          {t("immersionModal.message")}
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-violet-600 text-white px-4 py-2 rounded font-semibold hover:bg-violet-700 transition"
            onClick={onClose}
          >
            {t("authbuttons.register")}
          </Link>
          <Link
            to="/login"
            className="border border-violet-600 text-violet-700 px-4 py-2 rounded font-semibold hover:bg-violet-600 hover:text-white transition"
            onClick={onClose}
          >
            {t("authbuttons.login")}
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}
