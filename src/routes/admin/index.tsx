import React from 'react';
import Page from '../../components/layouts/page';
import Header from '../../components/header';
import LinkButton from '../../components/linkButton';

const AdminHome: React.FC = () => {
    return (
        <Page>
           <Header>Admin home</Header>
           <LinkButton href={'/admin/create'}>Create a game</LinkButton>
        </Page>
    );
}

export default AdminHome;