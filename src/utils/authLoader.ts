import {redirect} from "react-router-dom";

export const authLoader = async () => {
    const response = await fetch(import.meta.env.VITE_BACKEND_API + "/auth2/current-user", {
        method: "GET",
        credentials: "include"
    });

    if (response.status === 401) {
        console.log("Not logged in");
        throw redirect("/login");
    }

    return await response.json();
}