import { useModalStore } from '../stores/modalStatus';
import Remix from '../components/common/Remix';
import UserProfileImage from '../components/common/UserProfileImage';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import tempDB from '../datas/temp-db.json';

const UserProfile = () => {
    const modalData = useModalStore((state) => state.modalData);

    const currentUser = tempDB.users.find(
        (user) => user.id === modalData.threadAuthor.userID,
    );

    return (
        <>
            <div id="user-basic-informations">
                <UserProfileImage
                    imageSrc={currentUser.userImage}
                    imageSize={9}
                />

                <h5>{currentUser.userName}</h5>
                <p>{currentUser.userAccount}</p>

                <div className="user-informations-introduce">
                    <Remix iconName={'double-quotes-l'} iconSize={1.2} />

                    <p>{currentUser.userDescription}</p>

                    <Remix iconName={'double-quotes-r'} iconSize={1.2} />
                </div>
            </div>

            <ModalSectionTitle sectionTitle="상세정보" />

            <div className="user-common-item-list">
                <div>사용자 상세 정보</div>
            </div>
        </>
    );
};

export default UserProfile;
