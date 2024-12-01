import { useRef, useState } from 'react';
import { useNotificationStore } from '../../stores/notificationStatus';
import Remix from '../common/Remix';
import EmptyList from '../common/EmptyList';

const NotiReplyItem = ({ replyObject }) => {
    // 댓글 알림 아이템
    return (
        <li
            className={`notification-reply-item ${replyObject.isRead ? null : 'unread'}`}
        >
            <div className="notification-reply-titlebar">
                <Remix iconName={'megaphone-line'} />
                <p>작성하신 게시물에 새로운 댓글이 있어요.</p>
            </div>

            <hr />

            <div className="notification-reply-content">
                {replyObject.replyContent}
            </div>
        </li>
    );
};

const NotiMessageItem = ({ messageObject }) => {
    // 메시지 알림 아이템
    return (
        <li
            className={`notification-message-item ${messageObject.unReadCount > 0 ? 'unread' : null}`}
        >
            <div className="notification-message-image-wrapper">
                <Remix iconName={'user-fill'} iconSize={2.2} />

                {messageObject.userProfileImage && (
                    <img
                        src={messageObject.userProfileImage}
                        alt="대화 상대 프로필 이미지"
                    />
                )}
            </div>

            <dl className="notification-message-descriptions">
                <dt className="notification-message-username">
                    {messageObject.oppositeUser}
                </dt>

                <hr />

                <dd className="notification-message-content">
                    <span className="notification-message-text">
                        {messageObject.latestMessage}
                    </span>

                    {messageObject.unReadCount > 0 && (
                        <p className="notification-message-count">
                            {messageObject.unReadCount > 999
                                ? 999 + '+'
                                : messageObject.unReadCount}
                        </p>
                    )}
                </dd>
            </dl>
        </li>
    );
};

const NotificationCard = ({ isActive, onShow }) => {
    const alarms = useNotificationStore((state) => state.notifications);
    const clearReadAlarms = useNotificationStore(
        (state) => state.clearReadAlarms,
    );
    const [currentTabID, setCurrentTab] = useState(0);

    const replyNotiList = alarms.replies.map((item, index) => {
        // 출력 리스트의 빠른 전환을 위한 맵 처리
        return <NotiReplyItem replyObject={item} key={index} />;
    });

    const messageNotiList = alarms.messages.map((item, index) => {
        // 출력 리스트의 빠른 전환을 위한 맵 처리
        return <NotiMessageItem messageObject={item} key={index} />;
    });

    const unReadReplies = alarms.replies.filter((item) => !item.isRead); // 읽지 않은 댓글 알림
    const unReadMessages = alarms.messages.filter(
        (item) => item.unReadCount > 0,
    ); // 읽지 않은 메시지 알림

    const bgElement = useRef(null);

    const handleMouseHover = (e) => {
        const trueX = e.nativeEvent.layerX;
        const trueY = e.nativeEvent.layerY;

        bgElement.current.style.cssText = `--object-x: ${trueX}px; --object-y: ${trueY}px;`;
    };

    return (
        <aside id="notification-card" className={isActive ? 'on' : null}>
            <div className="notification-tab-container">
                <button
                    type="button"
                    className={`notification-tab-button replies ${currentTabID === 0 && 'on'}`}
                    title={`${unReadReplies.length}개의 새 댓글이 있어요.`}
                    onClick={() => setCurrentTab(0)}
                >
                    <Remix
                        iconName={`chat-thread-${currentTabID === 0 ? 'fill' : 'line'}`}
                    />

                    <p className="button-label">
                        <span className="button-label-text">댓글</span>
                        <span className="button-label-value">
                            ({unReadReplies.length})
                        </span>
                    </p>
                </button>

                <button
                    type="button"
                    className={`notification-tab-button messages ${currentTabID === 1 && 'on'}`}
                    title={`${unReadMessages.length}개의 새 메시지가 있어요.`}
                    onClick={() => setCurrentTab(1)}
                >
                    <Remix
                        iconName={`chat-quote-${currentTabID === 1 ? 'fill' : 'line'}`}
                    />

                    <p className="button-label">
                        <span className="button-label-text">메시지</span>
                        <span className="button-label-value">
                            ({unReadMessages.length})
                        </span>
                    </p>
                </button>
            </div>

            <hr />

            <ul className="notification-list">
                {currentTabID === 0 ? (
                    replyNotiList.length > 0 ? (
                        replyNotiList
                    ) : (
                        <EmptyList placeHolderText="아직 받은 댓글이 없어요." />
                    )
                ) : messageNotiList.length > 0 ? (
                    messageNotiList
                ) : (
                    <EmptyList placeHolderText="아직 받은 메시지가 없어요." />
                )}
            </ul>

            <hr />

            <div
                className="notification-clear-button-wrapper"
                ref={bgElement}
                onMouseMove={handleMouseHover}
            >
                <button
                    type="button"
                    id="button-clear-notifications"
                    title="확인한 알림 모두 지우기"
                    onClick={clearReadAlarms}
                >
                    <Remix iconName={'delete-bin-6-line'} />

                    <span>확인한 알림 모두 지우기</span>
                </button>

                <button
                    type="button"
                    id="button-notification-card-close"
                    title="알림 창 닫기"
                    onClick={() => onShow(0)}
                >
                    <Remix iconName={'close-line'} iconSize={1} />
                </button>
            </div>
        </aside>
    );
};

export default NotificationCard;
