import { useState } from "react";
import { toast } from "react-hot-toast";
import toastOptions from "../utils/toastOptions.ts";
import { type NavigateFunction, useNavigate } from "react-router-dom";
import type { CreateTransactionRequest } from "../models/transaction.ts";

const CreateTransaction = () => {
    const navigate: NavigateFunction = useNavigate();
    const defaultTransactionDate: string = new Date().toISOString().split("T")[0];

    const [merchant, setMerchant] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [date, setDate] = useState<string>(defaultTransactionDate);


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const toastId: string = toast.loading("Creating Transaction", toastOptions);

        const transactionRequest: CreateTransactionRequest = {
            "merchant": merchant,
            "category": category,
            "amount": Number(amount),
            "date": date
        };

        const res: Response = await fetch(import.meta.env.VITE_BACKEND_API + "/transactions/create-transaction", {
            method: "POST",
            body: JSON.stringify(transactionRequest),
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });

        if (!res.ok) {
            toast.error("Unable to create transaction", { id: toastId, ...toastOptions });
            return;
        }

        toast.success("Success!", { id: toastId, ...toastOptions });
        navigate("/dashboard");
    };


    return (
        // <div className="border border-gray-200 rounded-lg p-4 md:p-6 bg-white">
        <div className="rounded-lg p-4 md:p-6 bg-white">
            <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-cb-black">Create Transaction</h3>
            </div>


            {/*date DONE*/}
            {/*merchant DONE*/}
            {/*category DONE*/}
            {/*type*/}
            {/*amount DONE*/}
            {/*notes DONE*/}


            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        {/*Date*/}
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium text-cb-black">Date</label>
                            <div className="mt-2">
                                <input value={date} onChange={(e) => setDate(e.target.value)} type="date" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-cb-black outline-1 outline-offset-1 outline-gray-300 focus:outline-2 focus:outline-cb-blue sm:text-sm"/>
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

                        {/*Amount*/}
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium text-cb-black">Price</label>
                            <div className=" mt-2 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">$</div>
                                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" required className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
                            </div>
                        </div>

                        {/*Notes*/}
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium text-cb-black">Notes</label>
                            <div className="mt-2">
                                <textarea
                                    rows={3}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>







                        {/*Receipt Upload (FUTURE ENHANCEMENT)*/}
                        {/*<div className="col-span-full">*/}
                        {/*    <label className="block text-sm font-medium text-cb-black">Upload Receipt</label>*/}
                        {/*    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">*/}
                        {/*        <div className="text-center">*/}
                        {/*            /!*<PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />*!/*/}
                        {/*            <div className="mt-4 flex text-sm/6 text-gray-600">*/}
                        {/*                <label*/}
                        {/*                    htmlFor="file-upload"*/}
                        {/*                    className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500"*/}
                        {/*                >*/}
                        {/*                    <span>Upload a file</span>*/}
                        {/*                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />*/}
                        {/*                </label>*/}
                        {/*                <p className="pl-1">or drag and drop</p>*/}
                        {/*            </div>*/}
                        {/*            <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                        {/*Recurring Transaction (FUTURE ENHANCEMENT)*/}
                        {/*<div className="flex gap-3">*/}
                        {/*    <div className="flex h-6 items-center">*/}
                        {/*        <div className="group grid size-4">*/}
                        {/*            <input*/}
                        {/*                type="checkbox"*/}
                        {/*                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"*/}
                        {/*            />*/}
                        {/*            <svg*/}
                        {/*                fill="none"*/}
                        {/*                viewBox="0 0 14 14"*/}
                        {/*                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"*/}
                        {/*            >*/}
                        {/*                <path*/}
                        {/*                    d="M3 8L6 11L11 3.5"*/}
                        {/*                    strokeWidth={2}*/}
                        {/*                    strokeLinecap="round"*/}
                        {/*                    strokeLinejoin="round"*/}
                        {/*                    className="opacity-0 group-has-checked:opacity-100"*/}
                        {/*                />*/}
                        {/*                <path*/}
                        {/*                    d="M3 7H11"*/}
                        {/*                    strokeWidth={2}*/}
                        {/*                    strokeLinecap="round"*/}
                        {/*                    strokeLinejoin="round"*/}
                        {/*                    className="opacity-0 group-has-indeterminate:opacity-100"*/}
                        {/*                />*/}
                        {/*            </svg>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <label className="block text-sm/6 font-medium text-cb-black">Recurring Transaction</label>*/}
                        {/*</div>*/}
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

export default CreateTransaction;
