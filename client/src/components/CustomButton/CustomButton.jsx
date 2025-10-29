import React from "react";
import "./CustomButton.css";

const CustomButton = ({ text, url }) => {
    const handleClick = () => {
        if (url) {
            window.open(url, "_blank", "noopener,noreferrer");
        } else if (onClick) {
            onClick();
        }
    };
    return (
        <button href="#" className="button" style={{ "-clr": "var(--green)" }} onClick={handleClick}>
            {text}
            <span className="button__icon-wrapper">
                <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg"
                    width={10}
                >
                    <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                    />
                </svg>
                <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width={10}
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg button__icon-svg--copy"
                >
                    <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                    />
                </svg>
            </span>
        </button>
    );
};

export default CustomButton;
