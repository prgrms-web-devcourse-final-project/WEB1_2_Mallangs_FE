import { useState } from 'react';

import ModalInstruction from './common/ModalInstruction';
import ModalSectionTitle from './common/ModalSectionTitle';
import Remix from './common/Remix';

const ThreadRescueModal = () => {
    const [isSelectedType, setIsSelectedType] = useState(null);
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
                <div className="required-input-guide">
                    <Remix iconName={'asterisk'} />
                    <span className="section-title">
                        표시된 항목은 필수 입력 항목입니다.
                    </span>
                </div>
                <span className="section-title">
                    주소는 지도에서 선택한 지점에 따라 자동으로 입력됩니다.
                </span>
                <div className="address">
                    <div className="address-container">
                        <input
                            className="address-region"
                            placeholder="강원특별자치도 춘천시 공지로 어쩌고"
                        ></input>
                        <input
                            className="address-building"
                            placeholder="12동, 2415호 (240층)"
                        ></input>
                    </div>
                </div>

                <span className="section-title">발견일자 / 시간대</span>
                <div className="date-time-container">
                    <input
                        className="date-time-input"
                        placeholder="2024-01-01  18:35:11"
                    ></input>
                    <Remix iconName={'calendar-event-line'} />
                </div>

                <span className="section-title">구조 요청 동물 종류</span>
                <div className="mallang-select-container">
                    <div className="mallang-type-selector">
                        {mallangTypes.map((type) => (
                            <div
                                key={type.id}
                                className={`filter-label-wrapper ${isSelectedType === type.id ? 'active' : ''}`}
                                onClick={() => setIsSelectedType(type.id)}
                            >
                                <div className={`filter-label-${type.id}`}>
                                    {type.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <span className="section-title">발견 상황</span>
                <div className="discovery-situation-container">
                    <textarea
                        className="discovery-situation-container-input"
                        placeholder="상황 설명 입력..."
                    ></textarea>
                </div>

                <span className="section-title">긴급 연락망</span>
                <div className="emergency-contact">
                    <input
                        className="emergency-contact-input"
                        placeholder="긴급한 상황의 경우 가까운 동물병원이나 구조단체에 먼저 연락해주세요."
                    ></input>
                </div>
            </div>

            <div className="button-content">
                <button className="button-selection-submit">
                    <div className="icon-check">
                        <Remix iconName={'check-line'} />
                    </div>
                    <span className="button-label">작성완료</span>
                </button>
            </div>
        </div>
    );
};

export default ThreadRescueModal;
