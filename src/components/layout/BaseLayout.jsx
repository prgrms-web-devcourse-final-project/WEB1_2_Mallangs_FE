import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useModalStore } from '../../stores/modalStatus';
import Header from './Header';
import NotificationCard from './NotificationCard';
import UserProfileCard from './UserProfileCard';
import Footer from './Footer';
import MainModal from '../MainModal';
import TotalSearch from './TotalSearch';
import tempDB from '../../datas/temp-db.json';

const BaseLayout = () => {
    const [currentPanel, setPanel] = useState(null);

    const location = useLocation();

    const isModalShowing = useModalStore((state) => state.isModalShowing);

    const currentUser = tempDB.users.find((user) => user.id === 0);

    return (
        <>
            {isModalShowing && <MainModal />}

            <NotificationCard currentPanel={currentPanel} setPanel={setPanel} />

            <UserProfileCard
                currentPanel={currentPanel}
                setPanel={setPanel}
                userObject={currentUser}
            />

            <Header currentPanel={currentPanel} setPanel={setPanel} />

            <TotalSearch currentPanel={currentPanel} setPanel={setPanel} />

            <Outlet name="main" />

            {location.pathname !== '/' && <Footer />}
        </>
    );
};

export default BaseLayout;
