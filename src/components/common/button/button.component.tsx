import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
    text: string;
    icon?: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    className?: string; // Add className prop for custom styles
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick, disabled, className }) => {
  const buttonClass = `${styles.button} ${className ? className : ''} ${disabled ? styles.disabled : ''}`;
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;