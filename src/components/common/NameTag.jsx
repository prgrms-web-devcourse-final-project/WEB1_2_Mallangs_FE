import Remix from './Remix';

const NameTag = ({
    userObject = { userID: 0, userImage: null, userName: '홍길동' },
}) => {
    return (
        <div className="nametag-content">
            <div className="nametag-content-icon">
                <Remix iconName={'user-fill'} iconSize={1} />

                {userObject.userImage && (
                    <img
                        className="user-image"
                        src={userObject.userImage}
                    ></img>
                )}
            </div>

            <div className="nametag-content-username">
                {userObject.userName}
            </div>
        </div>
    );
};

export default NameTag;
