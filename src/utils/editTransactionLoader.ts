import { redirect } from "react-router-dom";
import type { Transaction } from "../models/transaction.ts";
import { getRequest, UnauthorizedError } from "../services/RequestService.ts";

export interface EditTransactionPageData {
    transaction: Transaction;
    user: { username: string };
}

export const editTransactionLoader = async ({ params }: { params: { id?: string } }): Promise<EditTransactionPageData> => {
    try {
        const [user, transaction] = await Promise.all([
            getRequest<{ username: string }>("/auth/current-user"),
            getRequest<Transaction>(`/transactions/${params.id}`)
        ]);
        return { user, transaction };
    } catch (error) {
        if (error instanceof UnauthorizedError) {
            throw redirect("/login");
        }
        throw error;
    }
};