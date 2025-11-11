import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { CloseCircleOutlined, CloseOutlined, MenuOutlined } from "@ant-design/icons";

import { Drawer, Button } from "antd";

const NavLink = ({ to, children, isDrawer = false, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname.toLowerCase() === to.toLowerCase();

    return (
        <Link
            style={{
                textDecoration: "none",
                color: isDrawer ? (isActive ? "var(--text-primary)" : "var(--green)") : "inherit",
            }}
            onClick={onClick}
            to={to}
        >
            {isDrawer ? (
                <li>{children}</li>
            ) : (
                <div className={`menu-item${isActive ? " active-menu-item" : ""}`}>{children}</div>
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
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
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
                    body: {
                        padding: "12px",
                        backgroundColor: "var(--black)",
                        color: "var(--green)",
                        fontSize: "1.5rem",
                        border: "2px solid var(--green)",
                    },
                    header: {
                        backgroundColor: "var(--black)",
                        color: "#fff",
                        border: "2px solid var(--green)",
                    },
                }}
            >
                <ul
                    style={{
                        listStyleType: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        padding: "10px",
                    }}
                >
                    <NavLink to="/" isDrawer onClick={closeDrawer}>
                        Home
                    </NavLink>
                    {/* <NavLink to="/Events" isDrawer onClick={closeDrawer}>
                        Events
                    </NavLink> */}
                    <NavLink to="/Placement" isDrawer onClick={closeDrawer}>
                        Placement
                    </NavLink>
                    <NavLink to="/faculties" isDrawer onClick={closeDrawer}>
                        Faculties
                    </NavLink>
                    <NavLink to="/gallery" isDrawer onClick={closeDrawer}>
                        Gallery
                    </NavLink>
                </ul>
            </Drawer>
        </>
    );
};

const Header = () => {
    return (
        <header className="header">
            <div className="hero top-to-bottom">SOCIT</div>
            <div className="menu">
                <NavLink to="/">
                    <div className="top-to-bottom" style={{animationDelay: "0.1s"}}>Home</div>
                </NavLink>
                <NavLink to="/placement">
                    <div className="top-to-bottom" style={{animationDelay: "0.2s"}}>Placement</div>
                </NavLink>
                <NavLink to="/faculties">
                    <div className="top-to-bottom" style={{animationDelay: "0.3s"}}>Faculty</div>
                </NavLink>
                <NavLink to="/gallery">
                    <div className="top-to-bottom" style={{animationDelay: "0.4s"}}>Gallery</div>
                </NavLink>
            </div>
            <div className="drawer-button">
                <AppDrawer />
            </div>
        </header>
    );
};

export default Header;
