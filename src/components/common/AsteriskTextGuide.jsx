import Remix from './Remix';

const AsteriskTextGuide = ({
    sectionTitle = '표시된 항목은 필수 입력 항목입니다',
}) => {
    return (
        <div className="asterisk-text-guide">
            <Remix iconName={'asterisk'} />
            <span className="section-title">{sectionTitle}</span>
        </div>
    );
};

export default AsteriskTextGuide;
