import '../tailwind.css'
import { useState } from "react";
import { toast } from "react-hot-toast";
import toastOptions from "../utils/toastOptions.ts";
import { type NavigateFunction, useNavigate } from "react-router-dom";
import type { AuthRequest } from "../models/AuthRequest.ts";
import { ConflictError, postRequest } from "../services/RequestService.ts";

const RegisterPage = () => {
    const navigate: NavigateFunction = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const toastId: string = toast.loading("Signing up...", toastOptions);

        const registerRequest: AuthRequest = {
            "username": username,
            "password": password
        }

        try {
            await postRequest<AuthRequest>("/auth/create-user", registerRequest);
        } catch (error) {
            if (error instanceof ConflictError) {
                toast.error("Username already exists", { id: toastId, ...toastOptions });
                return;
            }
            toast.error("Unable to register", { id: toastId, ...toastOptions });
            return;
        }

        toast.success("Success!", { id: toastId, ...toastOptions });
        navigate("/dashboard");
        return;
    };

    return (
        <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-white">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Site Logo"/>
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-cb-black">Register a new account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>

                    <div>
                        <label className="block text-sm font-medium text-cb-black">Username</label>
                        <div className="mt-2">
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-cb-black outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cb-blue sm:text-sm"/>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-cb-black">Password</label>
                        <div className="mt-2">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-cb-black outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cb-blue sm:text-sm"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-cb-blue px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-cb-blue-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cb-blue">Sign Up</button>
                    </div>
                </form>
            </div>

            <p className="mt-10 text-center text-sm text-gray-400">
                Already have an account?{" "}
                <a href="/login" className="font-semibold text-cb-blue hover:text-cb-blue-hover">Sign In</a>
            </p>

        </div>
    );
}

export default RegisterPage;