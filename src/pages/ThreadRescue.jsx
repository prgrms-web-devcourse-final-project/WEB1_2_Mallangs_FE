import { useState } from 'react';
import axios from 'axios';

import ModalInstruction from '../components/common/ModalInstruction';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import CompleteButton from '../components/common/CompleteButton';
import AsteriskTextGuide from '../components/common/AsteriskTextGuide';
import InputAddress from '../components/common/InputAddress';
import TypeSelector from '../components/common/TypeSelector';
import DateTime from '../components/common/DateTime';
import DiscoverySituation from '../components/common/DiscoverySituation';

const ThreadRescue = () => {
    // 유효성 검사
    // const [isLoggedIn, setIsLoggedIn] = useState(true); // 로그인 상태
    const [selectedType, setSelectedType] = useState('');
    const [address, setAddress] = useState({ region: '', building: '' });
    const [dateTime, setDateTime] = useState('');
    const [situation, setSituation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const mallangTypes = [
        { id: 'dog', label: '강아지' },
        { id: 'cat', label: '고양이' },
        { id: 'bird', label: '새' },
        { id: 'etc', label: '기타' },
    ];

    const handleTypeSelect = (typeId) => {
        setSelectedType(typeId);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // console.log('주소:', address);
        // console.log('날짜/시간:', dateTime);
        // console.log('동물 종류:', selectedType);
        // console.log('상황 설명:', situation);

        if (!address || !dateTime || !selectedType || !situation) {
            // console.log('뭐 빠졌니?');
            setErrorMessage('4가지 중 필수 항목 빠짐');
            return;
        }

        const formData = {
            address: `${address.region} ${address.building}`,
            dateTime,
            type: selectedType,
            situation,
        };

        console.log('폼 데이터:', formData);

        try {
            const response = await axios.post('/api/v1/articles', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

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
                setErrorMessage('요청을 보냈는데 응답이 없습니다!');
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
                    instContent="직접 구조하는 것보다 전문가의 도움을 청하는 편이 효과적일 수
                    있습니다."
                />
            </div>

            <div className="title-bar">
                <ModalSectionTitle sectionTitle="동물 구조 요청 정보 입력" />
            </div>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className="form-animal-rescue">
                    <AsteriskTextGuide />
                    <span className="section-title">
                        주소는 지도에서 선택한 지점에 따라 자동으로 입력됩니다.
                    </span>
                    {/* 주소 */}
                    <InputAddress value={address} onChange={setAddress} />

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
