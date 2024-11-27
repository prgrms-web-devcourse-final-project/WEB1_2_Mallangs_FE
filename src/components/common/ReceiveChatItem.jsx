const ChatItem = () => {
    return (
        <div className="chat-item">
            {/* 사용자 프로필 이미지 */}
            <div className="chat-item-profile">
                <img
                    className="chat-item-icon"
                    src="src/assets/images/icon-user.svg"
                />
            </div>

            {/* 채팅 메시지 컨테이너 */}
            <div className="chat-item-content">
                {/* 사용자 이름 */}
                <span className="chat-item-username">홍길동</span>

                {/* 채팅 메시지 */}
                <div className="chat-item-bubble">대화 내용</div>

                {/* 시간 표시 */}
                <span className="chat-item-time">16:36:54</span>
            </div>
        </div>
    );
};

export default ChatItem;
