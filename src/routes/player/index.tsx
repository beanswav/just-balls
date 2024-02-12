import React from 'react';
import Page from '../../components/layouts/page';
import Header from '../../components/header';
import Games from '../../store/games';

const PlayerHome: React.FC = () => {
    return (
        <Page>
            <Header>Player</Header>
            { Games.getInstance().games.map(game => {
                return (
                    <div>{game.location}</div>
                )
            })}
        </Page>
    );
}

export default PlayerHome;