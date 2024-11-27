import Header from './Header';
import NotificationCard from './NotificationCard';
import UserProfileCard from './UserProfileCard';
import AreaInfoPanel from './AreaInfoPanel';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
    return (
        <>
            <NotificationCard />
            <UserProfileCard />
            <AreaInfoPanel />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default BaseLayout;
