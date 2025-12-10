import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import TransactionsPage from "./TransactionsPage";
import Paramètres from "./components/Settings";
import { Toaster } from "react-hot-toast";
import Header from "./components/Dashboard/Header";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { useLocation } from "react-router-dom";
import AuthProvider from "./components/Auth/AuthProvider";
import ThemeProvider from "./contexts/ThemeProvider";
import { TransactionsProvider } from "./contexts/TransactionsContext";

function App() {
  const location = useLocation();
  const hideHeaderOn = ["/login", "/register"];
  return (
    <AuthProvider>
      <TransactionsProvider>
        <ThemeProvider>
          <div className="flex min-h-screen">
            <Toaster />
            <Sidebar />
            <div
              className={`flex-1 dark:bg-gray-900 ${
                hideHeaderOn.includes(location.pathname) ? "" : "p-3"
              }`}
            >
              {!hideHeaderOn.includes(location.pathname) && <Header />}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transactions" element={<TransactionsPage />} />
                <Route path="/parametres" element={<Paramètres />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </div>
        </ThemeProvider>
      </TransactionsProvider>
    </AuthProvider>
  );
}

export default App;
