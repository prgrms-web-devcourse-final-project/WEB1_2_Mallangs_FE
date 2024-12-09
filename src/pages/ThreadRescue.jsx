import { useState } from 'react';
import { createRescueArticle } from '../api/threadApi';

import ModalInstruction from '../components/common/ModalInstruction';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import CompleteButton from '../components/common/CompleteButton';
import AsteriskTextGuide from '../components/common/AsteriskTextGuide';
import InputAddress from '../components/common/InputAddress';
import TypeSelector from '../components/common/TypeSelector';
import DateTime from '../components/common/DateTime';
import DiscoverySituation from '../components/common/DiscoverySituation';

const ThreadRescue = () => {
    const [addressInfo, setAddressInfo] = useState(null);
    const [selectedType, setSelectedType] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [situation, setSituation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const mallangTypes = [
        { id: 'DOG', label: '강아지' },
        { id: 'CAT', label: '고양이' },
        { id: 'BIRD', label: '새' },
        { id: 'ETC', label: '기타' },
    ];

    const handleTypeSelect = (typeId) => {
        setSelectedType(typeId);
    };

    const handleAddressChange = (info) => {
        setAddressInfo(info);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!addressInfo) {
            setErrorMessage('위치 정보가 필요합니다.');
            return;
        }

        const address =
            `${addressInfo.roadAddress || addressInfo.jibunAddress} ${addressInfo.building}`.trim();

        if (!address || !dateTime || !selectedType || !situation) {
            setErrorMessage('4가지 중 필수 항목이 누락되었습니다.');
            return;
        }

        console.log('dateTime raw value:', dateTime);
        console.log('new Date(dateTime):', new Date(dateTime));

        const formData = {
            type: 'rescue',
            articleStatus: 'PUBLISHED', // 필요한 상태값
            title: '꽁꽁 얼어붙은 한강 위로 고양이가 걸어다닙니다', // 제목
            latitude: addressInfo.coordinates.lat.toString(), // 위도
            longitude: addressInfo.coordinates.lng.toString(), // 경도
            description: situation, // 상황 설명
            image: 'tempimage', // 이미지 URL
            petType: selectedType, // 선택된 동물 종류
            rescueStatus: 'UNSOLVED', // 구조 상태
            rescueLocation: address,
            rescueDate: dateTime
                ? new Date(
                      `${dateTime.split(' ')[0]}T${dateTime.split(' ')[1].padStart(2, '0')}:00:00`,
                  )
                : null, // 구조 날짜/시간대
        };

        console.log('폼 데이터:', formData);

        try {
            const response = await createRescueArticle(formData);
            console.log('응답 성공띠 : ', response.data);
            setErrorMessage('');
        } catch (error) {
            // console.error('에러가 무엇잉교:', error);
            if (error.response) {
                // 응답 있을때
                console.error('서버 응답 에러:', error.response.data);
                setErrorMessage(
                    error.response.data.message ||
                        '데이터 전송 중 문제가 발생했습니다.',
                );
            } else if (error.request) {
                // 요청했는디 응답 없을때
                console.error('응답 없음:', error.request);
                setErrorMessage('서버로부터 응답이 없습니다!');
            } else {
                console.error('요청 설정 에러:', error.message);
                setErrorMessage('요청을 보내는 중 문제가 발생했습니다.');
            }
        }
    };

    return (
        <div className="thread-rescue">
            <div className="instruction">
                <ModalInstruction
                    index={0}
                    instEmoji="🚨"
                    instHeadline="잠깐!"
                    instContent="직접 구조하는 것보다 전문가의 도움을 청하는 편이 효과적일 수 있습니다."
                />
            </div>

            <div className="title-bar">
                <ModalSectionTitle sectionTitle="동물 구조 요청 정보 입력" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-animal-rescue">
                    <AsteriskTextGuide />
                    <span className="section-title">
                        주소는 지도에서 선택한 지점에 따라 자동으로 입력됩니다.
                    </span>
                    {/* 주소 */}
                    <InputAddress onAddressChange={handleAddressChange} />

                    <span className="section-title">발견일자 / 시간대</span>

                    <DateTime value={dateTime} onChange={setDateTime} />

                    <span className="section-title">구조 요청 동물 종류</span>

                    <TypeSelector
                        types={mallangTypes}
                        onTypeSelect={handleTypeSelect}
                        selectedType={selectedType} // 부모에서 관리하는 selectedType 전달
                    />

                    {/* 상황 설명 */}
                    <DiscoverySituation
                        value={situation}
                        onChange={setSituation}
                    />
                </div>
                <div className="button-content">
                    <CompleteButton type="submit" />
                </div>
            </form>
        </div>
    );
};

export default ThreadRescue;
