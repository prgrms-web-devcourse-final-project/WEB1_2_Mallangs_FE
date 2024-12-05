import { useModalStore } from '../../stores/modalStatus';
import MallangItem from '../common/MallangItem';
import Remix from '../common/Remix';

const UserProfileCard = ({ currentPanel, setPanel, userObject = {} }) => {
    const toggleModal = useModalStore((state) => state.toggleModal);
    const setModalType = useModalStore((state) => state.setModalType);
    const setModalData = useModalStore((state) => state.setModalData);
    const tempPet = {
        // 임시 대표 말랑이 객체
        userID: 123,
        userName: '김사용자',
        petImage: 'https://picsum.photos/36/36?random=1',
        petName: '김땅콩',
        petType: '고양이',
        petAge: 4,
        petGender: '수컷',
        isMain: true,
    };

    return (
        <aside
            id="user-profile-card"
            className={currentPanel === 'user-profile' ? 'on' : null}
        >
            <div className="profile-card-title-bar">
                <Remix iconName={'user-fill'} />

                <p>대표 말랑이</p>

                <button
                    type="button"
                    id="button-profile-card-close"
                    title="대표 말랑이 창 닫기"
                    onClick={() => setPanel(null)}
                >
                    <Remix iconName={'close-line'} iconSize={1} />
                </button>
            </div>

            <hr />

            <MallangItem mallangObject={tempPet} isEditMode={true} />

            <hr />

            <div className="profile-card-body">
                <div className="datetime-row">
                    <p>마지막 접속 시간</p>

                    <span>·</span>

                    <p>{'2024. 01. 01.'}</p>
                </div>

                <button>
                    <span>로그아웃</span>
                </button>
            </div>

            <hr />

            <div className="profile-card-controls">
                <button
                    type="button"
                    id="button-show-profile"
                    className="profile-card-buttons"
                    onClick={() => {
                        toggleModal(true);
                        setModalType('profile');
                        setModalData({
                            latitude: 0.0,
                            longitude: 0.0,
                            threadTitle: tempPet.userName,
                            mainCategory: tempPet.petType,
                            subCategory1: tempPet.petAge + '세',
                            subCategory2: tempPet.petGender,
                            subCategory3: null,
                        });
                    }}
                >
                    <Remix iconName={'information-2-fill'} />

                    <span>프로필</span>
                </button>

                <button
                    type="button"
                    id="button-edit-profile"
                    className="profile-card-buttons"
                >
                    <Remix iconName={'edit-box-line'} />
                    <span>개인정보 수정</span>
                </button>
            </div>
        </aside>
    );
};

export default UserProfileCard;
