import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useTransactions } from "../../contexts/TransactionsContext";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { useTranslation } from "react-i18next";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

export default function CategoryChart() {
  const { user } = useContext(AuthContext);
  const { transactions } = useTransactions();
    const { t } = useTranslation();

  const displayTransactions = user ? transactions : [];

  const uniqueCategories = [
    ...new Set(displayTransactions.map((tx) => tx.categorie)),
  ];
  const sums = uniqueCategories.map((cat) =>
    displayTransactions
      .filter((tx) => tx.categorie === cat)
      .reduce((sum, tx) => sum + Math.abs(Number(tx.montant)), 0)
  );

  const categoriesColors = {
    Salaire: "#4b2bc2", // bleu
    Logement: "#f7b731", // jaune
    Nourriture: "#2ecc71", // vert
    Transport: "#f76e11", // orange
    Loisir: "#7e21c9", // mauve
  };
  const backgroundColors = uniqueCategories.map(
    (cat) => categoriesColors[cat] || "#e0e0e0"
  );

  const isEmpty = displayTransactions.length === 0;
  const data = isEmpty
    ? {
        labels: ["Aucune donnée"],
        datasets: [
          {
            label: "Montant par catégorie",
            data: [1],
            backgroundColor: ["#e0e0e0"],
            borderWidth: 0,
          },
        ],
      }
    : {
        labels: uniqueCategories,
        datasets: [
          {
            label: "Montant par catégorie",
            data: sums,
            backgroundColor: backgroundColors,
            borderWidth: 0,
          },
        ],
      };

  return (
    <div className="p-0md:p-5 flex flex-col w-full max-w-md mx-auto">
      <h2 className="font-semibold mb-4 text-left lg:text-lg dark:text-white">
        {t("dashboard.categoryChart.title")}
      </h2>
      <div className="flex justify-center items-center w-full mt-2">
        <div className="w-36 h-36 lg:w-56 lg:h-56 2xl:w-80 2xl:h-80">
          <Pie data={data} options={options} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4 w-full overflow-x-auto dark:text-white">
        {data.labels.map((label, i) => (
          <div key={label} className="flex items-center gap-2 2xl:mt-5">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ background: data.datasets[0].backgroundColor[i] }}
            ></span>
            <span className="text-xs 2xl:text-sm">{t(`dashboard.modal.categories.${label}`)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
