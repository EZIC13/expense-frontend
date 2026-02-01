import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import { authLoader } from "./utils/authLoader";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
    { path: "/", loader: () => redirect('/dashboard') },
    { path: "/login", element: <LoginPage /> },
    { path: "/dashboard", element: <DashboardPage />, loader: authLoader },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
    </StrictMode>
);