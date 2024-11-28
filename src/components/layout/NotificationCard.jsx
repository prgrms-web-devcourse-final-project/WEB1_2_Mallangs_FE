import { useState } from 'react';
import Remix from '../common/Remix';

const NotificationCard = ({ isActive, onShow }) => {
    const [currentTabID, setCurrentTab] = useState(0);

    return (
        <aside id="notification-card" className={isActive ? 'on' : null}>
            <div className="notification-tab-container">
                <button
                    className={`notification-tab-button replies ${currentTabID === 0 && 'on'}`}
                    onClick={() => setCurrentTab(0)}
                >
                    <Remix
                        iconName={`chat-thread-${currentTabID === 0 ? 'fill' : 'line'}`}
                    />
                    <p className="button-label">
                        <span className="button-label-text">댓글</span>
                        <span className="button-label-value">(0)</span>
                    </p>
                </button>
                <button
                    className={`notification-tab-button messages ${currentTabID === 1 && 'on'}`}
                    onClick={() => setCurrentTab(1)}
                >
                    <Remix
                        iconName={`chat-quote-${currentTabID === 1 ? 'fill' : 'line'}`}
                    />
                    <p className="button-label">
                        <span className="button-label-text">메시지</span>
                        <span className="button-label-value">(0)</span>
                    </p>
                </button>
            </div>

            <hr />

            <ul className="notification-list">
                <li>대충 알림 아이템</li>
            </ul>
        </aside>
    );
};

export default NotificationCard;
