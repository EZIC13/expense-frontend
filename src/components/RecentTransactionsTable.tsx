import type { Transaction } from "../models/transaction.ts";

const RecentTransactionsTable = ({ transactions }: { transactions: Transaction[] }) => {
    return (
        <div className="border border-gray-200 rounded-lg p-4 md:p-6 bg-white">
            <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                    <h3 className="text-sm text-gray-600">Recent Transactions</h3>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-140 text-left border-separate border-spacing-0">
                    <thead>
                        <tr>
                            <th className="border-b border-gray-200 px-3 py-3 text-xs font-medium text-gray-400">Date</th>
                            <th className="border-b border-gray-200 px-3 py-3 text-xs font-medium text-gray-400">Merchant</th>
                            <th className="border-b border-gray-200 px-3 py-3 text-xs font-medium text-gray-400">Category</th>
                            <th className="border-b border-gray-200 px-3 py-3 text-xs font-medium text-gray-400">Type</th>
                            <th className="border-b border-gray-200 px-3 py-3 text-right text-xs font-medium text-gray-400">Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map(transaction => {
                            const isIncome: boolean = transaction.type === "income";
                            const transactionTypeBadgeClass: "bg-emerald-50 text-emerald-700" | "bg-rose-50 text-rose-700" = isIncome ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700";
                            const transactionAmountClass: "text-emerald-600" | "text-rose-600" = isIncome ? "text-emerald-600" : "text-rose-600";

                            return (
                                <tr key={transaction.transaction_id} className="transition-colors">
                                    <td className="border-b border-gray-100 px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{transaction.date}</td>
                                    <td className="border-b border-gray-100 px-3 py-4 text-sm font-medium text-gray-900">{transaction.merchant}</td>
                                    <td className="border-b border-gray-100 px-3 py-4 text-sm text-gray-600">
                                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">{transaction.category}</span>
                                    </td>
                                    <td className="border-b border-gray-100 px-3 py-4 text-sm text-gray-600">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${transactionTypeBadgeClass}`}>
                                            {transaction ? "Income" : "Expense"}
                                        </span>
                                    </td>
                                    <td className={`border-b border-gray-100 px-3 py-4 text-right text-sm font-semibold whitespace-nowrap ${transactionAmountClass}`}>{isIncome ? "+" : "-"}${transaction.amount.toFixed(2)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RecentTransactionsTable;