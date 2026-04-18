export interface Transaction {
    merchant: string;
    category: string;
    isIncome: boolean;
    amountInCents: number;
    transactionDate: string;
}

export interface CreateTransactionRequest {
    merchant: string;
    category: string;
    isIncome: boolean;
    amountInCents: number;
    transactionDate: string;
}

export const dummyTransactions: Transaction[] = [
    {
        transactionDate: "01-01-2001",
        merchant: "Salary",
        category: "Work",
        isIncome: true,
        amountInCents: 10000
    },
    {
        transactionDate: "01-01-2001",
        merchant: "Amazon",
        category: "Food",
        isIncome: false,
        amountInCents: 10000
    }
];
