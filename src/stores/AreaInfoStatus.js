import { create } from 'zustand';

export const useAreaInfoStatus = create((set) => ({
    isPanelShowing: false,
    togglePanelStatus: (isShowing) =>
        set((state) => {
            state.isPanelShowing = isShowing;
            console.log(state.isPanelShowing);
        }),
}));
