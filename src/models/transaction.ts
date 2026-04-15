export interface Transaction {
    id: string;
    date: string;
    merchant: string;
    category: string;
    isIncome: boolean;
    amount: number;
    notes: string;
}

export interface CreateTransactionRequest {
    merchant: string;
    category: string;
    amount: number;
}

export const dummyTransactions: Transaction[] = [
    {
        id: "1",
        date: "01-01-2001",
        merchant: "Salary",
        category: "Work",
        isIncome: true,
        amount: 100,
        notes: ""
    },
    {
        id: "2",
        date: "01-01-2001",
        merchant: "Amazon",
        category: "Food",
        isIncome: false,
        amount: 100,
        notes: "Groceries"
    }
];