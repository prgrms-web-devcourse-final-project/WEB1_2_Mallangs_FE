import { create } from 'zustand';
import tempReplies from '../datas/temp-notification-replies.json';
import tempMessages from '../datas/temp-notification-messages.json';

export const useNotificationStore = create((set) => ({
    notifications: {
        // 기능 구현시 실시간 fetching이 일어나야 한다.
        replies: [...tempReplies],
        messages: [...tempMessages],
    },
    clearReadAlarms: () =>
        set(
            (state) =>
                (state.notifications = {
                    replies: state.notifications.replies.filter(
                        (item) => !item.isRead,
                    ),
                    messages: state.notifications.messages.filter(
                        (item) => item.unReadCount > 0,
                    ),
                }),
        ),
}));
