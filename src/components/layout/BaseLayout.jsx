import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import NotificationCard from './NotificationCard';
import UserProfileCard from './UserProfileCard';
import AreaInfoPanel from './AreaInfoPanel';
import Footer from './Footer';
import MainModal from '../MainModal';
import { useModalStore } from '../../stores/modalStatus';

const BaseLayout = () => {
    const [currentPanelID, setCurrentPanel] = useState(0);
    const location = useLocation();
    const isModalShowing = useModalStore((state) => state.isModalShowing);

    return (
        <>
            {isModalShowing && <MainModal />}

            <NotificationCard
                isActive={currentPanelID === 1}
                onShow={setCurrentPanel}
            />

            <UserProfileCard
                isActive={currentPanelID === 2}
                onShow={setCurrentPanel}
            />

            <AreaInfoPanel
                isActive={currentPanelID === 3}
                onShow={setCurrentPanel}
            />

            <Header onShow={setCurrentPanel} />

            <Outlet />

            {location.pathname !== '/' && <Footer />}
        </>
    );
};

export default BaseLayout;
