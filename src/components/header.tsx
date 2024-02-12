import React, { PropsWithChildren } from 'react';

type HeaderProps = {

};

const Header: React.FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
    return (
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            { children }
        </h1>
    );
}

export default Header;