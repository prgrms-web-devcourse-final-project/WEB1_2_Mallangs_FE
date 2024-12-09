import ChatRoomItem from '../components/common/ChatRoomItem';
import EmptyList from '../components/common/EmptyList';
import Remix from '../components/common/Remix';

const UserChatList = ({ chatRoomArray = [], isMine = false }) => {
    if (chatRoomArray.length > 0)
        return (
            <>
                <div className="user-common-item-list">
                    {chatRoomArray.map((item, index) => {
                        <ChatRoomItem key={index} />;
                    })}
                </div>
            </>
        );
    else
        return (
            <div className="empty-chat-list-wrapper">
                <EmptyList
                    placeHolderText={
                        isMine
                            ? '아직 누구와도 대화하지 않았어요.'
                            : '아직 이 사용자와의 대화가 없어요.'
                    } // 내 프로필에서 볼 때는 달라져야 함
                />

                {isMine ? null : (
                    <button type="button" id="button-start-chat-session">
                        <Remix iconName={'chat-new-line'} />

                        <span>새로운 대화를 시작하려면 여기를 클릭하세요.</span>
                    </button>
                )}
            </div>
        );
};

export default UserChatList;
