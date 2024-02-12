import React, { PropsWithChildren } from 'react';

type LinkButtonProps = {
    href: string;
    className?: string;
};

const LinkButton: React.FC<PropsWithChildren<LinkButtonProps>> = ({href, className, children}) => {
    return (
        <a
            role={'button'}
            href={href}
            className={`text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
        >
            {children}
        </a>
    );
};

export default LinkButton;