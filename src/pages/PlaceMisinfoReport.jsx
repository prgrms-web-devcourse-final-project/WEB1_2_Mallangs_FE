import ModalInstruction from '../components/common/ModalInstruction';
import ModalFormInput from '../components/common/ModalFormInput';

const PlaceMisinfoReport = () => {
    const handleWriteReport = (inputObject) => {
        console.log(inputObject.formText);
    };

    return (
        <div>
            <div className="user-common-item-list">
                <ModalInstruction
                    instHeadline={'시설 / 업체명'}
                    instContent="의 장소 정보에 오류가 있나요? 잘못된 정보를 제보해 주시면 최대한 빠르게 조치할게요."
                />
            </div>

            <hr />

            <ModalFormInput
                isIncludeImage={false}
                maxLength={200}
                onSendContent={handleWriteReport}
            />
        </div>
    );
};

export default PlaceMisinfoReport;
