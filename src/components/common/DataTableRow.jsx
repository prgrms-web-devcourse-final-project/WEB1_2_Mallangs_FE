const DataTableRow = ({ tableHeader, children }) => {
    return (
        <dl className="user-common-table-row">
            <dt className="user-common-table-row-header">
                <span>{tableHeader ?? '헤더'}</span>
            </dt>

            <dd className="user-common-table-row-cell">{children}</dd>
        </dl>
    );
};

export default DataTableRow;
