export interface Transaction {
    id: string
    merchant: string;
    category: string;
    isIncome: boolean;
    amountInCents: number;
    transactionDate: string;
}

export interface TransactionRequest {
    merchant: string;
    category: string;
    isIncome: boolean;
    amountInCents: number;
    transactionDate: string;
}