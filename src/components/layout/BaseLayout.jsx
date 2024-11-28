import { Outlet } from 'react-router-dom';
import Header from './Header';
import NotificationCard from './NotificationCard';
import UserProfileCard from './UserProfileCard';
import AreaInfoPanel from './AreaInfoPanel';
import Footer from './Footer';
import { useState } from 'react';

const BaseLayout = () => {
    const [currentPanelID, setCurrentPanel] = useState(3);

    return (
        <>
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
            <Footer />
        </>
    );
};

export default BaseLayout;
