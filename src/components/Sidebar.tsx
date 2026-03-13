import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const currentUser = "User"; // placeholder for now

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`
    fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50
    transform translate-x-0
    transition-transform duration-300 ease-in-out
  `}
            >
                <div className="p-4 text-xl font-bold border-b border-gray-700">
                    {currentUser}
                </div>
                <ul className="mt-4">
                    <li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer">Logout</li>
                </ul>
            </div>

            {/* Main content */}
            <div className="flex-1 ml-64 p-4">
                <button
                    className="p-2 mb-4 bg-gray-200 rounded-md md:hidden"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <RxHamburgerMenu size={24} />
                </button>
                <h1 className="text-2xl font-bold">Main Content</h1>
                <p>Your dashboard goes here...</p>
            </div>
        </div>
    );
};

export default Sidebar;