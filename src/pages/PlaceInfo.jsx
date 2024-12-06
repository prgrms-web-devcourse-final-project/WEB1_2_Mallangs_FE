import Remix from '../components/common/Remix';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import ModalInstruction from '../components/common/ModalInstruction';

const PlaceInfo = () => {
    let isUserContent = true; // 사용자 등록 컨텐츠인가?

    return (
        <div>
            <div className="user-common-item-list">이미지 슬라이더</div>

            <div className="place-info-main-text">
                <Remix iconName={'double-quotes-l'} iconSize={1.2} />

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid ad deserunt rerum doloremque veniam dolores quae
                    doloribus vel officiis fugit nobis, hic ipsum nesciunt
                    molestias mollitia dicta quaerat laborum repellendus?
                </p>

                <Remix iconName={'double-quotes-r'} iconSize={1.2} />
            </div>

            <ModalSectionTitle sectionTitle="상세정보" />

            <div className="user-common-item-list">
                {isUserContent ? (
                    <ModalInstruction
                        instEmoji="⚠️"
                        instHeadline="사용자가 등록한 장소에요."
                        instContent="장소의 실제 정보와 다를 수 있습니다."
                    />
                ) : (
                    <ModalInstruction
                        instEmoji="✔️"
                        instHeadline="인증된 장소에요."
                        instContent="잘못된 정보가 있다면 오류 정정을 요청해 주세요!"
                    />
                )}

                <p>위치 : 어쩌고 저쩌고 시</p>

                <p>연락처: 010-0000-0000</p>
                <p>영업시간</p>
                <p>휴무일</p>
                <p>시설 / 업체 제공 서비스</p>
                <p>웹 사이트 또는 소셜 서비스</p>
            </div>
        </div>
    );
};

export default PlaceInfo;
