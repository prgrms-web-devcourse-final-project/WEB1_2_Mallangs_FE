import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import NotificationCard from './NotificationCard';
import UserProfileCard from './UserProfileCard';
import AreaInfoPanel from './AreaInfoPanel';
import Footer from './Footer';
import MainModal from '../MainModal';
import TotalSearch from './TotalSearch';
import SettingMallangs from '../common/SettingMallangs';

const BaseLayout = () => {
    const [currentPanelID, setCurrentPanel] = useState(0);
    const location = useLocation();

    if (location.pathname === '/') {
        document.body.classList.add('prevent-scroll');
    }

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

            {location.pathname === '/' && (
                <AreaInfoPanel
                    isActive={currentPanelID === 3}
                    onShow={setCurrentPanel}
                />
            )}

            <Header onShow={setCurrentPanel} />

            <Outlet />

            {location.pathname !== '/' && <Footer />}

            {/* <TotalSearch /> */}

            <MainModal>
                <div style={{ padding: '.8rem' }}>
                    <SettingMallangs />
                </div>
            </MainModal>
        </>
    );
};

export default BaseLayout;
