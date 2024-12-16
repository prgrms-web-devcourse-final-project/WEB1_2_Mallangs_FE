import { overlay } from 'overlay-kit';
import MainModalCover from '../common/MainModalCover';

const TestModal = ({ open, onClose }) => {
    const closeModal = () => {
        onClose();

        overlay.unmount('mainModal');
    };

    if (open === true)
        return (
            <div id="main-modal-backdrop">
                <aside id="main-modal">
                    <MainModalCover onClose={onClose} />

                    <section id="main-modal-body">
                        <div id="main-modal-sidebar">
                            <ul id="main-modal-side-menu"></ul>
                        </div>

                        <div id="main-modal-content-container">
                            <nav id="main-modal-navigation"></nav>

                            <div id="main-modal-content"></div>
                        </div>
                    </section>
                </aside>
            </div>
        );
};

export default TestModal;
