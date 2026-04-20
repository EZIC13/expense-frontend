import { useState } from "react";
import { toast } from "react-hot-toast";
import toastOptions from "../utils/toastOptions.ts";
import { type NavigateFunction, useNavigate } from "react-router-dom";
import type { Transaction, TransactionRequest } from "../models/transaction.ts";
import { putRequest, UnauthorizedError } from "../services/RequestService.ts";

interface EditTransactionProps {
    transaction: Transaction;
}

const EditTransaction = (props: EditTransactionProps) => {
    const navigate: NavigateFunction = useNavigate();

    const [merchant, setMerchant] = useState<string>(props.transaction.merchant);
    const [category, setCategory] = useState<string>(props.transaction.category);
    const [amount, setAmount] = useState<string>((props.transaction.amountInCents / 100).toFixed(2));
    const [transactionDate, setTransactionDate] = useState<string>(props.transaction.transactionDate);
    const [isIncome, setIsIncome] = useState<boolean>(props.transaction.isIncome);

    const handleSubmit = async (e: any):Promise<void> => {
        e.preventDefault();

        const toastId: string = toast.loading("Updating Transaction", toastOptions);
        const parsedAmount: number = Number(amount);

        if (!Number.isFinite(parsedAmount)) {
            toast.error("Please enter a valid amount", { id: toastId, ...toastOptions });
            return;
        }

        const transactionRequest: TransactionRequest = {
            "merchant": merchant,
            "category": category,
            "isIncome": isIncome,
            "amountInCents": Math.round(parsedAmount * 100),
            "transactionDate": transactionDate
        };

        try {
            await putRequest<TransactionRequest>(`/transactions/${props.transaction.id}`, transactionRequest);
        } catch (error) {
            if (error instanceof UnauthorizedError) {
                toast.error("Session expired. Please log in again", { id: toastId, ...toastOptions });
                navigate("/login");
                return;
            }
            toast.error("Unable to update transaction", { id: toastId, ...toastOptions });
            return;
        }

        toast.success("Successfully updated transaction", { id: toastId, ...toastOptions });
        navigate("/transactions");
        return;
    };

    return (
        <div className="border border-gray-200 rounded-lg p-4 md:p-6 bg-white">
            <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-cb-black">Edit Transaction</h3>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        {/*Date*/}
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium text-cb-black">Date</label>
                            <div className="mt-2">
                                <input value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} type="date" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-cb-black outline-1 outline-offset-1 outline-gray-300 focus:outline-2 focus:outline-cb-blue sm:text-sm"/>
                            </div>
                        </div>

                        {/*Merchant*/}
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium text-cb-black">Merchant</label>
                            <div className="mt-2">
                                <input value={merchant} onChange={(e) => setMerchant(e.target.value)} type="text" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-cb-black outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cb-blue sm:text-sm"/>
                            </div>
                        </div>

                        {/*Category*/}
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium text-cb-black">Category</label>
                            <div className="mt-2">
                                <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-cb-black outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cb-blue sm:text-sm"/>
                            </div>
                        </div>

                        {/*Type*/}
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium text-cb-black">Type</label>
                            <div className="mt-2">
                                <select
                                    value={isIncome ? "income" : "expense"}
                                    onChange={(e) => setIsIncome(e.target.value === "income")}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-cb-black outline-1 outline-offset-1 outline-gray-300 focus:outline-2 focus:outline-cb-blue sm:text-sm"
                                >
                                    <option value="expense">Expense</option>
                                    <option value="income">Income</option>
                                </select>
                            </div>
                        </div>

                        {/*Amount*/}
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium text-cb-black">Amount</label>
                            <div className=" mt-2 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">$</div>
                                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" step="0.01" inputMode="decimal" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm/6 font-semibold text-gray-900">
                        Cancel
                    </button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditTransaction;
