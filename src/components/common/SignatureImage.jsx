import { useModalStore } from '../../stores/modalStatus';
import Remix from './Remix';

const SignatureImage = () => {
    const modalStatus = useModalStore((state) => state.modalStatus);

    const handleImageUpload = () => {
        console.log(1);
    };

    const handleCategorySelect = () => {
        console.log(1);
    };

    return (
        <div className="cover-signature-image-container">
            <div id="main-modal-signature-image">
                <div className="signature-image-wrapper">
                    {modalStatus.threadUser.userImage &&
                    modalStatus.threadType === 'profile' ? (
                        <img
                            className="signature-image"
                            src={modalStatus.threadUser.userImage}
                            alt="시그니처 이미지"
                        />
                    ) : null}

                    {modalStatus.editMode &&
                    modalStatus.threadType === 'profile' ? (
                        <button
                            type="button"
                            className="signature-image-controls"
                            onClick={handleImageUpload}
                        >
                            <Remix iconName={'add-line'} iconSize={1.8} />

                            <p>이미지 변경</p>
                        </button>
                    ) : modalStatus.threadType === 'places' ? (
                        <button
                            type="button"
                            className="signature-image-controls"
                            onClick={handleCategorySelect}
                        >
                            <Remix iconName={'add-line'} iconSize={1.8} />

                            <p>주 분류 선택</p>
                        </button>
                    ) : null}
                </div>

                <button
                    type="button"
                    className={`button-signature-information ${modalStatus.threadType === 'places' && 'information'}`}
                    title={
                        modalStatus.threadType === 'places'
                            ? '장소 정보'
                            : '설정'
                    }
                >
                    <Remix
                        iconName={
                            modalStatus.threadType === 'places'
                                ? 'information-2-fill'
                                : 'settings-3-fill'
                        }
                        iconSize={1.2}
                    />
                </button>
            </div>
        </div>
    );
};

export default SignatureImage;
