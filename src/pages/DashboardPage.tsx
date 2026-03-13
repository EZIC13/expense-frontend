import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import type { Transaction } from "../models/transaction";

const DashboardPage = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const transactions: Transaction[] = [
        {
            transaction_id: "1",
            user_id: "1",
            amount: 100,
            merchant: "Amazon",
            type: "income",
            category: "Groceries",
            notes: "Groceries",
            date: "2026-01-01",
        },
        {
            transaction_id: "2",
            user_id: "1",
            amount: 50,
            merchant: "Starbucks",
            type: "expense",
            category: "Coffee",
            notes: "Coffee",
            date: "2026-01-02",
        },
    ];

    const logout = async () => {
        await fetch(import.meta.env.VITE_BACKEND_API + "/auth/logout", {
            method: "POST",
            credentials: "include"
        });
        navigate("/login");
    }

    const totalIncome = transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    const cashFlow = totalIncome - totalExpenses;

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <div
                className={`
                  fixed inset-y-0 left-0 w-64 bg-gray-800 text-white z-40
                  transform transition-transform duration-300 ease-in-out
                  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                  md:translate-x-0 md:relative md:block min-h-screen
                `}
            >
                <div className="p-4 text-xl font-bold border-b border-gray-700 flex justify-between items-center">
                    <span>User</span>

                    {/* Close button (mobile only) */}
                    {isSidebarOpen && (
                        <button
                            className="md:hidden text-gray-400 hover:text-white"
                            onClick={() => setIsSidebarOpen(false)}
                            aria-label="Close sidebar"
                        >
                            ✕
                        </button>
                    )}
                </div>
                <ul className="mt-4">
                    <li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
                    <li
                        className="p-4 hover:bg-gray-700 cursor-pointer"
                        onClick={logout}
                    >
                        Logout
                    </li>
                </ul>
            </div>

            {/* mobile sidebar overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* mobile hamburger menu button */}
                {!isSidebarOpen && (
                    <div className="md:hidden absolute top-4 left-8 z-50">
                        <button
                            className="p-2 bg-gray-700 rounded-md w-10 h-10 flex items-center justify-center"
                            onClick={() => setIsSidebarOpen(true)}
                            aria-label="Open sidebar"
                        >
                            <RxHamburgerMenu size={24} />
                        </button>
                    </div>
                )}

                <div className="p-8 pt-20 md:pt-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-3xl font-semibold">Dashboard</h1>
                    </div>

                    {/* Top Grid */}
                    <div className="mb-8 flex flex-col md:flex-row gap-6">
                        {/* Left cards */}
                        <div className="flex flex-col gap-4 md:w-1/2">
                            <div className="flex items-center justify-between rounded-lg bg-gray-800 p-4 shadow-md">
                                <h3 className="text-md font-medium text-gray-300">Total Income</h3>
                                <p className="text-2xl font-semibold text-green-400">${totalIncome.toLocaleString()}</p>
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-gray-800 p-4 shadow-md">
                                <h3 className="text-md font-medium text-gray-300">Total Expense</h3>
                                <p className="text-2xl font-semibold text-red-400">${totalExpenses.toLocaleString()}</p>
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-gray-800 p-4 shadow-md">
                                <h3 className="text-md font-medium text-gray-300">Cash Flow</h3>
                                <p
                                    className={`text-2xl font-semibold ${
                                        cashFlow >= 0 ? "text-green-400" : "text-red-400"
                                    }`}
                                >
                                    {cashFlow >= 0 ? "+" : "-"}${Math.abs(cashFlow).toLocaleString()}
                                </p>
                            </div>
                        </div>

                        {/* graph placeholder */}
                        <div className="flex-1 rounded-lg bg-gray-800 p-4 shadow-md">
                            <h3 className="text-md font-medium text-gray-300 mb-2">Spending Graph</h3>
                            <p className="text-gray-400">Graph</p>
                        </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="rounded-lg bg-gray-800 p-4 shadow-md">
                        <h3 className="text-md font-medium text-gray-300 mb-2">Recent Transactions</h3>
                        {transactions.map((t) => (
                            <div
                                key={t.transaction_id}
                                className="flex justify-between py-2 border-b border-gray-700 last:border-b-0"
                            >
                                <span>{t.merchant}</span>
                                <span className={t.type === "income" ? "text-green-400" : "text-red-400"}>
                                    {t.type === "income" ? "+" : "-"}${t.amount}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;