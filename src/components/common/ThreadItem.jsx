import dateFormat from '../../utils/dateFormat';
import Remix from './Remix';

const ThreadItem = ({
    index = 0,
    threadTitle = '글타래 제목',
    threadType = 'places',
    threadState = 'listed',
    threadBegin = '1970-01-01',
    threadEnds = '2024-01-01',
    isEditMode = true,
}) => {
    const categoryMatcher = {
        places: '시설 / 업체 정보',
        rescue: '구조 요청',
        missing: '실종신고',
        others: '기타',
    };

    const stateMatcher = {
        listed: { iconName: 'map-pin-2-fill', label: '게시 중' },
        expired: {
            iconName: 'calendar-schedule-line',
            label: '게시 기간 만료',
        },
        done: { iconName: 'check-double-line', label: '완료' },
        hidden: { iconName: 'eye-off-fill', label: '숨김' },
    };

    return (
        <article className={`thread-item ${threadType} ${threadState}`}>
            {isEditMode && (
                <div className="thread-item-checkbox-wrapper">
                    <input type="checkbox" id={`chkThreadItem${index}`} />

                    <label htmlFor={`chkThreadItem${index}`}>
                        <div className="toggles-indicator">
                            <Remix iconName={'check-line'} iconSize={0.6} />
                        </div>
                    </label>
                </div>
            )}

            <div className="thread-item-body">
                <div className="thread-item-state-indicator">
                    <Remix
                        iconName={stateMatcher[threadState].iconName}
                        iconSize={1.2}
                    />
                </div>

                <dl className="thread-item-descriptions">
                    <dt className="thread-item-title">
                        <span>{threadTitle}</span>
                    </dt>

                    <dd className="datetime-row thread-item-summary">
                        <p>{categoryMatcher[threadType]}</p>
                        <span>·</span>
                        <p>{`${dateFormat(threadBegin)} ~ ${dateFormat(threadEnds)}`}</p>
                    </dd>

                    <dd className="thread-item-state">
                        <span>{stateMatcher[threadState].label}</span>
                    </dd>
                </dl>
            </div>
        </article>
    );
};

export default ThreadItem;
