import { create } from 'zustand';

export const useLocationStore = create((set) => ({
    locationStatus: {
        coordinates: { lat: 0, lng: 0 },
        roadAddress: '',
        jibunAddress: '',
        building: '', // 상세주소
    },

    // 위치 정보 설정
    setLocation: (locationData) =>
        set((state) => ({
            locationStatus: {
                ...state.locationStatus,
                coordinates: locationData.coordinates,
                roadAddress: locationData.roadAddress,
                jibunAddress: locationData.jibunAddress,
            },
        })),

    // 상세주소 설정
    setBuilding: (building) =>
        set((state) => ({
            locationStatus: {
                ...state.locationStatus,
                building,
            },
        })),

    // 위치 초기화
    resetLocation: () =>
        set({
            locationStatus: {
                coordinates: { lat: 0, lng: 0 },
                roadAddress: '',
                jibunAddress: '',
                building: '',
            },
        }),
}));

export default useLocationStore;
