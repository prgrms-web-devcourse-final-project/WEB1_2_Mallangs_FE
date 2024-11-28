import ProfileImage from '../../assets/images/icon-user.svg?react';

const SendChatItem = ({
    message = '그렇구나 이것은 답변',
    time = '12:34:58',
}) => {
    return (
        <div className="chat-item">
            <div className="chat-item-message-container">
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

export default SendChatItem;
