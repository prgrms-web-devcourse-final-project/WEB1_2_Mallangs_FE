import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import NotificationCard from './NotificationCard';
import UserProfileCard from './UserProfileCard';
import AreaInfoPanel from './AreaInfoPanel';
import Footer from './Footer';
import TotalSearch from './TotalSearch';

const BaseLayout = () => {
    const [currentPanelID, setCurrentPanel] = useState(3);
    const [notiStatus, setNotiStatus] = useState(0);
    const location = useLocation();

    const handleNotifications = (notiValues) => {
        setNotiStatus(notiValues);
    };

    return (
        <>
            <NotificationCard
                isActive={currentPanelID === 1}
                onShow={setCurrentPanel}
                onAlarm={handleNotifications}
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

            <Header notiCount={notiStatus} onShow={setCurrentPanel} />

            <Outlet />

            <Footer />

            {/* <TotalSearch /> */}
        </>
    );
};

export default BaseLayout;
