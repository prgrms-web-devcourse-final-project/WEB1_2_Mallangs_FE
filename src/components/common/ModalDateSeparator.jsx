import dateFormat from '../../utils/dateFormat';

const ModalDateSeparator = ({ dateString = '1970-01-01' }) => {
    return (
        <div className="modal-date-separator">
            <hr />

            <span>{dateFormat(dateString)}</span>

            <hr />
        </div>
    );
};

export default ModalDateSeparator;
