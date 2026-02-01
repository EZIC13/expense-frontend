import { useState } from "react";
import { toast } from "react-hot-toast";
import { toastOptions } from "../../utils/toastOptions.ts";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const toastId: string = toast.loading("Signing in...", toastOptions);

        const res = await fetch(import.meta.env.VITE_BACKEND_API + "/auth2/login", {
            method: "POST",
            body: JSON.stringify({
                "username": username,
                "password": password
            }),
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });

        if (!res.ok) {
            toast.error("Invalid Credentials", { id: toastId, ...toastOptions });
            return;
        }

        toast.success("Success!", { id: toastId, ...toastOptions });
        navigate("/dashboard");
    };

    return (
        <div>
            {/* Logo Area */}
            {/*<div className="sm:mx-auto sm:w-full sm:max-w-sm">*/}
            {/*    <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Site Logo"/>*/}
            {/*    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">Login</h2>*/}
            {/*</div>*/}

            {/* Form Area */}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-white">Username</label>
                        <div className="mt-2">
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" required className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline-1 outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"/>
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium text-white">Password</label>
                            {/* Forgot Password */}
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline-1 outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>

                </form>

                {/*<p className="mt-10 text-center text-sm text-gray-400">*/}
                {/*    Don&apos;t have an account?{" "}*/}
                {/*    <a href="/register" className="font-semibold text-indigo-400 hover:text-indigo-300">Register</a>*/}
                {/*</p>*/}

            </div>
        </div>
    );
}

export default Login;