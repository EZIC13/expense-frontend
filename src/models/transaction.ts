export interface Transaction {
    id: string;
    date: string;
    merchant: string;
    category: string;
    isIncome: boolean;
    amountInCents: number;
    notes: string;
}

export interface CreateTransactionRequest {
    merchant: string;
    category: string;
    amountInCents: number;
    transactionDate: string;
}

export const dummyTransactions: Transaction[] = [
    {
        id: "1",
        date: "01-01-2001",
        merchant: "Salary",
        category: "Work",
        isIncome: true,
        amountInCents: 10000,
        notes: ""
    },
    {
        id: "2",
        date: "01-01-2001",
        merchant: "Amazon",
        category: "Food",
        isIncome: false,
        amountInCents: 10000,
        notes: "Groceries"
    }
];
