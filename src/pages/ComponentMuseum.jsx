import ReviewItem from '../components/common/ReviewItem';
import MallangItem from '../components/common/MallangItem';
import ArticleItem from '../components/common/ArticleItem';
import ModalInstruction from '../components/common/ModalInstruction';
import ReviewTotalScore from '../components/common/ReviewTotalScore';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import ModalDateSeparator from '../components/common/ModalDateSeparator';
import ModalFormInput from '../components/common/ModalFormInput';
import ReplyItem from '../components/common/ReplyItem';
import StarRating from '../components/common/StarRating';

const ComponentMuseum = () => {
    return (
        <aside
            className="inner-wrapper"
            style={{
                marginBlockStart: '6.4rem',
            }}
        >
            <p style={{ marginBlock: '4rem' }}>
                이곳은 공용 컴포넌트의 박물관... 원하는 것을 골라 쓰시오...
            </p>

            <StarRating />
            <StarRating currentPoint={5} isClickable={false} />

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
                        index={0}
                        instEmoji="⚠️"
                        instHeadline="앗!"
                        instContent="무언가 신묘한 기분이 든다"
                    />
                    <ReplyItem />
                    <ReplyItem
                        index={1}
                        replyContent="이것이 나의 진심 댓글이다"
                        writtenDateTime="2024-12-24 21:31"
                        isMyReply={true}
                        isEditMode={true}
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
                        starPoint={4.2}
                        writtenDate="2024-12-24 21:31"
                    />
                    <ArticleItem index={1} />
                    <ArticleItem index={2} isEditMode={true} />
                </div>
            </div>
        </aside>
    );
};

export default ComponentMuseum;
