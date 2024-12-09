import NameTag from './NameTag';
import Remix from './Remix';

import dateFormat from '../../utils/dateFormat';
import hourFormat from '../../utils/hourFormat';
import { useState } from 'react';

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
    const [editMode, toggleEditMode] = useState(false);
    const [editValue, setEditValue] = useState(replyContent);

    const handleEditReply = () => {
        onEdit(editValue);
        toggleEditMode(false);
    };

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
                            {editMode ? (
                                <button type="button" onClick={handleEditReply}>
                                    수정완료
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => toggleEditMode(true)}
                                >
                                    수정
                                </button>
                            )}

                            <span>·</span>

                            <button type="button" onClick={onDelete}>
                                삭제
                            </button>
                        </div>
                    )}
                </div>

                <div className="reply-content-wrapper">
                    <div className="reply-depth-indicator"></div>

                    <div className="reply-content-container">
                        <div className="reply-content-text">
                            {editMode ? (
                                <textarea
                                    className="reply-content-edit"
                                    placeholder="댓글 내용 입력..."
                                    defaultValue={editValue}
                                    onKeyUp={(e) =>
                                        setEditValue(e.target.value)
                                    }
                                ></textarea>
                            ) : (
                                <>{replyContent}</>
                            )}
                        </div>

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
