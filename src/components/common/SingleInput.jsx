const SingleInput = ({
    value,
    onChange,
    placeholder = 'https://wwww.example.com',
}) => {
    return (
        <div className="single-input-container">
            <input
                className="single-input"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            ></input>
        </div>
    );
};

export default SingleInput;
