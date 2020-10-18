import React from 'react';

const Button = ({ selected, onClick, value, children }) => {
    const handleButtonClick = () => {
        const newValue = selected ? null : value;
        if (onClick) {
            onClick(newValue);
        }
    };
    return (
        <button
            className={`button ${selected ? 'button--selected' : ''}`}
            onClick={handleButtonClick}
        >
            {children}
        </button>
    );
};

export default Button;
