import { useEffect, useState } from 'react';
import Remix from '../components/common/Remix';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import ModalInstruction from '../components/common/ModalInstruction';
import DataTableRow from '../components/common/DataTableRow';
import ImageGallery from '../components/common/ImageGallery';

import { useModalStore } from '../stores/modalStatus';
import { getRescueDetail } from '../api/threadApi';

const Test = () => {
    const [rescueDetails, setRescueDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const modalData = useModalStore((state) => state.modalData);

    useEffect(() => {
        const fetchRescueData = async () => {
            if (!modalData?.setObject?.articleId) {
                return;
            }
            try {
                const data = await getRescueDetail(
                    modalData.setObject.articleId,
                );
                setRescueDetails(data);
            } catch (e) {
                setError('구조 글타래 정보를 불러오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchRescueData();
    }, [modalData?.setObject?.articleId]);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;
    if (!rescueDetails) return <div>장소 정보를 찾을 수 없습니다.</div>;

    return (
        <div>
            <div className="user-common-item-list">
                {rescueDetails.image && (
                    <ImageGallery images={[rescueDetails.image]} />
                )}
            </div>

            <div className="place-info-main-text">
                <Remix iconName={'double-quotes-l'} iconSize={1.2} />
                <p>{rescueDetails.description}</p>
                <Remix iconName={'double-quotes-r'} iconSize={1.2} />
            </div>

            <ModalSectionTitle sectionTitle="구조 요청 동물 정보" />

            <div className="user-common-item-list">
                <ModalInstruction
                    instEmoji="🚨"
                    instHeadline="잠깐!"
                    instContent="직접 구조하는 것보다 전문가의 도움을 청하는 것이 효과적일 수도 있습니다. 아래와 같은 단체들에 연락하세요!"
                />
            </div>

            <div className="user-common-table">
                <DataTableRow tableHeader={'구조할 동물 종류'}>
                    <span>{rescueDetails.petType}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'발견 장소'}>
                    <span>{rescueDetails.rescueLocation}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'발견 날짜/시간대'}>
                    <span>{rescueDetails.rescueDate}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'상황설명'}>
                    <span>{rescueDetails.description}</span>
                </DataTableRow>
            </div>
        </div>
    );
};

export default Test;
