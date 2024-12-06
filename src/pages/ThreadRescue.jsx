import { useState } from 'react';

import ModalInstruction from '../components/common/ModalInstruction';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import Remix from '../components/common/Remix';
import CompleteButton from '../components/common/CompleteButton';
import AsteriskTextGuide from '../components/common/AsteriskTextGuide';
import InputAddress from '../components/common/InputAddress';
import TypeSelector from '../components/common/TypeSelector';

const ThreadRescue = () => {
    const [isSelectedType, setIsSelectedType] = useState('');

    const handleTypeSelect = (typeId) => {
        setIsSelectedType(typeId);
    };

    const mallangTypes = [
        { id: 'dog', label: '강아지' },
        { id: 'cat', label: '고양이' },
        { id: 'bird', label: '새' },
        { id: 'etc', label: '기타' },
    ];
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

            <div className="form-animal-rescue">
                <AsteriskTextGuide />
                <span className="section-title">
                    주소는 지도에서 선택한 지점에 따라 자동으로 입력됩니다.
                </span>
                {/* 주소 */}
                <InputAddress />

                <span className="section-title">발견일자 / 시간대</span>
                <div className="date-time-container">
                    <input
                        className="date-time-input"
                        placeholder="2024-01-01  18:35:11"
                    ></input>
                    <Remix iconName={'calendar-event-line'} />
                </div>

                <span className="section-title">구조 요청 동물 종류</span>

                <TypeSelector
                    types={mallangTypes}
                    onTypeSelect={handleTypeSelect}
                    defaultSelectedType="dog"
                />

                {/* <span className="section-title">긴급 연락망</span>
                <div className="emergency-contact">
                    <input
                        className="emergency-contact-input"
                        placeholder="긴급한 상황의 경우 가까운 동물병원이나 구조단체에 먼저 연락해주세요."
                    ></input>
                </div> */}
            </div>
            <div className="button-content">
                <CompleteButton />
            </div>
        </div>
    );
};

export default ThreadRescue;
