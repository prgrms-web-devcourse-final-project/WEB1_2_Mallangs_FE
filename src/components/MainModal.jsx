import { useRef, useState } from 'react';
import { useModalStore } from '../stores/modalStatus';
import Remix from './common/Remix';
import MainModalCover from './common/MainModalCover';

const MainModal = ({ children }) => {
    const modalDialog = useRef(null);
    const isItOn = useModalStore((state) => state.isModalShowing);
    const modalStatus = useModalStore((state) => state.modalStatus);
    const modalData = modalStatus.modalData;
    const [currentTabIndex, setTabIndex] = useState(0);
    const [currentSlaveIndex, setSlaveIndex] = useState(0);

    if (isItOn) {
        document.body.classList.add('prevent-scroll');

        return (
            <aside id="main-modal" ref={modalDialog}>
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
                                        <Remix iconName={'subtract-line'} />

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

                        <div id="main-modal-content">{children}</div>
                    </div>
                </section>
            </aside>
        );
    } else {
        document.body.classList.remove('prevent-scroll');
    }
};

export default MainModal;
