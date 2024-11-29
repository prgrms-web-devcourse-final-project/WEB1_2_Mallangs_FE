import dateFormat from '../../utils/dateFormat';

const ModalDateSeparator = () => {
    return (
        <div className="modal-date-separator">
            <hr />
            <span>{dateFormat('2024-01-01')}</span>
            <hr />
        </div>
    );
};

export default ModalDateSeparator;
