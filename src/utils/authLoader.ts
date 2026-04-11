import { redirect } from "react-router-dom";

export const authLoader = async (): Promise<any> => {
    const response = await fetch(import.meta.env.VITE_BACKEND_API + "/auth/current-user", {
        method: "GET",
        credentials: "include"
    });

    if (response.status === 401) {
        throw redirect("/login");
    }

    return await response.json();
}