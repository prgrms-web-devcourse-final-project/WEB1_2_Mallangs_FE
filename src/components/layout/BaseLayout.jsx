import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useModalStore } from '../../stores/modalStatus';
import Header from './Header';
import NotificationCard from './NotificationCard';
import UserProfileCard from './UserProfileCard';
import AreaInfoPanel from './AreaInfoPanel';
import Footer from './Footer';
import MainModal from '../MainModal';
import TotalSearch from './TotalSearch';

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

            {location.pathname === '/' && (
                <AreaInfoPanel
                    isActive={currentPanelID === 3}
                    onShow={setCurrentPanel}
                />
            )}

            <Header onShow={setCurrentPanel} />

            <TotalSearch
                isActive={currentPanelID === 4}
                onShow={setCurrentPanel}
            />

            <Outlet name="main" />

            {location.pathname !== '/' && <Footer />}
        </>
    );
};

export default BaseLayout;
