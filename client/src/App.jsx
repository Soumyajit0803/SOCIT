import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes";
import AppHeader from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {

    return (
        <>
            <BrowserRouter>
                <AppHeader />
                <AllRoutes />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
