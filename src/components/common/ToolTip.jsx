const ToolTip = ({ altMessage = '툴팁 메시지', direction = 'bottom' }) => {
    return (
        <aside className={`floating-tooltip ${direction}`}>
            <span>{altMessage}</span>
        </aside>
    );
};

export default ToolTip;
