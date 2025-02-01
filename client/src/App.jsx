import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <AllRoutes />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
