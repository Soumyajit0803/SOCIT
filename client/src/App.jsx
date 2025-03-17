import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes";
import AppHeader from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ConfigProvider, theme } from "antd";

function App() {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorPrimary: "#93b256",
                },
            }}
        >
            <div
                className="app"
                style={{
                    margin: "var(--appmargin)",
                    boxShadow: "inset 0 0 0 2px var(--green)",
                }}
            >
                <BrowserRouter>
                    <AppHeader />
                    <AllRoutes />
                    <Footer />
                </BrowserRouter>
            </div>
        </ConfigProvider>
    );
}

export default App;
