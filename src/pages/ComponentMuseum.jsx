import { Link } from 'react-router-dom';
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
import ChatItem from '../components/common/ChatItem';

const ComponentMuseum = () => {
    return (
        <aside
            className="inner-wrapper"
            style={{
                marginBlockStart: '6.4rem',
            }}
        >
            <p style={{ paddingBlock: '4rem' }}>
                이곳은 공용 컴포넌트의 박물관... 원하는 것을 골라 쓰시오...
            </p>

            <p>
                <Link to="/login">로그인 테스트 페이지</Link>
            </p>

            <p style={{ marginBlock: '1.2rem' }}>
                <Link to="/register">회원가입 테스트 페이지</Link>
            </p>

            <p>
                <Link to="/whatthehellisgoingonhere">에러 테스트 페이지</Link>
            </p>

            <div
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    gap: '.8rem',
                }}
            >
                <ChatItem chatContent="맘에 없는 그런 말하고 돌아서면 더 힘들지 그런 건 너무 가슴이 아파 아무 말도 할 수 없는 오늘은 길었던 하루가 다 지나도 뭘 했는지도 모르겠어 그래 이런 건 너무 마음이 아파 아무 것도 할 수 없는 오늘은 있잖아 내가 만약에 내가 너에게 가슴 아픈 말을 했다면 잊어줘 미안해 내가 그러려던 건 아니었는데 하고 전화를 할까 말까" />
                <ChatItem
                    chatFrom="opposite"
                    chatContent="요즘 drowning 이라는 노래를 하루에 10000번 듣고 있음. 그거랑 이호광의 롤라,, 마약이야 진짜,, 롤~~~라~~~~ ㅋㅋㅋㅋㅋㅋ 개웃김 진짜ㅠㅠ"
                />
            </div>

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
