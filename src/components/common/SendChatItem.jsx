import ProfileImage from '../../assets/images/icon-user.svg?react';

const SendChatItem = ({
    message = '그렇구나 이것은 답변',
    time = '12:34:58',
}) => {
    return (
        <div className="send-chat-item">
            <div className="send-chat-item-message-container">
                <div className="send-chat-item-message-container-content">
                    <div className="send-chat-item-message-container-content-bubble">
                        <div className="send-chat-item-message-container-content-bubble-text">
                            {message}
                        </div>
                    </div>

                    <div className="send-chat-item-message-container-content-datetime">
                        <div className="send-chat-item-message-container-content-datetime-time">
                            {time}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendChatItem;
