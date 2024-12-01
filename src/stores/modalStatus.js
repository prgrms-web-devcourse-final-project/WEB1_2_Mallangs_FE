import { create } from 'zustand';

export const useModalStore = create((set) => ({
    // writeType, editType: [ places, rescue, missing, other ]

    isModalShowing: false,
    modalStatus: {
        isThisMine: true,
        writeMode: {
            isWriteOn: false,
            writeType: 'places',
        },
        editMode: {
            isEditOn: false,
            editType: 'places',
        },
        threadType: 'profile',
        threadUser: {
            userID: 0,
            userName: '김땅콩',
            userImage: 'https://picsum.photos/128/128?random=2',
            userDescription: '어쩌고 저쩌고',
            isAuthenticated: false,
        },
        threadAnimal: {},
        modalData: {
            // 글타래 데이터 전달 방식
            latitude: 0.0,
            longtitude: 0.0,
            threadTitle: '이것은 Zustand가 가지고 있는 제목',
            mainCategory: '주 분류',
            subCategory1: '서브 분류 1',
            subCategory2: '서브 분류 2',
            subCategory3: '서브 분류 3',
            masterNavigations: [
                {
                    label: '프로필',
                    value: 'profile',
                    count: null,
                    slaveNavigations: [
                        {
                            label: '말랑이 정보',
                            value: 'mallangs-info',
                            count: null,
                        },
                        {
                            label: '사용자 정보',
                            value: 'user-info',
                            count: null,
                        },
                    ],
                },
                {
                    label: '사용자 활동',
                    value: 'activities',
                    count: null,
                    slaveNavigations: [
                        {
                            label: '작성 글타래',
                            value: 'user-threads',
                            count: null,
                        },
                        {
                            label: '작성 글',
                            value: 'user-articles',
                            count: null,
                        },
                        {
                            label: '작성 댓글',
                            value: 'user-replies',
                            count: null,
                        },
                        {
                            label: '작성 리뷰',
                            value: 'user-reviews',
                            count: null,
                        },
                    ],
                },
                {
                    label: '메시지',
                    value: 'direct-message',
                    count: null,
                    slaveNavigations: [
                        {
                            label: '1 : 1 대화 목록',
                            value: 'user-chat-list',
                            count: null,
                        },
                        {
                            label: '차단 유저 목록 (미확정)',
                            value: 'user-ignores',
                            count: null,
                        },
                    ],
                },
            ],
        },
    },
    toggleModal: (setValue) => set({ isModalShowing: setValue }),
}));
