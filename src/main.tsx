import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { authLoader } from "./utils/authLoader";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import TransactionsPage from "./pages/TransactionsPage.tsx";

const router = createBrowserRouter([
    { path: "/", loader: () => redirect('/dashboard') },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/dashboard", element: <DashboardPage />, loader: authLoader },
    { path: "/transactions", element: <TransactionsPage />, loader: authLoader },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
    </StrictMode>
);