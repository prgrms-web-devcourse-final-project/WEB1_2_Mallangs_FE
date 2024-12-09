import { create } from 'zustand';

export const useLocationStore = create((set) => ({
    // locationStatus 객체를 제거하고 직접 상태로 관리
    coordinates: { lat: 0, lng: 0 },
    roadAddress: '',
    jibunAddress: '',
    building: '',

    setLocation: (locationData) =>
        set({
            coordinates: locationData.coordinates,
            roadAddress: locationData.roadAddress,
            jibunAddress: locationData.jibunAddress,
        }),

    setBuilding: (building) => set({ building }),

    resetLocation: () =>
        set({
            coordinates: { lat: 0, lng: 0 },
            roadAddress: '',
            jibunAddress: '',
            building: '',
        }),
}));

export default useLocationStore;
