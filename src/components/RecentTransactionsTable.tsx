import type { Transaction } from "../models/transaction.ts";
import Badge from "./Badge.tsx";
import { type NavigateFunction, useNavigate } from "react-router-dom";

const RecentTransactionsTable = ({ transactions }: { transactions: Transaction[] }) => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className="border border-gray-200 rounded-lg p-4 md:p-6 bg-white">
            <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-cb-black">Recent Transactions</h3>
                <button onClick={() => {navigate("/create-transaction")}} className="rounded-md bg-cb-blue px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-cb-blue-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cb-blue">Add Transaction</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-140 text-left border-separate border-spacing-0">
                    <thead>
                        <tr>
                            <th className="border-b border-gray-200 px-3 py-3 text-sm font-medium text-cb-black">Date</th>
                            <th className="border-b border-gray-200 px-3 py-3 text-sm font-medium text-cb-black">Merchant</th>
                            <th className="border-b border-gray-200 px-3 py-3 text-sm font-medium text-cb-black">Category</th>
                            <th className="border-b border-gray-200 px-3 py-3 text-sm font-medium text-cb-black">Type</th>
                            <th className="border-b border-gray-200 px-3 py-3 text-right text-sm font-medium text-cb-black">Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map(transaction => {
                            const isIncome: boolean = transaction.isIncome;
                            const formattedAmount: string = (transaction.amountInCents / 100).toFixed(2);
                            return (
                                <tr className="transition-colors">
                                    <td className="border-b border-gray-100 px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{transaction.transactionDate}</td>
                                    <td className="border-b border-gray-100 px-3 py-4 text-sm font-medium text-cb-black">{transaction.merchant}</td>
                                    <td className="border-b border-gray-100 px-3 py-4 text-sm text-gray-500">
                                        <Badge badgeType={"CATEGORY"} badgeText={transaction.category} />
                                    </td>
                                    <td className="border-b border-gray-100 px-3 py-4 text-sm text-gray-500">
                                        <Badge badgeType={isIncome ? "INCOME": "EXPENSE"} badgeText={isIncome ? "Income" : "Expense"} />
                                    </td>
                                    <td className={`border-b border-gray-100 px-3 py-4 text-right text-sm font-semibold whitespace-nowrap ${isIncome ? "text-emerald-600" : "text-rose-600"}`}>{isIncome ? "+" : "-"}${formattedAmount}</td>
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
