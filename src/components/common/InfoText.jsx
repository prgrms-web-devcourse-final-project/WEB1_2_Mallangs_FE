import Remix from './Remix';

const InfoText = () => {
    return (
        <div className="info">
            <div className="info-icon">
                <Remix iconName={'information-2-fill'} />
            </div>

            <p className="info-text">인식번호는 어떻게 확인할 수 있나요?</p>
        </div>
    );
};

export default InfoText;
