import { useState, useEffect } from 'react';
import { useModalStore } from '../stores/modalStatus';

import EmptyList from '../components/common/EmptyList';
import ModalFormInput from '../components/common/ModalFormInput';
import ReplyItem from '../components/common/ReplyItem';

import {
    getComments,
    postComment,
    updateComment,
    deleteComments,
} from '../api/threadApi';

const ReplyList = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const modalData = useModalStore((state) => state.modalData);

    useEffect(() => {
        const fetchComments = async () => {
            if (!modalData?.setObject?.articleId) return;
            try {
                const data = await getComments(modalData.setObject.articleId);
                setComments(data || []);
            } catch (err) {
                setError('댓글을 불러오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchComments();
    }, [modalData?.setObject?.articleId]);

    const handleWriteReply = async (inputObject) => {
        if (!inputObject.formText.trim()) return;
        try {
            const response = await postComment({
                memberId: 1,
                articleId: modalData.setObject.articleId,
                content: inputObject.formText,
            });

            const newComment = {
                ...response,
                userObject: {
                    userID: response.memberId,
                    userImage: response.profileImage,
                    userName: response.nickname.value,
                },
                replyContent: response.content,
                writtenDateTime: response.createdAt,
            };

            setComments((prev) => ({
                ...prev,
                content: [...prev.content, newComment],
            }));
        } catch (err) {
            console.error('댓글 작성 실패:', err);
        }
    };

    const handleEditReply = async (commentId, content) => {
        try {
            const response = await updateComment(commentId, {
                memberId: 1,
                content,
            });
            setComments((prev) => ({
                ...prev,
                content: prev.content.map((comment) =>
                    comment.commentId === commentId ? response : comment,
                ),
            }));
        } catch (err) {
            console.error('댓글 수정 실패:', err);
        }
    };

    const handleDeleteReply = async (commentId) => {
        try {
            await deleteComments({
                memberId: 1,
                commentIds: [commentId],
            });
            setComments((prev) => ({
                ...prev,
                content: prev.content.filter(
                    (comment) => comment.commentId !== commentId,
                ),
            }));
        } catch (err) {
            console.error('댓글 삭제 실패:', err);
        }
    };

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;
    if (!comments) return <div>댓글을 찾을 수 없습니다.</div>;

    console.log(comments);

    return (
        <div>
            <div id="reply-list">
                {comments.content?.length > 0 ? (
                    comments.content.map((item, index) => (
                        <ReplyItem
                            index={index}
                            userObject={{
                                userID: item.memberId,
                                userImage: item.profileImage,
                                userName: item.nickname.value,
                            }}
                            replyContent={item.content}
                            writtenDateTime={item.createdAt}
                            isMyReply={item.memberId === 1}
                            key={item.commentId}
                            onEdit={(content) =>
                                handleEditReply(item.commentId, content)
                            }
                            onDelete={() => handleDeleteReply(item.commentId)}
                        />
                    ))
                ) : (
                    <EmptyList placeHolderText="아직 댓글이 없어요. 첫 댓글을 작성해 보는 건 어떨까요?" />
                )}
            </div>

            <div id="reply-input-container">
                <hr />

                <ModalFormInput
                    isIncludeImage={false}
                    isHorizontal={true}
                    placeHolder="댓글 내용을 입력하세요."
                    onSendContent={handleWriteReply}
                />
            </div>
        </div>
    );
};

export default ReplyList;
