import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useModalStore } from '../../stores/modalStatus';
import Header from './Header';
import NotificationCard from './NotificationCard';
import UserProfileCard from './UserProfileCard';
import Footer from './Footer';
import MainModal from '../MainModal';
import TotalSearch from './TotalSearch';
import { useAreaInfoStatus } from '../../stores/AreaInfoStatus';

const BaseLayout = () => {
    const [currentPanel, setPanel] = useState(null);
    const location = useLocation();
    const isModalShowing = useModalStore((state) => state.isModalShowing);
    const isAreaInfoShowing = useAreaInfoStatus(
        (state) => state.isPanelShowing,
    );

    return (
        <>
            {isModalShowing && <MainModal />}

            <NotificationCard currentPanel={currentPanel} setPanel={setPanel} />

            <UserProfileCard currentPanel={currentPanel} setPanel={setPanel} />

            <Header currentPanel={currentPanel} setPanel={setPanel} />

            <TotalSearch currentPanel={currentPanel} setPanel={setPanel} />

            <Outlet name="main" />

            {location.pathname !== '/' && <Footer />}
        </>
    );
};

export default BaseLayout;
