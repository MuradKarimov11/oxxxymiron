import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { TourPage } from "../Tour/TourPage";

export const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="/tour" element={<TourPage/>}/>
    </Routes>
)
