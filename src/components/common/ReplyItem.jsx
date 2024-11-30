import dateFormat from '../../utils/dateFormat';
import hourFormat from '../../utils/hourFormat';
import NameTag from './NameTag';
import Remix from './Remix';

const ReplyItem = ({
    index = 0,
    userObject = { userID: 0, userImage: null, userName: '홍길동' },
    replyContent = '작성된 내용이 없어요.',
    writtenDateTime = '1970-01-01',
    isMyReply = false,
    isEditMode = false,
}) => {
    return (
        <article className="reply-item">
            {isEditMode && (
                <div className="reply-item-checkbox-wrapper">
                    <input type="checkbox" id={`chkReplyItem${index}`} />

                    <label htmlFor={`chkReplyItem${index}`}>
                        <div className="toggles-indicator">
                            <Remix iconName={'check-line'} iconSize={0.6} />
                        </div>
                    </label>
                </div>
            )}

            <div className="reply-item-body">
                <div className="reply-item-user">
                    <NameTag userObject={userObject} />

                    {isMyReply && (
                        <div className="reply-item-user-controls">
                            <span>수정</span>
                            <span>·</span>
                            <span>삭제</span>
                        </div>
                    )}
                </div>

                <div className="reply-content-wrapper">
                    <div className="reply-depth-indicator"></div>

                    <div className="reply-content-container">
                        <div className="reply-content-text">{replyContent}</div>

                        <div className="reply-item-datetime">
                            <span>{dateFormat(writtenDateTime)}</span>
                            <span>·</span>
                            <span>{hourFormat(writtenDateTime)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ReplyItem;
