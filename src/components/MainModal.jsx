import { useRef, useState } from 'react';
import MainModalCover from './common/MainModalCover';
import Remix from './common/Remix';

const MainModal = ({ isActive, onShow, modalMode, children }) => {
    const [modalStatus, setModalStatus] = useState({ isOpened: false });
    const modalBackdrop = useRef(null);

    if (modalStatus.isOpened)
        return (
            <div
                id="main-modal-backdrop"
                ref={modalBackdrop}
                onClick={(e) => {
                    if (e.target === modalBackdrop.current)
                        setModalStatus(false);
                }}
            >
                <div id="main-modal">
                    <MainModalCover
                        onClose={() => setModalStatus({ isOpened: false })}
                    />

                    <section id="main-modal-body">
                        <div id="main-modal-sidebar">
                            <ul id="main-modal-side-menu">
                                <li className="side-menu-item">
                                    <Remix iconName={'subtract-line'} />

                                    <span>오늘 아침 메뉴</span>
                                </li>

                                <li className="side-menu-item">
                                    <Remix iconName={'subtract-line'} />

                                    <span>오늘 점심 메뉴</span>
                                </li>

                                <li className="side-menu-item on">
                                    <Remix iconName={'arrow-right-s-line'} />

                                    <span>오늘 저녁 메뉴</span>
                                </li>
                            </ul>
                        </div>

                        <div id="main-modal-content-container">
                            <nav id="main-modal-navigation">
                                <ul>
                                    <li className="modal-tab-navigation-item">
                                        <span>메뉴명</span>
                                    </li>

                                    <li className="modal-tab-navigation-item on">
                                        <span>메뉴명</span>

                                        <span>(2)</span>
                                    </li>
                                </ul>
                            </nav>

                            <div id="main-modal-content">{children}</div>
                        </div>
                    </section>
                </div>
            </div>
        );
};

export default MainModal;
