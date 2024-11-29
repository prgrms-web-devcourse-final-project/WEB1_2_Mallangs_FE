import { useRef, useState } from 'react';
import MainModalCover from './common/MainModalCover';

const MainModal = () => {
    const [modalStatus, setModalStatus] = useState({ isOpened: true });
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
                    <MainModalCover />

                    <section id="main-modal-body">
                        <div id="main-modal-sidebar">
                            <div id="main-modal-signature-image">
                                <div></div>
                            </div>

                            <ul>
                                <li>멘유</li>
                            </ul>
                        </div>

                        <div id="main-modal-content-container">
                            <nav id="main-modal-navigation"></nav>

                            <div id="main-modal-content"></div>
                        </div>
                    </section>
                </div>
            </div>
        );
};

export default MainModal;
