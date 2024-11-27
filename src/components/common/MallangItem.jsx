import Remix from './Remix';

const MallangItem = ({ mallangObject, isEditMode = false }) => {
    return (
        <div className="mallang-item">
            <div className="mallang-image-container">
                <img
                    className="mallang-image"
                    src="/src/assets/images/placeholder-paw.png"
                    alt="사용자의 대표 말랑이 이미지가 존재하지 않습니다."
                />
            </div>

            <dl className="mallang-descriptions">
                <dt>
                    {mallangObject.isMain && (
                        <p className="mallang-main-indicator">
                            {mallangObject.isMain && '메인'}
                        </p>
                    )}

                    <h5 className="mallang-name">
                        <marquee>
                            <span>{mallangObject.petName}</span>
                        </marquee>
                    </h5>

                    {isEditMode && (
                        <button type="button" className="button-mallang-config">
                            <Remix iconName={'settings-3-fill'} />
                        </button>
                    )}
                </dt>

                <dd>
                    <Remix iconName={'search-eye-line'} />
                    <p>{mallangObject.petType}</p>
                    <span>·</span>
                    <p>{mallangObject.petAge}세</p>
                    <span>·</span>
                    <p>{mallangObject.petGender}</p>
                </dd>
            </dl>
        </div>
    );
};

export default MallangItem;
