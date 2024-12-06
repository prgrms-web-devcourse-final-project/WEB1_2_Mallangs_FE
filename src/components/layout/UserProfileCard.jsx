import { useModalStore } from '../../stores/modalStatus';
import Remix from '../common/Remix';
import MallangItem from '../common/MallangItem';

const UserProfileCard = ({
    currentPanel,
    setPanel,
    userObject = {
        userID: 0,
        userName: '알 수 없음',
        userProfileImage: null,
        userPets: [
            {
                petID: null,
                petName: '아직 설정한 말랑이가 없어요.',
                petImage: null,
                petType: '말랑이',
                petAge: 0,
                petGender: '알 수 없음',
                isMain: true,
            },
        ],
    },
}) => {
    const toggleModal = useModalStore((state) => state.toggleModal);
    const setModalType = useModalStore((state) => state.setModalType);
    const setModalData = useModalStore((state) => state.setModalData);
    const mainPet = userObject.userPets.find((pet) => pet.isMain === true);

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

            <MallangItem mallangObject={mainPet} isEditMode={true} />

            <hr />

            <div className="profile-card-body">
                <div className="datetime-row">
                    <p>마지막 접속 시간</p>

                    <span>·</span>

                    <p>{'2024. 01. 01.'}</p>
                </div>

                <button type="button" id="button-user-logout" title="로그아웃">
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
                            threadTitle: mainPet.petName,
                            mainCategory: mainPet.petType,
                            subCategory1: mainPet.petAge + '세',
                            subCategory2: mainPet.petGender,
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
