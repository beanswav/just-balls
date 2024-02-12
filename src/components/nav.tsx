import React, { PropsWithChildren } from 'react';

type NavLinkProps = {
    href: string;
};

const NavLink: React.FC<PropsWithChildren<NavLinkProps>> = ({href, children}) => {
    return (
        <a
            href={href}
            className={`text-xl text-grey font-bold py-2 px-4`}
        >
            {children}
        </a>
    )
};

const Nav: React.FC = () => {
    return (
        <nav>
            <header className={'bg-white fixed top-0 w-full shadow-md px-4 py-2'}>
                <h2 className={'inline text-3xl font-bold mr-4'}>Just Balls</h2>
                <NavLink href={'/player'}>Player</NavLink>
                <NavLink href={'/admin'}>Admin</NavLink>
            </header>
        </nav>
    )
};

export default Nav;