import { overlay } from 'overlay-kit';
import TestModal from '../components/TestModal';

const MissingListPage = () => {
    return (
        <div className="inner-wrapper">
            <button
                onClick={() => {
                    overlay.open(
                        ({ isOpen, close }) => {
                            return <TestModal open={isOpen} onClose={close} />;
                        },
                        { overlayId: 'mainModal' },
                    );
                }}
            >
                오버레이 테스트
            </button>
        </div>
    );
};

export default MissingListPage;
