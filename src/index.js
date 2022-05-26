import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Download from "./components/Download";

import "./index.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="download" exact element={<Download />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <App></App>
    </StrictMode>
);
