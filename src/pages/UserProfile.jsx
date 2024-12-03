import Remix from '../components/common/Remix';
import UserProfileImage from '../components/common/UserProfileImage';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import { useModalStore } from '../stores/modalStatus';

const UserProfile = () => {
    const userData = useModalStore((state) => state.modalStatus.threadUser);

    return (
        <>
            <div id="user-basic-informations">
                <UserProfileImage imageSrc={userData.userImage} imageSize={9} />

                <h5>{userData.userName}</h5>
                <p>{userData.userAccount}</p>

                <div className="user-informations-introduce">
                    <Remix iconName={'double-quotes-l'} iconSize={1.2} />

                    <p>{userData.userDescription}</p>

                    <Remix iconName={'double-quotes-r'} iconSize={1.2} />
                </div>
            </div>

            <ModalSectionTitle sectionTitle="상세정보" />

            <div className="user-common-item-list">
                <div>사용자 뭐시기 상세 정보</div>
            </div>
        </>
    );
};

export default UserProfile;
