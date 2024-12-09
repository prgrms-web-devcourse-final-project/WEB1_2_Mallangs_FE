import { useState } from 'react';
import { createMissingReportArticle } from '../api/threadApi';

import AsteriskTextGuide from '../components/common/AsteriskTextGuide';
import ModalInstruction from '../components/common/ModalInstruction';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import CompleteButton from '../components/common/CompleteButton';
import TypeSelector from '../components/common/TypeSelector';
import InputAddress from '../components/common/InputAddress';
import DateTime from '../components/common/DateTime';
import GenderSelector from '../components/common/GenderSelector';
import ToggleButton from '../components/common/ToggleButton';
import InfoText from '../components/common/InfoText';
import DiscoverySituation from '../components/common/DiscoverySituation';
import SingleInput from '../components/common/SingleInput';

const ThreadMissingReport = () => {
    const [isSelectedType, setIsSelectedType] = useState('');
    const [missingGenderType, setMissingGenderType] = useState('');
    const [missingTime, setMissingTime] = useState('');
    const [mallangName, setMallangName] = useState('');
    const [mallangColor, setMallangColor] = useState('');
    const [detailExplanation, setDetailExplanation] = useState('');
    const [mallangAge, setMallangAge] = useState('');
    const [chipNumber, setChipNumber] = useState('');
    const [missingBreed, setMissingBreed] = useState('');
    const [missingAddress, setMissingAddress] = useState(null);
    const [missingContact, setMissingContact] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isNeutered, setIsNeutered] = useState(false);
    const [hasChip, setHasChip] = useState(false);

    const handleTypeSelect = (typeId) => {
        setIsSelectedType(typeId);
    };

    const handleGenderChange = (event) => {
        const selectedGender = event.target.value;
        setMissingGenderType(selectedGender);
    };

    const handleAddressChange = (info) => {
        setMissingAddress(info);
    };

    const handleNeuteringToggle = (newState) => {
        setIsNeutered(newState); // 중성화 여부 상태 업데이트
        console.log('중성화 여부:', newState);
    };

    const handleChipToggle = (newState) => {
        setHasChip(newState); // 내장 칩 상태 업데이트
        console.log('내장 칩 인식 여부:', newState);
    };

    const mallangTypes = [
        { id: 'DOG', label: '강아지' },
        { id: 'CAT', label: '고양이' },
        { id: 'BIRD', label: '새' },
        { id: 'OTHER', label: '기타' },
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!missingAddress) {
            setErrorMessage('위치 정보가 필요합니다.');
            return;
        }

        const address =
            `${missingAddress.roadAddress || missingAddress.jibunAddress} ${missingAddress.building}`.trim();

        // if (!address || !dateTime || !selectedType || !situation) {
        //     setErrorMessage('4가지 중 필수 항목이 누락되었습니다.');
        //     return;
        // }

        const formData = {
            type: 'lost',
            articleStatus: 'PUBLISHED',
            title: '타이틀받아와야하는데',
            latitude: missingAddress.coordinates.lat.toString(),
            longitude: missingAddress.coordinates.lng.toString(),
            description: detailExplanation,
            image: 'image_url',
            petType: isSelectedType,
            breed: missingBreed,
            name: mallangName,
            petAge: Number(mallangAge),
            petGender: missingGenderType,
            isNeutering: isNeutered,
            petColor: mallangColor,
            chipNumber: chipNumber,
            lostDate: missingTime
                ? new Date(
                      `${missingTime.split(' ')[0]}T${missingTime.split(' ')[1].padStart(2, '0')}:00:00`,
                  )
                : null, // 실종 날짜/시간대,
            lostLocation: address,
            contact: missingContact,
            lostStatus: 'UNSOLVED',
        };

        console.log('폼 데이터:', formData);

        try {
            const response = await createMissingReportArticle(formData);
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
            <form onSubmit={handleSubmit}>
                <div className="form-missing-report">
                    <AsteriskTextGuide />
                    <span className="section-title">
                        주소는 지도에서 선택한 지점에 따라 자동으로 입력됩니다.
                    </span>
                    <InputAddress onAddressChange={handleAddressChange} />

                    <span className="section-title">실종일자/시간대</span>
                    <DateTime value={missingTime} onChange={setMissingTime} />

                    <span className="section-title">실종 말랑이 종류</span>
                    <TypeSelector
                        types={mallangTypes}
                        onTypeSelect={handleTypeSelect}
                        selectedType={isSelectedType} // 부모에서 관리하는 selectedType 전달
                    />
                    <span className="section-title">품종</span>
                    <SingleInput
                        value={missingBreed}
                        onChange={setMissingBreed}
                        placeholder="품종 입력"
                    />

                    <span className="section-title">말랑이 이름</span>
                    <SingleInput
                        value={mallangName}
                        onChange={setMallangName}
                        placeholder="말랑이 이름 입력"
                    />

                    <span className="section-title">말랑이 색상</span>
                    <SingleInput
                        value={mallangColor}
                        onChange={setMallangColor}
                        placeholder="말랑이 색상 입력"
                    />

                    <span className="section-title">사진 첨부</span>
                    {/* <ModalFormInput /> */}

                    <span className="section-title">상세 설명</span>
                    <DiscoverySituation
                        placeholder="상세 설명을 입력해주세요,,"
                        value={detailExplanation}
                        onChange={setDetailExplanation}
                    />

                    <span className="section-title">나이</span>
                    <SingleInput
                        value={mallangAge}
                        onChange={setMallangAge}
                        placeholder="나이 입력"
                    />

                    {/* 성별 */}
                    {/* <span className="section-title">성별</span> */}
                    <GenderSelector
                        onSelect={handleGenderChange}
                        name="gender"
                    />

                    {/* 중성화 여부 */}
                    <span className="section-title">중성화 여부</span>
                    <ToggleButton
                        label=""
                        onLabel="중성화 완료"
                        offLabel="중성화 미완료"
                        onToggle={handleNeuteringToggle}
                    />

                    {/* 내장 칩 인식 여부 */}
                    <span className="section-title">내장 칩 인식 여부</span>
                    <ToggleButton
                        label=""
                        onLabel="이식함"
                        offLabel="이식하지 않음"
                        onToggle={handleChipToggle}
                    />

                    <span className="section-title">연락처(선택)</span>
                    <SingleInput
                        value={missingContact}
                        onChange={setMissingContact}
                        placeholder="010-0000-0000 으로 입력"
                    />

                    {/* 칩 인식번호 안내 문구*/}
                    <span className="section-title">칩 인식번호</span>
                    <SingleInput
                        value={chipNumber}
                        onChange={setChipNumber}
                        placeholder="000000000000000"
                    />
                    <div className="form-chip-number">
                        <InfoText />
                    </div>
                </div>

                <div className="button-content">
                    <CompleteButton />
                </div>
            </form>
        </div>
    );
};

export default ThreadMissingReport;
