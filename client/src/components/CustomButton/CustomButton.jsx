import React from "react";
import "./CustomButton.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

const CustomButton = ({ text, url }) => {
    return (
        <Button
            style={{
                color: "var(--green)",
                background: "transparent",
                border: "1px solid var(--green)",
                outline: "none",
                borderRadius: "0",
                fontSize: "1.2rem",
                fontWeight: "400",
                padding: "1.2rem",
            }}
            className="app-button"
        >
            <Link target="_blank" to={url} style={{ textDecoration: "none", color: "inherit" }}>
                {text} <ArrowRightOutlined className="app-button-icon" />
            </Link>
        </Button>
    );
};

export default CustomButton;
