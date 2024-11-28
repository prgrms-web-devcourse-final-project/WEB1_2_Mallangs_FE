import ProfileImage from '../../assets/images/icon-user.svg?react';

const ChatItem = ({
    username = '홍길동',
    message = '요즘 drowning 이라는 노래를 하루에 10000번 듣고 있음. 그거랑 이호광의 롤라,, 마약이야 진짜,, 롤~~~라~~~~ ㅋㅋㅋㅋㅋㅋ 개웃김 진짜ㅠㅠ',
    time = '12:34:56',
}) => {
    return (
        <div className="chat-item">
            <div className="chat-item-profile">
                <ProfileImage />
            </div>

            <div className="chat-item-message-container">
                <div className="chat-item-message-container-username">
                    {username}
                </div>

                <div className="chat-item-message-container-content">
                    <div className="chat-item-message-container-content-bubble">
                        <div className="chat-item-message-container-content-bubble-text">
                            {message}
                        </div>
                    </div>

                    <div className="chat-item-message-container-content-datetime">
                        <div className="chat-item-message-container-content-datetime-time">
                            {time}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatItem;
