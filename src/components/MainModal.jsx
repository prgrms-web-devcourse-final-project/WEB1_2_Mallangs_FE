import { useState } from 'react';
import { useModalStore } from '../stores/modalStatus';
import Remix from './common/Remix';
import MainModalCover from './common/MainModalCover';
import MallangProfile from '../pages/MallangProfile';
import UserProfile from '../pages/UserProfile';

const MainModal = ({ children }) => {
    const modalStatus = useModalStore((state) => state.modalStatus);
    const modalData = modalStatus.modalData;
    const [currentTabIndex, setTabIndex] = useState(0);
    const [currentSlaveIndex, setSlaveIndex] = useState(0);

    return (
        <aside id="main-modal">
            <MainModalCover />

            <section id="main-modal-body">
                <div id="main-modal-sidebar">
                    <ul id="main-modal-side-menu">
                        {modalData.masterNavigations[
                            currentTabIndex
                        ].slaveNavigations.map((menuItem, index) => {
                            return (
                                <li
                                    className={`side-menu-item ${index === currentSlaveIndex && 'on'}`}
                                    key={index}
                                    onClick={() => setSlaveIndex(index)}
                                >
                                    <Remix
                                        iconName={
                                            index === currentSlaveIndex
                                                ? 'arrow-right-s-line'
                                                : 'subtract-line'
                                        }
                                    />

                                    <span>{menuItem.label}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div id="main-modal-content-container">
                    <nav id="main-modal-navigation">
                        <ul>
                            {modalData.masterNavigations.map(
                                (menuItem, index) => {
                                    return (
                                        <li
                                            className={`modal-tab-navigation-item ${index === currentTabIndex && 'on'}`}
                                            key={index}
                                            onClick={() => {
                                                setTabIndex(index);
                                                setSlaveIndex(0);
                                            }}
                                        >
                                            <span>{menuItem.label}</span>

                                            {menuItem.count !== null &&
                                                `(${menuItem.count})`}
                                        </li>
                                    );
                                },
                            )}
                        </ul>
                    </nav>

                    <div id="main-modal-content">
                        {children}

                        <UserProfile />
                    </div>
                </div>
            </section>
        </aside>
    );
};

export default MainModal;
