import React from 'react';
import LinkButton from '../components/linkButton';
import Header from '../components/header';

const Home: React.FC = () => {
    return (
        <div className={'flex justify-center items-center h-screen'}>
            <div className={'text-center w-[800px] h-[400px]'}>
                <Header>Just Balls</Header>
                <p className={'mt-8'}>
                    Are you a
                    <LinkButton className={'mx-1'} href={'/player'}>Player</LinkButton> 
                    or an <LinkButton className={'mx-1'} href={'/admin'}>Admin</LinkButton>?
                </p>
            </div>
        </div>
    );
};

export default Home;