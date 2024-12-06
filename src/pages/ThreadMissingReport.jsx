import AsteriskTextGuide from '../components/common/AsteriskTextGuide';
import ModalInstruction from '../components/common/ModalInstruction';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import CompleteButton from '../components/common/CompleteButton';
import TypeSelector from '../components/common/TypeSelector';
import InputAddress from '../components/common/InputAddress';
import BirthdaySelector from '../components/common/BirthdaySelector';
import GenderSelector from '../components/common/GenderSelector';
import ToggleButton from '../components/common/ToggleButton';
import InfoText from '../components/common/InfoText';
import { useState } from 'react';
import DiscoverySituation from '../components/common/DiscoverySituation';

const ThreadMissingReport = () => {
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
        <div className="thread-missing-report">
            <div className="instruction">
                <ModalInstruction
                    index={0}
                    instEmoji="🚨"
                    instHeadline="잠깐!"
                    instContent="소중한 나의 말랑이를 다른 사람들이 알아볼 수 있게 최대한 자세하게 설명해주세요."
                />
            </div>

            <div className="title-bar">
                <ModalSectionTitle sectionTitle="실종 말랑이 정보 입력" />
            </div>

            <div className="form-missing-report">
                <AsteriskTextGuide />
                <span className="section-title">
                    주소는 지도에서 선택한 지점에 따라 자동으로 입력됩니다.
                </span>
                <InputAddress />

                <span className="section-title">실종일자</span>
                <BirthdaySelector />

                <span className="section-title">실종 말랑이 종류</span>
                <TypeSelector
                    types={mallangTypes}
                    onTypeSelect={handleTypeSelect}
                    defaultSelectedType="dog"
                />

                <span className="section-title">사진 첨부</span>
                {/* <ModalFormInput /> */}

                <span className="section-title">상세 설명</span>
                <DiscoverySituation />

                <span className="section-title">나이</span>
                {/* 나이 추가할 공간 */}

                {/* 성별 */}
                <span className="section-title">성별</span>
                <GenderSelector label="" />

                {/* 중성화 여부 */}
                <span className="section-title">중성화 여부</span>
                <ToggleButton label="" />

                {/* 내장 칩 인식 여부 */}
                <span className="section-title">내장 칩 인식 여부</span>
                <ToggleButton
                    label=""
                    onLabel="이식함"
                    offLabel="이식하지 않음"
                />

                {/* 칩 인식번호 안내 문구*/}
                <div className="form-chip-number">
                    <InfoText />
                </div>
            </div>

            <div className="button-content">
                <CompleteButton />
            </div>
        </div>
    );
};

export default ThreadMissingReport;
