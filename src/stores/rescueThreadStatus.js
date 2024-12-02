import { create } from 'zustand';

export const useThreadModalStore = create((set) => ({
    // writeType, editType: [ places, rescue, missing, other ]

    isThreadModalShowing: false,
    modalStatus: {
        isThisMine: true,
        editMode: false,
        threadType: 'rescue',
        threadUser: {
            userID: 0,
            userName: '배숭이',
            userImage: 'https://picsum.photos/128/128?random=2',
            userDescription: '어쩌고 저쩌고',
            isAuthenticated: false,
        },
        threadAnimal: {},
        modalData: {
            // 글타래 데이터 전달 방식
            latitude: 0.0,
            longtitude: 0.0,
            threadTitle: '안에 사람들이 있잖아',
            mainCategory: '황초롱이 추정',
            subCategory1: '2024.01.01',
            subCategory2: '16시 경',
            subCategory3: '대기중',
            masterNavigations: [
                {
                    label: '작성하기',
                    value: 'profile',
                    count: null,
                    slaveNavigations: [
                        {
                            label: '시설/업체 정보',
                            value: 'facility-info',
                            count: null,
                        },
                        {
                            label: '구조 요청',
                            value: 'thread-rescue',
                            count: null,
                        },
                        {
                            label: '실종 신고',
                            value: 'missing-report',
                            count: null,
                        },
                    ],
                },
            ],
        },
    },
    toggleModal: (setValue) => set({ isThreadModalShowing: setValue }),
}));
