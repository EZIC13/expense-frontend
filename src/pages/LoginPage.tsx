import '../tailwind.css'
import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
            <div className="flex justify-center items-center mb-6">
                <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className={`px-4 py-2 rounded-l-md text-sm font-medium transition-colors duration-200 ${
                        isLogin
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                >
                    Login
                </button>
                <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className={`px-4 py-2 rounded-r-md text-sm font-medium transition-colors duration-200 ${
                        !isLogin
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                >
                    Register
                </button>
            </div>

            {isLogin ? <Login/> : <Register/>}

        </div>
    );
}

export default LoginPage;