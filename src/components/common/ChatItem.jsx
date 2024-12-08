import Remix from './Remix';
import dateFormat from '../../utils/dateFormat';
import hourFormat from '../../utils/hourFormat';

const ChatItem = ({
    chatFrom = 'my', // my, opposite
    chatUser = { userID: 0, userImage: null, userName: '대화 상대' },
    chatContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas laboriosam, debitis veniam nobis eligendi sequi modi deleniti repellat harum aliquid possimus, repellendus, quisquam voluptatem! Exercitationem voluptas dolorem natus architecto laborum.',
    dateTime = '1970-01-01',
    isRead = true,
}) => {
    return (
        <article className={`chat-item ${chatFrom}`}>
            {chatFrom === 'opposite' && (
                <div className="chat-user-image-container">
                    {chatUser.userImage ? (
                        <img
                            className="chat=user-image"
                            src={chatUser.userImage}
                            alt="사용자 프로필 이미지"
                        />
                    ) : (
                        <Remix iconName={'user-fill'} />
                    )}
                </div>
            )}

            <dl className="chat-body">
                {chatFrom === 'opposite' && (
                    <dd className="chat-user-name">
                        <span>{chatUser.userName}</span>
                    </dd>
                )}

                <dt className="chat-content-container">
                    <span>{chatContent}</span>
                </dt>

                <dd className="datetime-row chat-datetime-container">
                    <p>{dateFormat(dateTime)}</p>

                    <span>·</span>

                    <p>{hourFormat(dateTime)}</p>

                    {chatFrom === 'my' && (
                        <>
                            <span>·</span>

                            {isRead ? (
                                <p>읽음</p>
                            ) : (
                                <>
                                    <p>읽지 않음</p>

                                    <span
                                        style={{
                                            display: 'inline-block',
                                            width: '.4rem',
                                            height: '.4rem',
                                            borderRadius: 'var(--rad-full)',
                                            backgroundColor:
                                                'rgb(var(--clr-notify))',
                                            verticalAlign: 'middle',
                                        }}
                                    ></span>
                                </>
                            )}
                        </>
                    )}
                </dd>
            </dl>
        </article>
    );
};

export default ChatItem;
