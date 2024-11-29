import Remix from './Remix';

const ModalSectionTitle = ({ sectionTitle = '섹션 제목' }) => {
    return (
        <div className="modal-section-title">
            <Remix iconName={'hashtag'} />

            <p>{sectionTitle}</p>
        </div>
    );
};

export default ModalSectionTitle;
