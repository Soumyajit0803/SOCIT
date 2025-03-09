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
                            // border: "2px solid var(--green)"
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
                    },
                    header: {
                        backgroundColor: "var(--black)",
                        color: "#fff",
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
                <div className="menu-item">Home</div>
                <div className="menu-item">Events</div>
                <div className="menu-item">Placement</div>
                <div className="menu-item">Gallery</div>
            </div>
            <div className="drawer-button">
                <AppDrawer />
            </div>
        </header>
    );
};

export default Header;
