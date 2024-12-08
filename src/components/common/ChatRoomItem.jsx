import UserProfileImage from './UserProfileImage';
import dateFormat from '../../utils/dateFormat';
import hourFormat from '../../utils/hourFormat';
import Remix from './Remix';

const ChatRoomItem = ({
    chatUser = '홍길동',
    chatLatestMessage = '가장 최근에 주고받은 대화 내용',
    chatMessageStack = 0,
    chatLetestDateTime = '1970-01-01 16:36:45',
    onNav,
}) => {
    return (
        <div
            className="chat-room-item"
            onClick={() =>
                onNav({
                    label: '1 : 1 대화',
                    value: 'user-chat-room',
                    count: 0,
                })
            }
        >
            <UserProfileImage imageSize={1.8} />

            <dl className="chat-room-descriptions">
                <dt className="chat-room-opposite">{chatUser}</dt>

                <dd className="chat-room-latest-message">
                    <span className="chat-room-message-text">
                        {chatLatestMessage}
                    </span>

                    {chatMessageStack > 0 && (
                        <span className="chat-room-stack-indicator">
                            {chatMessageStack > 999
                                ? 999 + ' +'
                                : chatMessageStack}
                        </span>
                    )}
                </dd>

                <dd className="datetime-row chat-room-latest-time">
                    <p>{dateFormat(chatLetestDateTime)}</p>

                    <span>·</span>

                    <p>{hourFormat(chatLetestDateTime)}</p>
                </dd>
            </dl>

            <div className="chat-room-controls">
                <div>
                    <button
                        type="button"
                        className="button-close-chat-session"
                        title="대화 닫기"
                    >
                        <Remix iconName={'chat-off-fill'} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatRoomItem;
