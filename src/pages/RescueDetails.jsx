import DataTableRow from '../components/common/DataTableRow';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import dateFormat from '../utils/dateFormat';
import hourFormat from '../utils/hourFormat';
import tempDB from '../datas/temp-db.json';
import ImageGallery from '../components/common/ImageGallery';

const RescueDetails = ({ threadID = 0 }) => {
    const currentThread = tempDB.threads[threadID];
    const rescueInfo = currentThread.rescueInfo;

    console.log(currentThread);

    return (
        <>
            <div className="user-common-item-list">
                <ImageGallery />
            </div>

            <ModalSectionTitle sectionTitle="요구조 동물 정보" />

            <div id="rescue-found-situation" className="user-common-item-list">
                {rescueInfo.foundSituation}
            </div>

            <div className="user-common-table">
                <DataTableRow tableHeader={'동물 종류 / 품종'}>
                    <span>{rescueInfo.animalType}</span>
                </DataTableRow>

                <DataTableRow tableHeader={'위치'}>
                    <span>
                        {currentThread.address1
                            ? currentThread.address1
                            : '주소 없음'}
                    </span>
                </DataTableRow>

                <DataTableRow tableHeader={'발견일시'}>
                    <span>{dateFormat(rescueInfo.foundAt)}</span>

                    <span>/</span>

                    <span>{hourFormat(rescueInfo.foundAt)} 경</span>
                </DataTableRow>

                <DataTableRow tableHeader={'현재 상태'}>
                    <span>{currentThread.threadStatus}</span>
                </DataTableRow>
            </div>
        </>
    );
};

export default RescueDetails;
