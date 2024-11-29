import { useState } from 'react';
import Remix from '../common/Remix';
import EmptyList from '../common/EmptyList';
import tempReplies from '../../datas/temp-notification-replies.json'; // 임시 댓글 데이터
import tempMessages from '../../datas/temp-notification-messages.json'; // 임시 메시지 데이터

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

const NotificationCard = ({ isActive, onShow, onAlarm }) => {
    /**
     * 기능 구현시 참고사항 메모
     *
     * tempReplies: 임시 댓글 데이터 배열
     * tempMessages: 임시 메시지 데이터 배열
     *
     * fetch한 실 데이터의 배열을 대입하여 데이터 형식만 맞추면 출력은 바로 해결됨
     * 댓글과 메시지 모두 갱신일자가 최신인 것을 먼저 가지고 와야 한다. (DB 단에서 먼저 처리하는 편이 퍼포먼스가 높다.)
     */

    const [currentTabID, setCurrentTab] = useState(0);

    const replyNotiList = tempReplies.map((item, index) => {
        // 출력 리스트의 빠른 전환을 위한 맵 처리
        return <NotiReplyItem replyObject={item} key={index} />;
    });

    const messageNotiList = tempMessages.map((item, index) => {
        // 출력 리스트의 빠른 전환을 위한 맵 처리
        return <NotiMessageItem messageObject={item} key={index} />;
    });

    const unReadReplies = tempReplies.filter((item) => !item.isRead); // 읽지 않은 댓글 알림
    const unReadMessages = tempMessages.filter((item) => item.unReadCount > 0); // 읽지 않은 메시지 알림

    if (unReadReplies.length > 0 || unReadMessages.length > 0)
        onAlarm(unReadReplies.length + unReadMessages.length); // 읽지 않은 알림이 1개 이상이면 상위 요소인 BaseLayout으로 해당 내용을 올려보냄

    return (
        <aside id="notification-card" className={isActive ? 'on' : null}>
            <div className="notification-tab-container">
                <button
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
                {(currentTabID === 0 ? replyNotiList : messageNotiList) ??
                    EmptyList}
            </ul>

            <hr />

            <div className="notification-clear-button-wrapper">
                <button
                    type="button"
                    id="button-clear-notifications"
                    title="확인한 알림 모두 지우기"
                >
                    <Remix iconName={'delete-bin-6-line'} />

                    <span>확인한 알림 모두 지우기</span>
                </button>
            </div>
        </aside>
    );
};

export default NotificationCard;
