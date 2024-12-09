import { create } from 'zustand';

export const useThreadsTitleStore = create((set) => ({
    threadsTitle: '',
    setThreadsTitle: (title) => set({ threadsTitle: title }),
}));
