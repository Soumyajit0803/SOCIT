import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Header.css";

const NavLink = ({ to, children, isDrawer = false, onClick, setRef }) => {
    const location = useLocation();
    const isActive = location.pathname.toLowerCase() === to.toLowerCase();

    return (
        <Link
            ref={setRef} // Pass the ref up to the parent
            style={{
                textDecoration: "none",
                color: isDrawer ? (isActive ? "var(--text-primary)" : "var(--green)") : "inherit",
                position: "relative" // Ensure relative positioning for context
            }}
            onClick={onClick}
            to={to}
            className={isActive ? "active-link" : ""}
        >
            {isDrawer ? (
                <li>{children}</li>
            ) : (
                <div className={`menu-item`}>
                    {children}
                </div>
            )}
        </Link>
    );
};

const AppDrawer = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <>
            <Button shape="circle" size="large" onClick={showDrawer}>
                <MenuOutlined />
            </Button>
            <Drawer
                title={
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "1.7rem" }}>Menu</span>
                        <Button shape="circle" size="large" onClick={closeDrawer}>
                            <CloseOutlined style={{ fontSize: "1rem" }} />
                        </Button>
                    </div>
                }
                placement="left"
                onClose={closeDrawer}
                open={open}
                size="large"
                closeIcon={null}
                styles={{
                    body: { padding: "12px", backgroundColor: "var(--black)", color: "var(--green)", fontSize: "1.5rem", border: "2px solid var(--green)" },
                    header: { backgroundColor: "var(--black)", color: "#fff", border: "2px solid var(--green)" },
                }}
            >
                <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", padding: "10px" }}>
                    {/* Simplified drawer links for brevity */}
                    <NavLink to="/" isDrawer onClick={closeDrawer}>Home</NavLink>
                    <NavLink to="/Placement" isDrawer onClick={closeDrawer}>Placement</NavLink>
                    <NavLink to="/faculties" isDrawer onClick={closeDrawer}>Faculties</NavLink>
                    <NavLink to="/gallery" isDrawer onClick={closeDrawer}>Gallery</NavLink>
                </ul>
            </Drawer>
        </>
    );
};

const Header = () => {
    const container = useRef();
    const indicatorRef = useRef();
    const navRefs = useRef([]); // Array of refs for nav items
    const location = useLocation();

    // Reset ref array on render
    navRefs.current = [];
    const addToRefs = (el) => {
        if (el && !navRefs.current.includes(el)) {
            navRefs.current.push(el);
        }
    };

    // 1. Initial Entrance Animation
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(".hero", { y: -100, opacity: 0, duration: 1.2 })
          .from(".nav-text", { y: -50, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.8")
          .from(".drawer-button", { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(1.7)" }, "-=1");
    }, { scope: container });

    // 2. Active Indicator Animation (The Magic Line)
    useGSAP(() => {
        // Find the active link DOM element
        const activeLink = navRefs.current.find(link => 
            link.getAttribute('href') === location.pathname || 
            link.getAttribute('href') === location.pathname.toLowerCase()
        );

        if (activeLink && indicatorRef.current) {
            // Get position and width of active element
            const { offsetLeft, offsetWidth } = activeLink;

            // Animate the indicator to that position
            gsap.to(indicatorRef.current, {
                x: offsetLeft,
                width: offsetWidth,
                duration: 0.5,
                ease: "elastic.out(1, 0.75)", // Bouncy effect
                opacity: 1
            });
        } else {
             // If no active link (or 404), hide the line
             gsap.to(indicatorRef.current, { opacity: 0, duration: 0.3 });
        }
    }, { scope: container, dependencies: [location.pathname] }); // Re-run when route changes

    return (
        <header className="header" ref={container}>
            <div className="hero">SOCIT</div>
            
            <div className="menu" style={{ position: "relative" }}>
                
                {/* THE MAGIC LINE */}
                <div 
                    ref={indicatorRef} 
                    className="nav-indicator"
                />

                <NavLink to="/" setRef={addToRefs}>
                    <span className="nav-text">Home</span>
                </NavLink>
                <NavLink to="/placement" setRef={addToRefs}>
                    <span className="nav-text">Placement</span>
                </NavLink>
                <NavLink to="/faculties" setRef={addToRefs}>
                    <span className="nav-text">Faculty</span>
                </NavLink>
                <NavLink to="/gallery" setRef={addToRefs}>
                    <span className="nav-text">Gallery</span>
                </NavLink>
            </div>

            <div className="drawer-button">
                <AppDrawer />
            </div>
        </header>
    );
};

export default Header;