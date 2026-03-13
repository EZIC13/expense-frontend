export interface Transaction {
    transaction_id: string;
    user_id: string;
    amount: number;
    merchant: string;
    type: string;
    category: string;
    notes: string;
    date: string;
}