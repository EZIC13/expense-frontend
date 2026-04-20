import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Sidebar } from "../components/Sidebar.tsx";
import { Menu } from "lucide-react";
import EditTransaction from "../components/EditTransction.tsx";
import type { EditTransactionPageData } from "../utils/editTransactionLoader.ts";

const EditTransactionPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user, transaction } = useLoaderData() as EditTransactionPageData;

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
                            <h1 className="text-xl font-semibold text-cb-black">Edit Transaction</h1>
                        </div>
                    </header>

                    <main className="flex-1 p-6 md:p-8 lg:p-10">
                        <EditTransaction transaction={transaction} />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default EditTransactionPage;
