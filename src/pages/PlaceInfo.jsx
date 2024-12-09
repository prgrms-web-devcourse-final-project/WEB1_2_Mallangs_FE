import React, { useState, useEffect } from 'react';
import { useModalStore } from '../stores/modalStatus';
import { getPlaceDetail } from '../api/threadApi';

import Remix from '../components/common/Remix';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import ModalInstruction from '../components/common/ModalInstruction';
import DataTableRow from '../components/common/DataTableRow';
import ImageGallery from '../components/common/ImageGallery';

const PlaceInfo = () => {
    const [placeDetails, setPlaceDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const modalData = useModalStore((state) => state.modalData);

    useEffect(() => {
        const fetchPlaceData = async () => {
            if (!modalData?.setObject?.articleId) return;

            try {
                const data = await getPlaceDetail(
                    modalData.setObject.articleId,
                );
                const placeWithType = {
                    ...data,
                    articleType: modalData.setObject.type,
                };
                setPlaceDetails(placeWithType);
            } catch (err) {
                setError('장소 정보를 불러오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchPlaceData();
    }, [modalData?.setObject?.articleId]);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;
    if (!placeDetails) return <div>장소 정보를 찾을 수 없습니다.</div>;

    return (
        <div>
            <div className="user-common-item-list">
                {placeDetails.image && (
                    <ImageGallery images={[placeDetails.image]} />
                )}
            </div>

            <div className="place-info-main-text">
                <Remix iconName={'double-quotes-l'} iconSize={1.2} />
                <p>{placeDetails.description}</p>
                <Remix iconName={'double-quotes-r'} iconSize={1.2} />
            </div>

            <ModalSectionTitle sectionTitle="상세정보" />

            <div className="user-common-item-list">
                <ModalInstruction
                    instEmoji={placeDetails.isPublicData ? '✔️' : '⚠️'}
                    instHeadline={
                        placeDetails.isPublicData
                            ? '인증된 장소에요.'
                            : '사용자가 등록한 장소에요.'
                    }
                    instContent={
                        placeDetails.isPublicData
                            ? '잘못된 정보가 있다면 오류 정정을 요청해 주세요!'
                            : '장소의 실제 정보와 차이가 있을 수도 있어요.'
                    }
                />
            </div>

            <div className="user-common-table">
                <DataTableRow tableHeader={'위치'}>
                    <span>{placeDetails.address}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'제공 서비스'}>
                    <span>{placeDetails.category}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'영업시간'}>
                    <span>{placeDetails.businessHours}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'휴무일'}>
                    <span>{placeDetails.closeDays}</span>
                </DataTableRow>

                {placeDetails.contact && (
                    <DataTableRow tableHeader={'연락처'}>
                        <span>{placeDetails.contact}</span>
                    </DataTableRow>
                )}

                {placeDetails.website &&
                    placeDetails.website !== '정보없음' && (
                        <DataTableRow tableHeader={'웹 사이트 / SNS'}>
                            <span>
                                <a
                                    href={placeDetails.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {placeDetails.website}
                                </a>
                            </span>
                        </DataTableRow>
                    )}

                <DataTableRow tableHeader={'편의시설'}>
                    <div className="flex flex-wrap gap-2">
                        {placeDetails.isPetFriendly && (
                            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                반려동물 동반 가능
                            </span>
                        )}
                        {placeDetails.hasParking && (
                            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                주차 가능
                            </span>
                        )}
                    </div>
                </DataTableRow>

                <DataTableRow tableHeader={'종합 평점'}>
                    <span>
                        {'⭐' +
                            (
                                placeDetails.placeReviews?.totalPointsEarned /
                                placeDetails.placeReviews?.reviewID?.length
                            )?.toFixed(1) +
                            ' 점'}
                    </span>
                </DataTableRow>
            </div>
        </div>
    );
};

export default PlaceInfo;
