import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import DashBoardPage from "./pages/DashboardPage.tsx";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="/login" element={ <LoginPage/> }/>
            <Route path="/dashboard" element={ <DashBoardPage/> }/>

        </Routes>
    )
}

export default App