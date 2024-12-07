const DiscoverySituation = ({ value, onChange }) => {
    return (
        <div className="discovery-situation">
            <div className="discovery-situation-container">
                <textarea
                    className="discovery-situation-container-input"
                    placeholder="상황 설명 입력..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                ></textarea>
            </div>
        </div>
    );
};

export default DiscoverySituation;
