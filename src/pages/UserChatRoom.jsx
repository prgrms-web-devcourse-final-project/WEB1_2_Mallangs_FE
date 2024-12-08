import { useEffect, useRef } from 'react';
import Remix from '../components/common/Remix';
import NameTag from '../components/common/NameTag';
import ModalDateSeparator from '../components/common/ModalDateSeparator';
import ModalInstruction from '../components/common/ModalInstruction';
import ChatItem from '../components/common/ChatItem';

const UserChatRoom = ({ sessionID = 0 }) => {
    const chatList = useRef();
    const chatOppsite = {
        userID: 1,
        userImage: 'https://picsum.photos/seed/choi/128/128',
        userName: '최사용자',
    };

    const handleRefreshMessage = () => {
        // 대화창이 refresh 되었을 때 대화창을 맨 아래로 내릴 것
        chatList.current.scrollTop = chatList.current.scrollHeight;
    };

    useEffect(() => {
        handleRefreshMessage();
    }, []);

    return (
        <div id="user-chat-room-container">
            <div id="user-chat-room-body" ref={chatList}>
                <div id="user-chat-room-controls">
                    <button
                        type="button"
                        onClick={() => console.log(sessionID)}
                    >
                        <Remix iconName={'arrow-left-s-line'} />
                    </button>

                    <NameTag userObject={chatOppsite} />

                    <button type="button">
                        <Remix iconName={'close-line'} />
                    </button>
                </div>

                <div className="user-common-item-list">
                    <ModalInstruction
                        instEmoji="🎉"
                        inst
                        instHeadline={chatOppsite.userName}
                        instContent="님과의 대화가 시작되었습니다. 상대방의 금전 요구 등으로 인한 피해를 입지 않도록 주의해 주세요."
                    />
                </div>

                <div id="user-chat-room-stacks">
                    <section id="user-chat-date-block-container">
                        <article className="user-chat-date-block">
                            <ModalDateSeparator dateString="2024-01-01" />

                            <div className="user-common-item-list">
                                <ChatItem />

                                <ChatItem
                                    chatFrom={'opposite'}
                                    chatUser={chatOppsite}
                                />

                                <ChatItem />

                                <ChatItem
                                    chatFrom={'opposite'}
                                    chatUser={chatOppsite}
                                />

                                <ChatItem />

                                <ChatItem
                                    chatFrom={'opposite'}
                                    chatUser={chatOppsite}
                                />
                            </div>
                        </article>
                    </section>
                </div>
            </div>

            <div id="user-chat-room-input-container">
                <hr />

                <div className="chat-input-wrapper">
                    <input
                        type="text"
                        id="input-chat-text"
                        placeholder="대화 입력..."
                    />

                    <button type="button" className="buttons">
                        <span>보내기</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserChatRoom;
