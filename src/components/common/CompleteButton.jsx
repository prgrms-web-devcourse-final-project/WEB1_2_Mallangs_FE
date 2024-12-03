import Remix from './Remix';

const CompleteButton = ({ buttonLabel = '선택완료' }) => (
    <div className="button-content">
        <button className="button-selection-submit">
            <div className="icon-check">
                <Remix iconName={'check-line'} />
            </div>
            <span className="button-label">{buttonLabel}</span>
        </button>
    </div>
);

export default CompleteButton;
