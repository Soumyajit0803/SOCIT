import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Hero></Hero>
                <AllRoutes />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
