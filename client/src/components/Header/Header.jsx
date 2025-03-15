import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CloseCircleOutlined, CloseOutlined, MenuOutlined } from "@ant-design/icons";

import { Drawer, Button } from "antd";

const AppDrawer = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <>
            <Button type="primary" onClick={showDrawer} size="small">
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
                        <Button type="primary" onClick={closeDrawer} size="small">
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
                        border: "2px solid var(--green)"

                    },
                    
                }}
            >
                <ul
                    style={{
                        listStyleType: "none",
                        // border: "2px solid var(--green)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        padding: "10px",
                    }}
                >
                    <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "inherit" }} to="/Events">
                        <li>Events</li>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "inherit" }} to="/Placement">
                        <li>Placement</li>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                        <li>Gallery</li>
                    </Link>
                </ul>
            </Drawer>
        </>
    );
};

const Header = () => {
    return (
        <header className="header">
            <div className="hero">SOCIT</div>
            <div className="menu">
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                    <div className="menu-item">Home</div>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/events">
                    <div className="menu-item">Events</div>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/placement">
                    <div className="menu-item">Placement</div>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/gallery">
                    <div className="menu-item">Gallery</div>
                </Link>
            </div>
            <div className="drawer-button">
                <AppDrawer />
            </div>
        </header>
    );
};

export default Header;
