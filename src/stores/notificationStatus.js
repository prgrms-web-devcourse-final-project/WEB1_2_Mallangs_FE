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
        // 읽은 알림만 지워야 하는데... 우선 보류. 실제 기능 구현시에는 API 요청을 보내야 한다.
        set({
            notifications: {
                replies: [],
                messages: [],
            },
        }),
}));
