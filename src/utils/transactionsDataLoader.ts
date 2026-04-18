import { redirect } from "react-router-dom";
import type { Transaction } from "../models/transaction.ts";

export interface TransactionsPageData {
    transactions: Transaction[];
    user: { username: string };
}

export const transactionDataLoader = async (): Promise<TransactionsPageData> => {
    const [userRes, transactionsRes] = await Promise.all([
        fetch(import.meta.env.VITE_BACKEND_API + "/auth/current-user", {
            method: "GET",
            credentials: "include"
        }),
        fetch(import.meta.env.VITE_BACKEND_API + "/transactions", {
            method: "GET",
            credentials: "include"
        })
    ]);

    if (userRes.status === 401 || transactionsRes.status === 401) {
        throw redirect("/login");
    }

    return {
        user: await userRes.json(),
        transactions: await transactionsRes.json()
    };
};
