import { useState } from "react";
import {useLoaderData, useNavigate} from "react-router-dom";
import type { Transaction } from "../models/transaction";
import {Sidebar} from "../components/dashboard_OLD/Sidebar.tsx";
import {Calendar, Menu, Search, User} from "lucide-react";
import {Input} from "../components/dashboard_OLD/input.tsx";
import SpendingGraph from "../components/dashboard_OLD/SpendingGraph.tsx";
import SpendingBreakdown from "../components/dashboard_OLD/SpendingBreakdown.tsx";
import RecentTransactionsTable from "../components/RecentTransactionsTable.tsx";

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

const DashboardPage = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const user = useLoaderData();

    const logout = async () => {
        await fetch(import.meta.env.VITE_BACKEND_API + "/auth/logout", {
            method: "POST",
            credentials: "include"
        });
        navigate("/login");
    }

    return (
        <div className="min-h-screen bg-gray-100 text-black flex">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/*Page*/}
            <div className="flex-1 p-4 md:p-8">

                {/*Head*/}
                <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {/*Mobile sidebar menu toggle*/}
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="md:hidden text-gray-600 hover:text-gray-900"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                            <h1 className="text-xl">Expense Tracker</h1>
                        </div>
                        <div className="flex items-center gap-2 md:gap-6">
                            <div className="relative hidden sm:block">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-10 w-40 md:w-64 bg-gray-50 border-0"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                    <User className="w-4 h-4" />
                                    <span className="hidden sm:inline">{user.username}</span>
                                </button>
                                <button
                                    className="p-1 ml-1 text-md text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded"
                                    title="Logout"
                                    onClick={logout}
                                    aria-label="Logout"
                                >
                                    &#x2715;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Main*/}
                <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-4">
                        <div>
                            <h2 className="text-2xl">Overview</h2>
                            <p className="text-sm text-gray-500">Today is 12 September 2022</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">Jul 2 - Today 2022</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                        <SpendingBreakdown />
                        <SpendingGraph />
                    </div>

                    <RecentTransactionsTable transactions={transactions} />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;