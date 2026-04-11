import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Sidebar } from "../components/Sidebar.tsx";
import { Menu } from "lucide-react";
import {dummyTransactions} from "../models/transaction.ts";
import RecentTransactionsTable from "../components/RecentTransactionsTable.tsx";
import SpendingBreakdown from "../components/SpendingBreakdown.tsx";
import SpendingGraph from "../components/SpendingGraph.tsx";

const DashboardPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const user = useLoaderData() as { username: string };

    return (
        <div className="min-h-screen bg-white">
            <div className="flex min-h-screen">
                <Sidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    userName={user.username}
                />

                <div className="flex min-w-0 flex-1 flex-col bg-white">
                    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-5 md:hidden">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="text-slate-500 transition-colors hover:text-cb-black"
                                aria-label="Open sidebar"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                            <h1 className="text-xl font-semibold text-cb-black">Dashboard</h1>
                        </div>
                    </header>

                    <main className="flex-1 p-6 md:p-8 lg:p-10">
                        {/*<div className="h-full min-h-[70vh] rounded-4xl border border-dashed border-slate-300 bg-[repeating-linear-gradient(-45deg,rgba(148,163,184,0.08)_0px,rgba(148,163,184,0.08)_2px,transparent_2px,transparent_12px)] md:min-h-[calc(100vh-5rem)]" />*/}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                            <SpendingBreakdown />
                            <SpendingGraph />
                        </div>
                        <RecentTransactionsTable transactions={dummyTransactions} />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
