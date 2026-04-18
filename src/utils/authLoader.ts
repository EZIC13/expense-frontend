import { redirect } from "react-router-dom";
import { getRequest, UnauthorizedError } from "../services/RequestService.ts";

export const authLoader = async (): Promise<{ username: string }> => {
    try {
        const user: { username: string } = await getRequest<{ username: string }>("/auth/current-user");
        return user;
    } catch (error) {
        if (error instanceof UnauthorizedError) {
            throw redirect("/login");
        }
        throw error;
    }
}