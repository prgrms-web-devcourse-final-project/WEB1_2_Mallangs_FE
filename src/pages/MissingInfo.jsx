import { useState, useEffect } from 'react';
import { CustomOverlayMap, Map } from 'react-kakao-maps-sdk';
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

const MissingInfo = () => {
    const [missingDetails, setMissingDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const modalData = useModalStore((state) => state.modalData);

    useEffect(() => {
        const fetchMissingData = async () => {
            if (!modalData?.setObject?.articleId) return;

            try {
                const data = await getMissingDetail(
                    modalData.setObject.articleId,
                );
                console.log('실종 데이터:', data); // API 응답 확인
                setMissingDetails(data);
            } catch (err) {
                setError('실종 정보를 불러오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchMissingData();
    }, [modalData?.setObject?.articleId]);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;
    if (!missingDetails) return <div>실종 정보를 찾을 수 없습니다.</div>;

    const formatPetInfo = (details) => {
        const gender = details.petGender === 'MALE' ? '남아' : '여아';
        const petType = details.petType === 'DOG' ? '강아지' : '고양이';
        const breed = details.breed || '품종 미상';
        const color = details.petColor || '색상 미상';
        const neuteredStatus = details.isNeutering ? '중성화 O' : '중성화 X';

        return `${petType} / ${breed} / ${details.petAge}살 ${gender} / ${color} / ${neuteredStatus}`;
    };

    return (
        <div>
            <div className="user-common-item-list">
                {missingDetails.image && (
                    <ImageGallery images={[missingDetails.image]} />
                )}
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
                    <h4>{formatPetInfo(missingDetails)}</h4>
                </div>
            </div>

            <ModalSectionTitle sectionTitle="실종 위치" />

            <div className="user-common-item-list">
                <Map
                    id="missing-map"
                    draggable={true}
                    zoomable={true}
                    center={{
                        lat: missingDetails.latitude,
                        lng: missingDetails.longitude,
                    }}
                    level={3}
                >
                    <CustomOverlayMap
                        position={{
                            lat: missingDetails.latitude,
                            lng: missingDetails.longitude,
                        }}
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
                </Map>
                {/* 목격정보 추후 개발 예정 */}
                {/* <ModalInstruction
                    instEmoji="😹"
                    instHeadline="혹시 근처에서 비슷한 말랑이를 보셨나요?"
                    instContent="여러분의 작은 제보가 누군가의 소중한 가족을 찾는 단서가 될 수도 있어요."
                />

                <button type="button" id="button-goto-sighting-report">
                    <Remix iconName={'eye-2-line'} />
                    <span>목격 제보 보내기</span>
                </button> */}
            </div>
            <ModalSectionTitle sectionTitle="실종 상황 정보" />

            <div className="user-common-item-list">
                <div className="missing-basic-info-container">
                    <MissingBasicInfo
                        iconName={'map-pin-range-fill'}
                        blockTitle={'실종 추정 위치'}
                        blockDescription={missingDetails.lostLocation}
                    />
                    <MissingBasicInfo
                        iconName={'calendar-close-fill'}
                        blockTitle={'실종일시'}
                        blockDescription={`${dateFormat(missingDetails.lostDate)} ${hourFormat(missingDetails.lostDate)}`}
                    />
                    <MissingBasicInfo
                        iconName={'phone-fill'}
                        blockTitle={'연락처'}
                        blockDescription={
                            missingDetails.contact
                                ? missingDetails.contact
                                : '연락처 정보 없음'
                        }
                    />
                    <MissingBasicInfo
                        iconName={'hand-heart-fill'}
                        blockTitle={'내장칩 인식 여부'}
                        blockDescription={
                            missingDetails.chipNumber
                                ? `칩 인식번호: ${missingDetails.chipNumber}`
                                : '내장칩 없음'
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default MissingInfo;
