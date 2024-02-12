import React, { PropsWithChildren } from 'react';
import Nav from '../nav';

type PageProps = {

};

const Page: React.FC<PropsWithChildren<PageProps>> = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={'flex justify-center mt-[100px]'}>
                <div className={'w-[800px]'}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Page;