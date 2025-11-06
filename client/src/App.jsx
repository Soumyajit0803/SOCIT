import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes";
import AppHeader from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ConfigProvider, theme } from "antd";

// for MUI dark mode
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

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
            <ThemeProvider theme={darkTheme}>
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
            </ThemeProvider>
        </ConfigProvider>
    );
}

export default App;
