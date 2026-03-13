import { Search, User, Calendar, Menu } from "lucide-react";
import { Input } from "../components/dashboard_OLD/input";
import { Sidebar } from "../components/dashboard_OLD/Sidebar";
import { IncomeChart } from "../components/dashboard_OLD/IncomeChart";
import { SpentBreakdown } from "../components/dashboard_OLD/SpentBreakdown";
import { Cards } from "../components/dashboard_OLD/Cards";
import { CompareChart } from "../components/dashboard_OLD/CompareChart";
import { Goals } from "../components/dashboard_OLD/Goals";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const DashboardPage_OLD = () => {
    // const navigate = useNavigate();
    // const user = useLoaderData();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    // const logout = async () => {
    //     await fetch(import.meta.env.VITE_BACKEND_API + "/auth/logout", {
    //         method: "POST",
    //         credentials: "include"
    //     });
    //     navigate("/login");
    // }

    return (
        <div className="min-h-screen bg-gray-100 text-black flex">
            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-8">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="md:hidden text-gray-600 hover:text-gray-900"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                            <h1 className="text-xl">FinLit</h1>
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
                            <button className="hidden md:block text-gray-600 hover:text-gray-900">Settings</button>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                    <User className="w-4 h-4" />
                                    <span className="hidden sm:inline">USERNAME</span>
                                </button>
                                <button
                                    className="p-1 ml-1 text-xs text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded"
                                    title="Logout"
                                    // onClick={logout}
                                    aria-label="Logout"
                                >
                                    &#x2715;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overview Section */}
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

                    {/* Top Row - Income, Spent, Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                        <IncomeChart />
                        <SpentBreakdown />
                        <Cards />
                    </div>

                    {/* Bottom Row - Compare Chart and Goals */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                        <div className="lg:col-span-2">
                            <CompareChart />
                        </div>
                        <Goals />
                    </div>
                </div>

                {/* Footer Message */}
                <div className="mt-4 md:mt-6 bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                    You've used 10 times this month to manage your money. Great job!
                </div>
            </div>
        </div>
    );
};

export default DashboardPage_OLD;