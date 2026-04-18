import { redirect } from "react-router-dom";
import type { Transaction } from "../models/transaction.ts";
import { getRequest, UnauthorizedError } from "../services/RequestService.ts";

export interface TransactionsPageData {
    transactions: Transaction[];
    user: { username: string };
}

export const transactionDataLoader = async (): Promise<TransactionsPageData> => {
    try {
        const [user, transactions] = await Promise.all([
            getRequest<{ username: string }>("/auth/current-user"),
            getRequest<Transaction[]>("/transactions")
        ]);
        return { user, transactions };
    } catch (error) {
        if (error instanceof UnauthorizedError) {
            throw redirect("/login");
        }
        throw error;
    }
};
