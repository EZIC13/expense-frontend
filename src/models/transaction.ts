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

export const dummyTransactions: Transaction[] = [
    {
        transaction_id: "1",
        user_id: "1",
        amount: 100,
        merchant: "Amazon",
        type: "income",
        category: "Groceries",
        notes: "Groceries",
        date: "2026-01-01",
    },
    {
        transaction_id: "2",
        user_id: "1",
        amount: 50,
        merchant: "Starbucks",
        type: "expense",
        category: "Coffee",
        notes: "Coffee",
        date: "2026-01-02",
    },
];