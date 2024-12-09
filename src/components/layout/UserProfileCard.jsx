import { useNavigate } from 'react-router-dom';
import { useModalStore } from '../../stores/modalStatus';

import Remix from '../common/Remix';
import MallangItem from '../common/MallangItem';

import { logoutApi } from '../../api/userApi';

const UserProfileCard = ({ currentPanel, setPanel, userObject }) => {
    const navigate = useNavigate();
    const { toggleModal, setModalType, setProfileData } = useModalStore(
        (state) => state,
    );

    const mainPet = userObject.pets.find((pet) => pet.isMain === true);

    const handleLogout = async () => {
        try {
            await logoutApi();
            window.location.href = '/';
        } catch (error) {
            console.error('로그아웃 실패:', error);
            alert('로그아웃에 실패했습니다.');
        }
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

            <MallangItem mallangObject={mainPet} isEditMode={true} />

            <hr />

            <div className="profile-card-body">
                <div className="datetime-row">
                    <p>마지막 접속 시간</p>

                    <span>·</span>

                    <p>{'2024. 01. 01.'}</p>
                </div>

                <button
                    type="button"
                    id="button-user-logout"
                    title="로그아웃"
                    onClick={handleLogout}
                >
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
                        setModalType('profile');
                        setProfileData(userObject);
                        toggleModal(true);
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
