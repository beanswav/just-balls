import React, { PropsWithChildren } from 'react';

type ButtonProps = {
    onClick: Function;
    className?: string;
};

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({onClick, className, children}) => {
    return (
        <button
            role={'button'}
            onClick={() => onClick() }
            className={`text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;