const DiscoverySituation = ({ value, onChange, placeholder = 'text' }) => {
    return (
        <div className="discovery-situation">
            <div className="discovery-situation-container">
                <textarea
                    className="discovery-situation-container-input"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                ></textarea>
            </div>
        </div>
    );
};

export default DiscoverySituation;
