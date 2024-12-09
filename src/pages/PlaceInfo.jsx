import Remix from '../components/common/Remix';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import ModalInstruction from '../components/common/ModalInstruction';
import DataTableRow from '../components/common/DataTableRow';
import ImageGallery from '../components/common/ImageGallery';
import tempDB from '../datas/temp-db.json';
import hourFormat from '../utils/hourFormat';

const PlaceInfo = ({ threadID = 0 }) => {
    const currentThread = tempDB.threads[threadID];
    const placeInfo = currentThread.placeInfo;

    let isUserContent = true; // 사용자 등록 컨텐츠인가?

    return (
        <div>
            <div className="user-common-item-list">
                <ImageGallery />
            </div>

            <div className="place-info-main-text">
                <Remix iconName={'double-quotes-l'} iconSize={1.2} />

                <p>{placeInfo.placeDescription}</p>

                <Remix iconName={'double-quotes-r'} iconSize={1.2} />
            </div>

            <ModalSectionTitle sectionTitle="상세정보" />

            <div className="user-common-item-list">
                {isUserContent ? (
                    <ModalInstruction
                        instEmoji="⚠️"
                        instHeadline="사용자가 등록한 장소에요."
                        instContent="장소의 실제 정보와 차이가 있을 수도 있어요."
                    />
                ) : (
                    <ModalInstruction
                        instEmoji="✔️"
                        instHeadline="인증된 장소에요."
                        instContent="잘못된 정보가 있다면 오류 정정을 요청해 주세요!"
                    />
                )}
            </div>

            <div className="user-common-table">
                <DataTableRow tableHeader={'위치'}>
                    <span>
                        {`${currentThread.address1} ${currentThread.address2}`}
                    </span>
                </DataTableRow>

                <DataTableRow tableHeader={'제공 서비스'}>
                    <span>{placeInfo.whatThisPlaceDoes}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'휴무일'}>
                    <span>{`${placeInfo.dayOff.offType} (${placeInfo.dayOff.offDescription})`}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'영업시간 (평일)'}>
                    <span>{placeInfo.workTime.weekDays.workBegin}</span>

                    <span>~</span>

                    <span>{placeInfo.workTime.weekDays.workEnds}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'영업시간 (주말)'}>
                    <span>{placeInfo.workTime.weekEnds.workBegin}</span>

                    <span>~</span>

                    <span>{placeInfo.workTime.weekEnds.workEnds}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'브레이크 타임'}>
                    <span>{placeInfo.workTime.breakTime.workBegin}</span>

                    <span>~</span>

                    <span>{placeInfo.workTime.breakTime.workEnds}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'연락처'}>
                    <span>{placeInfo.placeContact}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'웹 사이트 / SNS'}>
                    <span>
                        <a href={placeInfo.placeURL} target="_blank">
                            {placeInfo.placeURL}
                        </a>
                    </span>
                </DataTableRow>

                <DataTableRow tableHeader={'종합 평점'}>
                    <span>
                        {'⭐' +
                            (
                                placeInfo.placeReviews.totalPointsEarned /
                                placeInfo.placeReviews.reviewID.length
                            ).toFixed(1) +
                            ' 점'}
                    </span>
                </DataTableRow>
            </div>
        </div>
    );
};

export default PlaceInfo;
