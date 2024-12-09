import { useState } from 'react';
import { createPlaceArticle } from '../api/threadApi';
import { useThreadsTitleStore } from '../stores/titleStatus';

import ModalInstruction from '../components/common/ModalInstruction';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import AsteriskTextGuide from '../components/common/AsteriskTextGuide';
import InputAddress from '../components/common/InputAddress';
import DropdownSelector from '../components/common/DropdownSelector';
import DiscoverySituation from '../components/common/DiscoverySituation';
import CompleteButton from '../components/common/CompleteButton';
import SingleInput from '../components/common/SingleInput';
import getLatestLocation from '../utils/getLatestLocation';

const ThreadPlace = () => {
    const [addressInfo, setAddressInfo] = useState(null);
    const latestLocation = getLatestLocation();
    const [explanation, setExplanation] = useState('');
    const [introduce, setIntroduce] = useState('');
    const [facilityContact, setFacilityContact] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [businessTime, setBusinessTime] = useState('');
    const [holidayTime, setHolidayTime] = useState('');
    const [address, setAddress] = useState({
        region: `${latestLocation.lat}, ${latestLocation.lng}`,
        building: '',
        // latitude: latestLocation.lat,
        // longitude: latestLocation.lng,
    });
    const [errorMessage, setErrorMessage] = useState('');
    const { threadsTitle } = useThreadsTitleStore();

    const handleAddressChange = (info) => {
        setAddressInfo(info);
    };

    const PlaceClasstificationList = [
        '동물약국',
        '미술관',
        '카페',
        '동물병원',
        '반려동물용품',
        '미용',
        '문예회관',
        '펜션',
        '식당',
        '여행지',
        '위탁관리',
        '박물관',
        '호텔',
    ];

    // 드롭다운 형식으로 변환
    const dropdownOptions = PlaceClasstificationList.map((category) => ({
        label: category,
        value: category,
    }));

    const handleSubmit = async (event) => {
        event.preventDefault();

        const address =
            `${addressInfo.roadAddress || addressInfo.jibunAddress} ${addressInfo.building}`.trim();

        const formData = {
            type: 'place',
            articleStatus: 'PUBLISHED',
            title: threadsTitle,
            latitude: latestLocation.lat || 0, // 위도
            longitude: latestLocation.lng || 0, // 경도
            description: introduce,
            image: 'image_url_2',
            businessHours: businessTime,
            closeDays: holidayTime,
            website: websiteUrl,
            category: holidayTime,
            address: address, //지번
            roadAddress: address, //도로명
            hasParking: false,
            isPetFriendly: true,
            contact: facilityContact,
        };

        console.log('폼 데이터:', formData);

        try {
            const response = await createPlaceArticle(formData);
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
        <div className="thread-place-container">
            <div className="instruction">
                <ModalInstruction
                    index={0}
                    instEmoji="🚨"
                    instHeadline="잠깐!"
                    instContent="정보를 작성하기 전에 거짓 정보 또는 잘못된 정보로 타인에게 피해를 주지 않도록 주의하세요."
                />
            </div>

            <div className="title-bar">
                <ModalSectionTitle sectionTitle="시설/업체 정보 입력" />
            </div>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className="thread-place">
                    <AsteriskTextGuide />
                    <span className="section-title">
                        주소는 지도에서 선택한 지점에 따라 자동으로 입력됩니다.
                    </span>
                    {/* 주소 */}
                    <InputAddress onAddressChange={handleAddressChange} />
                    <span className="section-title">시설 분류 선택</span>

                    <DropdownSelector
                        optionList={dropdownOptions}
                        onSelect={(data) =>
                            console.log('드롭다운에서 선택한 값:', data)
                        }
                    />

                    <span className="section-title">시설/업체 소개</span>
                    <DiscoverySituation
                        placeholder="시설/업체 소개를 입력하세요,,"
                        value={introduce}
                        onChange={setIntroduce}
                    />

                    <span className="section-title">
                        시설/업체 제공 서비스에 대한 설명
                    </span>
                    <DiscoverySituation
                        placeholder="시설/업체 제공 서비스에 대한 설명을 입력하세요,,"
                        value={explanation}
                        onChange={setExplanation}
                    />

                    <span className="section-title">휴무일</span>
                    <SingleInput
                        value={holidayTime}
                        onChange={setHolidayTime}
                        placeholder="연중무휴, 격주, 매주, 요일로 작성해주세요"
                    />

                    <span className="section-title">
                        영업시간(평일, 주말/공휴일)
                    </span>
                    <SingleInput
                        value={businessTime}
                        onChange={setBusinessTime}
                        placeholder="12:00~15:00 형태로 입력해주세요!"
                    />

                    <span className="section-title">연락처</span>
                    <SingleInput
                        value={facilityContact}
                        onChange={setFacilityContact}
                        placeholder="010-0000-0000로 입력해주세요!"
                    />

                    <span className="section-title">웹사이트</span>
                    <SingleInput value={websiteUrl} onChange={setWebsiteUrl} />
                </div>
                <div className="button-content">
                    <CompleteButton type="submit" />
                </div>
            </form>
        </div>
    );
};

export default ThreadPlace;
