import { redirect } from "react-router-dom";

export const authLoader = async (): Promise<any> => {
    const res: Response = await fetch(import.meta.env.VITE_BACKEND_API + "/auth/current-user", {
        method: "GET",
        credentials: "include"
    });

    if (res.status === 401) {
        throw redirect("/login");
    }

    return await res.json();
}