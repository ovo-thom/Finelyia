import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";
import { useTransactions } from "../contexts/TransactionsContext";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function Modal({ onClose }) {
  const [montant, setMontant] = useState("");
  const [categorie, setCategorie] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const { addTransaction } = useTransactions();
  const [type, setType] = useState("revenu");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!montant || isNaN(Number(montant)) || Number(montant) === 0) return;
    const montantFinal =
      type === "dépense"
        ? -Math.abs(Number(montant))
        : Math.abs(Number(montant));
    const transaction = {
      montant: montantFinal,
      categorie,
      date,
      description,
      type,
    };
    addTransaction(transaction);
    toast.success(t("dashboard.modal.success"));
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 overflow-hidden">
      <div className="bg-white p-4 md:p-6 rounded-xl w-full max-w-xs sm:max-w-md  shadow-lg overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="max-h-[80vh] overflow-y-auto px-2"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl md:text-2xl font-semibold">
              {t("dashboard.modal.title")}
            </h3>
            <span
              onClick={onClose}
              className="text-xl md:text-2xl text-gray-500 cursor-pointer"
            >
              <RxCross2 className="hover:rotate-180" />
            </span>
          </div>
          <div className="my-5">
            <p className="mb-2">{t("dashboard.modal.type")}</p>
            <button
              type="button"
              onClick={() => setType("revenu")}
              className={`border-2 py-1 px-4 rounded-xl font-semibold mr-2 ${
                type === "revenu"
                  ? "bg-violet-600 text-white border-transparent"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              {t("dashboard.modal.income")}
            </button>
            <button
              type="button"
              onClick={() => setType("dépense")}
              className={`border-2 py-1 px-4 rounded-xl font-semibold ${
                type === "dépense"
                  ? "bg-violet-600 text-white border-transparent"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              {t("dashboard.modal.expense")}
            </button>
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="montant">{t("dashboard.modal.amount")}</label>
            <input
              type="text"
              id="montant"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              placeholder="ex: 45,00 €"
              className="border-2 border-gray-300 rounded-xl p-1 outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              {t("dashboard.modal.amountHelp")}
            </p>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="categorie">{t("dashboard.modal.category")}</label>
            <select
              id="categorie"
              name="categorie"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              className="border-2 border-gray-300 rounded-xl p-1 outline-none"
            >
              <option value="">{t("dashboard.modal.chooseCategory")}</option>
              <option value="Nourriture">
                {t("dashboard.modal.categories.Nourriture")}
              </option>
              <option value="Logement">
                {t("dashboard.modal.categories.Logement")}
              </option>
              <option value="Transport">
                {t("dashboard.modal.categories.Transport")}
              </option>
              <option value="Salaire">
                {t("dashboard.modal.categories.Salaire")}
              </option>
              <option value="Loisir">
                {t("dashboard.modal.categories.Loisir")}
              </option>
            </select>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="date">{t("dashboard.modal.date")}</label>
            <input
              type="date"
              value={date}
              id="date"
              onChange={(e) => setDate(e.target.value)}
              className="border-2 border-gray-300 rounded-xl p-1 outline-none text-gray-600"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="description">
              {t("dashboard.modal.description")}
            </label>
            <input
              type="text"
              value={description}
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              className="border-2 border-gray-300 rounded-xl p-1 outline-none"
            />
          </div>
          <div className="flex justify-center gap-3">
            <button
              onClick={onClose}
              className="border-2 border-gray-300 rounded-xl py-1 px-4 cursor-pointer"
            >
              {t("dashboard.modal.cancel")}
            </button>
            <button className="border-2 rounded-xl py-1 px-12 sm:px-16 md:px-20 bg-[#119560] text-gray-50 border-transparent cursor-pointer">
              {t("dashboard.modal.add")}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
