import Remix from './Remix';

import nullImage from '../../assets/images/placeholder-paw.png';

const UserProfileImage = ({ imageSrc = null, imageSize = 1.2 }) => {
    const handleImgError = (e) => {
        e.currentTarget.src = nullImage;
    };

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
                    onError={(e) => handleImgError(e)}
                />
            )}
        </div>
    );
};

export default UserProfileImage;
