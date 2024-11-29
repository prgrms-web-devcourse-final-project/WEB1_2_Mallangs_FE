import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import NotificationCard from './NotificationCard';
import UserProfileCard from './UserProfileCard';
import AreaInfoPanel from './AreaInfoPanel';
import Footer from './Footer';
import MainModal from '../MainModal';
import TotalSearch from './TotalSearch';

const BaseLayout = () => {
    const [currentPanelID, setCurrentPanel] = useState(0);
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

            <MainModal
                isActive={currentPanelID === 99}
                onShow={setCurrentPanel}
            >
                <div style={{ padding: '.8rem' }}>
                    그렇다... 내용을 슬롯으로 집어넣는 것이다
                </div>
            </MainModal>
        </>
    );
};

export default BaseLayout;
