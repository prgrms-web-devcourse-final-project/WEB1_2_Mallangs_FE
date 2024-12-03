import Remix from '../components/common/Remix';
import UserProfileImage from '../components/common/UserProfileImage';
import ModalSectionTitle from '../components/common/ModalSectionTitle';

const UserProfile = () => {
    return (
        <>
            <div id="user-basic-informations">
                <UserProfileImage imageSize={9} />

                <h5>김사용자</h5>
                <p>kim_4yongjar</p>

                <div className="user-informations-introduce">
                    <Remix iconName={'double-quotes-l'} iconSize={1.2} />

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores voluptatem pariatur fuga at eius quos quam modi
                        quaerat dignissimos excepturi magni, tenetur quas
                        temporibus sapiente minus saepe. Beatae, maiores
                        laudantium!
                    </p>

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
