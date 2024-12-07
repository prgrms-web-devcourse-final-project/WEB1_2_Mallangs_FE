import { Link } from 'react-router-dom';
import { useModalStore } from '../stores/modalStatus';
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
import ThreadItem from '../components/common/ThreadItem';
import { logoutApi } from '../api/userApi';
import ImageGallery from '../components/common/ImageGallery';

const ComponentMuseum = () => {
    const toggleModal = useModalStore((state) => state.toggleModal);
    const setModalType = useModalStore((state) => state.setModalType);
    const setModalData = useModalStore((state) => state.setModalData);
    const tempListContainer = {
        display: 'flex',
        flexFlow: 'column nowrap',
        gap: '.8rem',
        padding: '.8rem',
        border: '1px solid rgb(var(--clr-text) / .15)',
        backgroundColor: 'rgb(var(--clr-white))',
    };

    const handleLogout = async () => {
        try {
            await logoutApi();
            window.location.replace('/login');
        } catch (error) {
            console.error('로그아웃 실패:', error);
            if (error.response?.status === 401) {
                localStorage.clear();
                window.location.replace('/login');
            } else {
                alert('로그아웃에 실패했습니다.');
            }
        }
    };

    return (
        <aside className="inner-wrapper">
            <div style={tempListContainer}>
                <h5>
                    이곳은 공용 컴포넌트의 박물관... 원하는 것을 골라 쓰시오...
                </h5>

                <p>
                    <Link to="/login">로그인 테스트 페이지</Link>
                </p>

                <p>
                    <Link to="/register">회원가입 테스트 페이지</Link>
                </p>

                <p>
                    <Link to="/whatthehellisgoingonhere">
                        에러 테스트 페이지
                    </Link>
                </p>

                {/* 로그아웃 버튼 추가 */}
                <button
                    onClick={handleLogout}
                    className="button-service-control"
                >
                    로그아웃
                </button>

                <button
                    onClick={() => {
                        toggleModal(true); // 모달 열기
                        setModalType('places'); // 모달의 navigation 상태
                        setModalData({
                            // 모달 기본 정보 - 이후 설정 가능값 추가 예정
                            latitude: 0.0, // 모달이 가지고 있는 위도
                            longitude: 0.0, // 모달이 가지고 있는 경도
                            threadTitle: '모달', // 모달 제목
                            mainCategory: '',
                            subCategory1: '',
                            subCategory2: '',
                            subCategory3: '',
                        });
                    }}
                >
                    장소 모달 보기
                </button>

                <button
                    onClick={() => {
                        toggleModal(true); // 모달 열기
                        setModalType('writeMode', true); // 모달의 navigation 상태
                        setModalData({
                            // 모달 기본 정보 - 이후 설정 가능값 추가 예정
                            latitude: 0.0, // 모달이 가지고 있는 위도
                            longitude: 0.0, // 모달이 가지고 있는 경도
                            threadTitle: '모달', // 모달 제목
                            mainCategory: '',
                            subCategory1: '',
                            subCategory2: '',
                            subCategory3: '',
                        });
                    }}
                >
                    글 작성 모달 보기
                </button>

                <button
                    onClick={() => {
                        toggleModal(true); // 모달 열기
                        setModalType('missing'); // 모달의 navigation 상태
                        setModalData({
                            // 모달 기본 정보 - 이후 설정 가능값 추가 예정
                            latitude: 0.0, // 모달이 가지고 있는 위도
                            longitude: 0.0, // 모달이 가지고 있는 경도
                            threadTitle: '모달', // 모달 제목
                            mainCategory: '',
                            subCategory1: '',
                            subCategory2: '',
                            subCategory3: '',
                        });
                    }}
                >
                    실종신고 모달 보기
                </button>

                <button
                    onClick={() => {
                        toggleModal(true); // 모달 열기
                        setModalType('rescue'); // 모달의 navigation 상태
                        setModalData({
                            // 모달 기본 정보 - 이후 설정 가능값 추가 예정
                            latitude: 0.0, // 모달이 가지고 있는 위도
                            longitude: 0.0, // 모달이 가지고 있는 경도
                            threadTitle: '모달', // 모달 제목
                            mainCategory: '',
                            subCategory1: '',
                            subCategory2: '',
                            subCategory3: '',
                        });
                    }}
                >
                    구조요청 모달 보기
                </button>
            </div>

            <div style={tempListContainer}>
                <h5>이미지 갤러리 컴포넌트</h5>
                <ImageGallery />
            </div>

            <div>
                <h5>채팅 컴포넌트</h5>

                <div style={tempListContainer}>
                    <ModalDateSeparator />
                    <ChatItem chatContent="맘에 없는 그런 말하고 돌아서면 더 힘들지 그런 건 너무 가슴이 아파 아무 말도 할 수 없는 오늘은 길었던 하루가 다 지나도 뭘 했는지도 모르겠어 그래 이런 건 너무 마음이 아파 아무 것도 할 수 없는 오늘은 있잖아 내가 만약에 내가 너에게 가슴 아픈 말을 했다면 잊어줘 미안해 내가 그러려던 건 아니었는데 하고 전화를 할까 말까" />
                    <ChatItem
                        chatFrom="opposite"
                        chatContent="요즘 drowning 이라는 노래를 하루에 10000번 듣고 있음. 그거랑 이호광의 롤라,, 마약이야 진짜,, 롤~~~라~~~~ ㅋㅋㅋㅋㅋㅋ 개웃김 진짜ㅠㅠ"
                    />
                </div>
            </div>

            <ModalInstruction
                index={0}
                instEmoji="⚠️"
                instHeadline="앗!"
                instContent="무언가 신묘한 기분이 든다"
            />

            <StarRating />
            <StarRating currentPoint={5} isClickable={false} />

            <div style={tempListContainer}>
                <h5>글타래 컴포넌트</h5>

                <ThreadItem />
                <ThreadItem
                    index={1}
                    threadType="rescue"
                    threadState="expired"
                />
                <ThreadItem index={2} threadType="missing" threadState="done" />
                <ThreadItem
                    index={3}
                    threadType="others"
                    threadState="hidden"
                />
            </div>

            <div style={tempListContainer}>
                <h5>내 게시물 컴포넌트</h5>

                <ArticleItem index={1} />
                <ArticleItem index={2} isEditMode={true} />
            </div>

            <div>
                <h5>말랑이 컴포넌트</h5>

                <ModalSectionTitle sectionTitle="대표 말랑이" />
                <MallangItem />
                <ModalSectionTitle sectionTitle="다른 말랑이들" />
                <MallangItem />
                <MallangItem />
                <MallangItem />
                <MallangItem isEditMode={true} />
            </div>

            <div>
                <h5>리뷰 컴포넌트</h5>

                <ReviewTotalScore
                    reviewTarget="김씨마구로"
                    reviewScoreEverage={4.3}
                    reviewCount={12345}
                />

                <div style={tempListContainer}>
                    <ReviewItem index={1} />
                    <ReviewItem index={2} />
                    <ReviewItem index={3} />
                    <ReviewItem
                        index={4}
                        isEditMode={true}
                        userObject={{
                            userID: 2,
                            userImage: 'https://picsum.photos/24/24?random=1',
                            userName: '정발산기슭곰발냄새타령부인사잘해',
                        }}
                        reviewImage={'https://picsum.photos/1920/1080'}
                        reviewContent={'인사자뢔'}
                        starPoint={4.2}
                        writtenDate="2024-12-24 21:31"
                    />
                </div>

                <ModalFormInput />
            </div>

            <div>
                <h5>댓글 컴포넌트</h5>

                <div style={tempListContainer}>
                    <ReplyItem />
                    <ReplyItem />
                    <ReplyItem />
                    <ReplyItem
                        index={1}
                        replyContent="이것이 나의 진심 댓글이다"
                        writtenDateTime="2024-12-24 21:31"
                        isMyReply={true}
                        isEditMode={true}
                    />
                </div>

                <ModalFormInput isIncludeImage={false} />
            </div>
        </aside>
    );
};

export default ComponentMuseum;
