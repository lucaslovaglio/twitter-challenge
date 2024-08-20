import React, { useEffect, useState, useRef } from "react";
import styles from "./menu-button.module.css";

interface ButtonProps {
    text: string;
    icon?: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

const MenuButton: React.FC<ButtonProps> = ({ text, icon, onClick, disabled, className }) => {
    const [showText, setShowText] = useState(true);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const updateButtonVisibility = () => {
            if (buttonRef.current) {
                // Check if the button is too narrow to display both icon and text
                const isNarrow = buttonRef.current.offsetWidth < 100;
                setShowText(!isNarrow);
            }
        };

        // Initial check
        updateButtonVisibility();

        // Add event listener to handle window resizing
        window.addEventListener('resize', updateButtonVisibility);

        return () => {
            window.removeEventListener('resize', updateButtonVisibility);
        };
    }, []);

    const buttonClass = `${className || ''} ${!showText ? styles.justIcons : ''}`;

    return (
        <button
            ref={buttonRef}
    className={buttonClass}
    onClick={onClick}
    disabled={disabled}
        >
        {icon}
    {showText && <span className={styles.text}>{text}</span>}
        </button>
    );
    }

    export default MenuButton;
