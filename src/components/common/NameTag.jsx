import UserProfileImage from './UserProfileImage';

const NameTag = ({
    userObject = { userID: 0, userImage: null, userName: '홍길동' },
}) => {
    return (
        <div className="user-nametag">
            <UserProfileImage imageSrc={userObject.userImage} />

            <div className="nametag-username">{userObject.userName}</div>
        </div>
    );
};

export default NameTag;
