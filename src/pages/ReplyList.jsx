import { useState } from 'react';
import ModalFormInput from '../components/common/ModalFormInput';
import ReplyItem from '../components/common/ReplyItem';
import EmptyList from '../components/common/EmptyList';

const ReplyList = () => {
    const [replyArray, setNewReply] = useState([]);

    const handleWriteReply = (inputObject) => {
        setNewReply([
            ...replyArray,
            {
                userObject: { userID: 0, userImage: null, userName: '홍길동' },
                replyContent: inputObject.formText,
                writtenDateTime: new Date(),
            },
        ]);
    };

    return (
        <div>
            <div id="reply-list" className="user-common-item-list">
                {replyArray.length > 0 ? (
                    replyArray.map((item, index) => {
                        return (
                            <ReplyItem
                                index={index}
                                replyContent={item.replyContent}
                                writtenDateTime={item.writtenDateTime}
                                key={index}
                            />
                        );
                    })
                ) : (
                    <EmptyList placeHolderText="아직 댓글이 없어요. 첫 댓글을 작성해 보는 건 어떨까요?" />
                )}
            </div>

            <div id="reply-input-container">
                <hr />

                <ModalFormInput
                    isIncludeImage={false}
                    placeHolder="댓글 내용을 입력하세요."
                    onSendContent={handleWriteReply}
                />
            </div>
        </div>
    );
};

export default ReplyList;
