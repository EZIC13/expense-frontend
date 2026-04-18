import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { authLoader } from "./utils/authLoader";
import { transactionDataLoader } from "./utils/transactionsDataLoader.ts";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import TransactionsPage from "./pages/TransactionsPage.tsx";
import CreateTransactionPage from "./pages/CreateTransactionPage.tsx";

const router = createBrowserRouter([
    { path: "/", loader: () => redirect('/dashboard') },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/dashboard", element: <DashboardPage />, loader: transactionDataLoader },
    { path: "/transactions", element: <TransactionsPage />, loader: transactionDataLoader },
    { path: "/create-transaction", element: <CreateTransactionPage />, loader: authLoader },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
    </StrictMode>
);
