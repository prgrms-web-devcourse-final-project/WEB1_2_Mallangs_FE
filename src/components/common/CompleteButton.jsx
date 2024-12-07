import Remix from './Remix';

const CompleteButton = ({ type = 'submit', buttonLabel = '선택완료' }) => (
    <button className="button-selection-submit" type={type}>
        <div className="icon-check">
            <Remix iconName={'check-line'} />
        </div>
        <span className="button-label">{buttonLabel}</span>
    </button>
);

export default CompleteButton;
