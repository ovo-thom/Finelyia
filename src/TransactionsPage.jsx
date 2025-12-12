import StatCard from "./components/Dashboard/StatCard";
import TransactionsTable from "./components/Dashboard/TransactionsTable";
import { useTransactions } from "../src/contexts/TransactionsContext";
import { toast } from "react-hot-toast";
import AddTransactionButton from "./components/AddTransactionButton";
import { useTranslation } from "react-i18next";

export default function TransactionsPage() {
  const { transactions } = useTransactions();
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const lastTransaction =
    transactions && transactions.length > 0 ? transactions[0] : null;
  const lastDate = lastTransaction
    ? new Date(lastTransaction.date).toLocaleDateString(i18n.language, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : t("dashboard.transactionsTable.noTransaction");

  const amount = lastTransaction ? lastTransaction.montant : 0;

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-end mb-6">
        <AddTransactionButton />
      </div>
      <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-6 dark:text-white">
        {t("transactionsPage.title")}
      </h2>
      <div className="bg-white rounded-xl border-2 border-gray-300 p-4 dark:bg-gray-800 dark:text-white">
        <TransactionsTable
          showDelete={true}
          onDelete={() => toast.error("Transaction supprimée !")}
        />
      </div>
      <div className="w-full rounded-xl mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl border-2 border-gray-300 ">
          <StatCard
            title={t("transactionsPage.lastTransactions")}
            value={lastDate}
          />
        </div>
        <div className="bg-white rounded-xl border-2 border-gray-300 ">
          <StatCard
            title={t("transactionsPage.amount")}
            value={amount.toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
            })}
          />
        </div>
      </div>
    </div>
  );
}
