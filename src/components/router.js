import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Budget from "./budget";


function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/budget" element={<Budget />} />
            </Routes>
    </BrowserRouter>
    )
} 
   
export default Router;

