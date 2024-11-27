import MallangItem from '../common/MallangItem';
import Remix from '../common/Remix';

const UserProfileCard = () => {
    const tempPet = {
        // 임시 대표 말랑이 객체
        userID: 123,
        petImage: null,
        petName: '정신차려이각박한세상속에서',
        petType: '고양이',
        petAge: 4,
        petGender: '수컷',
        isMain: true,
    };

    return (
        <aside id="user-profile-card">
            <div className="profile-card-title-bar">
                <Remix iconName={'user-fill'} />
                <p>대표 말랑이</p>
            </div>

            <hr />

            <MallangItem mallangObject={tempPet} isEditMode={true} />

            <hr />

            <div className="profile-card-controls">
                <button
                    type="button"
                    id="button-show-profile"
                    className="profile-card-buttons"
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
