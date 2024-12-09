import dateFormat from '../../utils/dateFormat';
import hourFormat from '../../utils/hourFormat';
import NameTag from './NameTag';
import Remix from './Remix';

const ReplyItem = ({
    index,
    userObject,
    replyContent,
    writtenDateTime,
    isMyReply,
    isEditMode,
    onEdit,
    onDelete,
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
                            <p onClick={() => onEdit(replyContent)}>수정</p>
                            <span>·</span>
                            <p onClick={onDelete}>삭제</p>
                        </div>
                    )}
                </div>

                <div className="reply-content-wrapper">
                    <div className="reply-depth-indicator"></div>
                    <div className="reply-content-container">
                        <div className="reply-content-text">{replyContent}</div>
                        <div className="datetime-row reply-item-datetime">
                            <p>{dateFormat(writtenDateTime)}</p>
                            <span>·</span>
                            <p>{hourFormat(writtenDateTime)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ReplyItem;
