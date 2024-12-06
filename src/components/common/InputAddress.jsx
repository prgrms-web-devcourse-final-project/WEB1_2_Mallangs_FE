const InputAddress = () => {
    return (
        <div className="address">
            <div className="address-container">
                <input
                    className="address-region"
                    placeholder="강원특별자치도 춘천시 공지로 어쩌고"
                ></input>
                <input
                    className="address-building"
                    placeholder="12동, 2415호 (240층)"
                ></input>
            </div>
        </div>
    );
};

export default InputAddress;
