import AddTransactionButton from "./components/AddTransactionButton";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import TransactionsPage from "./TransactionsPage";
import Paramètres from "./components/Settings";
import { Toaster } from "react-hot-toast";
import Header from "./components/Dashboard/Header";

function App() {
  return (
    <div className="flex min-h-screen bg-[#fafbfe]">
      <Toaster />
      <Sidebar />
      <div className="flex-1 p-1 lg:p-8">
        <Header />
        <div className="flex justify-end mb-8">
          <AddTransactionButton />
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/parametres" element={<Paramètres />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
