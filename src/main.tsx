import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import DashboardPage_OLD from "./pages/DashboardPage_OLD.tsx";
import { authLoader } from "./utils/authLoader";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage.tsx";

const router = createBrowserRouter([
    { path: "/", loader: () => redirect('/dashboard') },
    { path: "/login", element: <LoginPage /> },
    { path: "/dashboard", element: <DashboardPage />, loader: authLoader },
    { path: "/dashboard_OLD", element: <DashboardPage_OLD /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
    </StrictMode>
);