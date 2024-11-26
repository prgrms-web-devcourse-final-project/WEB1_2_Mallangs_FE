const ToolTip = ({ altMessage }) => {
    return (
        <aside className="floating-tooltip">
            <span>{altMessage}</span>
        </aside>
    );
};

export default ToolTip;
