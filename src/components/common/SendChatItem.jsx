const SendChatItem = () => {
    return (
        <div className="chat-message-container">
            <div className="chat-content-container">
                <div className="chat-text-bubble">
                    <span className="chat-text">사용자가 전송한 대화 내용</span>
                </div>

                <div className="chat-time-container">
                    <span className="time">16:35:54</span>
                    <span className="show-read-text">읽음</span>
                </div>
            </div>
        </div>
    );
};

export default SendChatItem;
