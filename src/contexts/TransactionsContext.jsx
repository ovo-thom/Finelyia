import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/Auth/AuthContext";

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
  const auth = useContext(AuthContext);
  const user = auth && auth.user ? auth.user : null;
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (user) {
      const key = `transactions_${user.email}`;
      const saved = JSON.parse(localStorage.getItem(key)) || [];
      setTransactions(saved);
    } else {
      setTransactions([]);
    }
  }, [user]);

  const addTransaction = (transaction) => {
    if (!user) return;
    const key = `transactions_${user.email}`;
    const newTransaction = {
      id: transaction.id ?? Date.now().toString(),
      ...transaction,
    };
    const updated = [newTransaction, ...transactions];
    setTransactions(updated);
    localStorage.setItem(key, JSON.stringify(updated));
  };

  const deleteTransaction = (id) => {
    if (!user) return;
    const key = `transactions_${user.email}`;
    const updated = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updated);
    localStorage.setItem(key, JSON.stringify(updated));
  };

  return (
    <TransactionsContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}

export default TransactionsContext;
