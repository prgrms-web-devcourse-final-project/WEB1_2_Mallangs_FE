import UserNametagIcon from '../../assets/images/icon-user-nametag.svg?react';

const NameTag = ({ name = '홍길동' }) => {
    return (
        <div className="nametag-content">
            <div className="nametag-content-icon">
                <UserNametagIcon />
            </div>
            <div className="nametag-content-username">{name}</div>
        </div>
    );
};

export default NameTag;
