import React ,{useEffect, useRef} from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes";
import AppHeader from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ConfigProvider, theme } from "antd";

// for MUI dark mode
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";


const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    const location = useLocation();
    const observer = useRef(null);
    const bullets = useRef(null);
    const descend = useRef(null);
    const ascend = useRef(null);

    useEffect(() => {
        // Initialize IntersectionObserver when the component mounts
        observer.current = new IntersectionObserver(slider, { threshold: 0.6 });
        bullets.current = new IntersectionObserver(bulletSlider, { threshold: 0.6 });
        descend.current = new IntersectionObserver(descendSlider, { threshold: 0.6 });
        ascend.current = new IntersectionObserver(ascendSlider, { threshold: 0.6 });

        // Fetching all boxes and setting them on observe by the observer object
        const boxes = document.querySelectorAll(".hiderx");
        boxes.forEach((box) => {
            observer.current.observe(box);
        });
        const bulletBoxes = document.querySelectorAll(".right-to-left");
        bulletBoxes.forEach((box) => {
            bullets.current.observe(box);
        });
        const descendBoxes = document.querySelectorAll(".left-to-right");
        descendBoxes.forEach((box) => {
            descend.current.observe(box);
        });
        const ascendBoxes = document.querySelectorAll(".top-to-bottom");
        ascendBoxes.forEach((box) => {
            ascend.current.observe(box);
        });

        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
            observer.current.disconnect();
            bullets.current.disconnect();
            descend.current.disconnect();
        };
    }, [location.pathname]);
    const slider = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("shower");
                // console.log("Fire the animation!");
            }
        });
    };
    const bulletSlider = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("bulletshow");
                // console.log("Fire the animation!");
            }
        });
    };
    const descendSlider = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("descend-show");
                // console.log("Fire the animation!");
            }
        });
    };
    const ascendSlider = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("ascend-show");
                // console.log("Fire the animation!");
            }
        });
    };
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
                        <AppHeader />
                        <AllRoutes />
                        <Footer />
                </div>
            </ThemeProvider>
        </ConfigProvider>
    );
}

export default App;
