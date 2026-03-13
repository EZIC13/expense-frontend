import type { Transaction } from "../models/transaction.ts";

const RecentTransactionsTable = ({ transactions }: { transactions: Transaction[] }) => {
    return (
        <div className=" text-gray-600 border border-gray-200 rounded-lg p-4 md:p-6">
            <h3 className="text-sm mb-4">Recent Transactions</h3>
            <table className="w-full text-left border-collapse">
                <thead>
                <tr>
                    <th className="border-b p-2">Date</th>
                    <th className="border-b p-2">Merchant</th>
                    <th className="border-b p-2">Category</th>
                    <th className="border-b p-2">Amount</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(tx => (
                    <tr key={tx.transaction_id}>
                        <td className="border-b p-2">{tx.date}</td>
                        <td className="border-b p-2">{tx.merchant}</td>
                        <td className="border-b p-2">{tx.category}</td>
                        <td className="border-b p-2">${tx.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecentTransactionsTable;