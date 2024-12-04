import Remix from './Remix';

const UserProfileImage = ({ imageSrc = null, imageSize = 1.2 }) => {
    return (
        <div
            className="user-profile-image-container"
            style={{ '--user-image-size': `${imageSize}rem` }}
        >
            <Remix iconName={'user-fill'} />

            {imageSrc && (
                <img
                    className="user-profile-image"
                    src={imageSrc}
                    alt="사용자 프로필 이미지"
                />
            )}
        </div>
    );
};

export default UserProfileImage;
