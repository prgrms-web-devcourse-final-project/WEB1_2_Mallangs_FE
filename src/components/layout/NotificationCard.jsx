import { useState } from 'react';
import Remix from '../common/Remix';

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
                        <span className="notification-message-count">
                            {messageObject.unReadCount}
                        </span>
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
     */

    const [currentTabID, setCurrentTab] = useState(0);

    const tempReplies = [
        // 임시 댓글 데이터
        {
            articleID: 0,
            replyContent:
                '옥상에 올라가 그 밤을 옥상에 누워 그 달빛을 랄라 라라 랄라라라 황홀한 이 밤 랄라 랄랄라 라 라',
            isRead: false,
            receivedDateTime: '2024-01-01 16:36:45',
        },
        {
            articleID: 0,
            replyContent: '없는게 메리트라네 난 있는게 젊음이라네 난',
            isRead: true,
            receivedDateTime: '2024-01-01 16:36:45',
        },
        {
            articleID: 1,
            replyContent:
                '우리 좋았던 날들의 기억을 설탕에 켜켜이 묻어 언젠가 문득 너무 힘들 때면 꺼내어 볼 수 있게',
            isRead: true,
            receivedDateTime: '2024-01-01 16:36:45',
        },
        {
            articleID: 2,
            replyContent: '그때는 좋았었잖아 지금은 뭐가 또 달라졌지',
            isRead: true,
            receivedDateTime: '2024-01-01 16:36:45',
        },
    ];

    const tempMessages = [
        // 임시 메시지 데이터
        {
            sessionID: 0,
            oppositeUser: '보리꼬리너마저',
            userProfileImage: null,
            latestMessage: '이 차를 다 마시고 봄날으로 가자',
            unReadCount: 4,
            receivedDateTime: '2024-01-01 16:36:45',
        },
        {
            sessionID: 1,
            oppositeUser: '속좁은여학생',
            userProfileImage: null,
            latestMessage:
                '있잖아 내가 만약에 내가 너에게 가슴 아픈 말을 했다면 잊어줘',
            unReadCount: 3,
            receivedDateTime: '2024-01-01 16:36:45',
        },
        {
            sessionID: 2,
            oppositeUser: '박복례',
            userProfileImage: null,
            latestMessage:
                '미안해 내가 그러려던 건 아니었는데 하고 전화를 할까 말까',
            unReadCount: 0,
            receivedDateTime: '2024-01-01 16:36:45',
        },
    ];

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
                {currentTabID === 0 ? replyNotiList : messageNotiList}
            </ul>
        </aside>
    );
};

export default NotificationCard;
