import ReviewItem from '../components/common/ReviewItem';
import MallangItem from '../components/common/MallangItem';
import ArticleItem from '../components/common/ArticleItem';
import ModalInstruction from '../components/common/ModalInstruction';
import ReviewTotalScore from '../components/common/ReviewTotalScore';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import ModalDateSeparator from '../components/common/ModalDateSeparator';
import ModalFormInput from '../components/common/ModalFormInput';
import SendChatItem from '../components/common/SendChatItem';
import ReceiveChatItem from '../components/common/ReceiveChatItem';

const ComponentMuseum = () => {
    return (
        <aside
            className="inner-wrapper"
            style={{
                marginBlockStart: '6.4rem',
            }}
        >
            이곳은 공용 컴포넌트의 박물관... 원하는 것을 골라 쓰시오...
            <div>
                <SendChatItem />
                <ReceiveChatItem />
            </div>
            <ModalFormInput />
            <ModalDateSeparator />
            <ModalSectionTitle />
            <ReviewTotalScore
                reviewTarget="김씨마구로"
                reviewScoreEverage={4.3}
                reviewCount={12345}
            />
            <div>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        gap: '.8rem',
                    }}
                >
                    <ModalInstruction
                        instEmoji="⚠️"
                        instHeadline="앗!"
                        instContent="무언가 신묘한 기분이 든다"
                    />
                    <MallangItem />
                    <MallangItem isEditMode={true} />
                    <ReviewItem index={1} />
                    <ReviewItem
                        index={2}
                        isEditMode={true}
                        userObject={{
                            userID: 2,
                            userImage: 'https://picsum.photos/24/24?random=1',
                            userName: '정발산기슭곰발냄새타령부인사잘해',
                        }}
                        reviewContent={'인사자뢔'}
                    />
                    <ArticleItem index={1} />
                    <ArticleItem index={2} isEditMode={true} />
                </div>
            </div>
        </aside>
    );
};

export default ComponentMuseum;
