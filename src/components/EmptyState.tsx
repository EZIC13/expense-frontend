import { type NavigateFunction, useNavigate } from "react-router-dom";

const EmptyState = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
            <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-semibold text-cb-black">No transactions</h3>
                <p className="mt-2 text-sm text-gray-500">Get started by adding a transaction</p>
                <button onClick={(): void => {navigate("/create-transaction")}} className="mt-6 rounded-md bg-cb-blue px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-cb-blue-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cb-blue">Add Transaction</button>
            </div>
        </div>
    );
}

export default EmptyState;