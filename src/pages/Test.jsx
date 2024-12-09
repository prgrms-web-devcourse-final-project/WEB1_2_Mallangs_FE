import { useEffect, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import Remix from '../components/common/Remix';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import ModalInstruction from '../components/common/ModalInstruction';
import dateFormat from '../utils/dateFormat';
import hourFormat from '../utils/hourFormat';
import ImageGallery from '../components/common/ImageGallery';
import { useModalStore } from '../stores/modalStatus';
import { getMissingDetail } from '../api/threadApi';

const MissingBasicInfo = ({ iconName, blockTitle, blockDescription }) => {
    return (
        <dl className="missing-basic-info-block">
            <dt className="missing-info-block-title">
                <Remix iconName={iconName} iconSize={0.6} />

                <span>{blockTitle}</span>
            </dt>

            <dd className="missing-info-block-description">
                <h6>{blockDescription}</h6>
            </dd>
        </dl>
    );
};

const Test = () => {
    const [missingInfo, setMissingInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const modalData = useModalStore((state) => state.modalData);

    useEffect(() => {
        const fetchMissingData = async () => {
            if (!modalData?.setObject?.articleId) {
                return;
            }
            try {
                const data = await getMissingDetail(
                    modalData.setObject.articleId,
                );
                setMissingInfo(data);
            } catch (e) {
                setError('구조 글타래 정보를 불러오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchMissingData();
    }, [modalData?.setObject?.articleId]);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;
    if (!missingInfo) return <div>장소 정보를 찾을 수 없습니다.</div>;

    // const missingInfo = modalData.missingInfo;

    // const [currentLocation, setLocation] = useState({
    //     lat: missingInfo.latitude,
    //     lng: missingInfo.longitude,
    // });

    // const sightingArray = [
    //     {
    //         reportID: 0,
    //         position: { lat: 36.0, lng: 127.0 },
    //     },
    // ];

    return (
        <div>
            <div className="user-common-item-list">
                <ImageGallery />
            </div>

            <ModalSectionTitle sectionTitle="실종된 말랑이 주요 특징" />

            <div className="user-common-item-list">
                <div
                    style={{
                        padding: '.8rem',
                        borderRadius: 'var(--rad-lg)',
                        backgroundColor: 'rgb(var(--clr-alert))',
                        color: 'rgb(var(--clr-text-on-tint))',
                        textAlign: 'center',
                    }}
                >
                    <h4>{missingInfo.description}</h4>
                </div>
            </div>

            <ModalSectionTitle sectionTitle="실종 위치" />

            <div className="user-common-item-list">
                {/* <Map
                    id="missing-map"
                    draggable={false}
                    center={currentLocation}
                >
                    <CustomOverlayMap
                        position={currentLocation}
                        yAnchor={1}
                        clickable={false}
                    >
                        <div className="sighting-marker">
                            <Remix
                                iconName={'information-2-fill'}
                                iconSize={1.2}
                            />
                        </div>
                    </CustomOverlayMap>
                </Map> */}

                <ModalInstruction
                    instEmoji="😹"
                    instHeadline="혹시 근처에서 비슷한 말랑이를 보셨나요?"
                    instContent="여러분의 작은 제보가 누군가의 소중한 가족을 찾는 단서가 될 수도 있어요."
                />

                <button type="button" id="button-goto-sighting-report">
                    <Remix iconName={'eye-2-line'} />

                    <span>목격 제보 보내기</span>
                </button>
            </div>

            <ModalSectionTitle sectionTitle="실종 상황 정보" />

            <div className="user-common-item-list">
                <div className="missing-basic-info-container">
                    <MissingBasicInfo
                        iconName={'map-pin-range-fill'}
                        blockTitle={'실종 추정 위치'}
                        blockDescription={missingInfo.lostLocation}
                    />

                    <MissingBasicInfo
                        iconName={'calendar-close-fill'}
                        blockTitle={'실종일시'}
                        blockDescription={missingInfo.lostDate}
                    />

                    <MissingBasicInfo
                        iconName={'phone-fill'}
                        blockTitle={'연락처'}
                        blockDescription={missingInfo.contact}
                    />
                </div>
            </div>
        </div>
    );
};

export default Test;
