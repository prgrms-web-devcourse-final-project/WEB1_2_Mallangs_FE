import { useModalStore } from '../stores/modalStatus';

import Remix from '../components/common/Remix';
import UserProfileImage from '../components/common/UserProfileImage';
import ModalSectionTitle from '../components/common/ModalSectionTitle';

import dateFormat from '../utils/dateFormat';
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
                <dl className="user-common-labeled-row">
                    <dt>
                        <span>가입일</span>
                    </dt>

                    <dd>
                        <span>{dateFormat(currentUser.createdAt)}</span>
                    </dd>
                </dl>

                <dl className="user-common-labeled-row">
                    <dt>
                        <span>기타 정보</span>
                    </dt>

                    <dd>
                        <span>
                            {'... (이후 사용자 설정 구현 후 추가 예정)'}
                        </span>
                    </dd>
                </dl>
            </div>
        </>
    );
};

export default UserProfile;
