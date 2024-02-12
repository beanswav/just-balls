import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Page from '../../components/layouts/page';
import Header from '../../components/header';
import Button from '../../components/button';
import Games from '../../store/games';

const CreateGame: React.FC = () => {
    const navigate = useNavigate();

    const [location, setLocation] = useState<string>('');
    const [startTime, setStartTime] = useState<Date | null>();

    const publishGame = () => {
        Games.getInstance().createGame(startTime!, location);
        navigate('/player');
    }

    return (
        <Page>
            <Header>
                Create a game
            </Header>
            <div className={'mb-4'}>
                <label htmlFor={'location'}>Location</label>
                <input
                    className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
                    id={'location'}
                    type={'text'}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div className={'mb-4'}>
                <label htmlFor={'date'}>Date</label>
                <input
                    className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
                    id={'date'}
                    type={'datetime-local'}
                    onChange={(e) => {
                        setStartTime(new Date(e.target.value));
                    }}
                />
            </div>
            <Button onClick={publishGame}>Publish</Button>
            
        </Page>
    );
};

export default CreateGame;