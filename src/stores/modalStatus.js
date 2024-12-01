import { create } from 'zustand';

export const useModalStore = create((set) => ({
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
        modalMode: 'profile',
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
                    label: '상위 메뉴 1',
                    value: 'menu1',
                    count: null,
                    slaveNavigations: [
                        {
                            label: '하위 메뉴 1',
                            value: 'submenu1',
                            count: null,
                        },
                        {
                            label: '하위 메뉴 2',
                            value: 'submenu2',
                            count: null,
                        },
                        {
                            label: '하위 메뉴 3',
                            value: 'submenu3',
                            count: null,
                        },
                    ],
                },
                {
                    label: '상위 메뉴 2',
                    value: 'menu2',
                    count: null,
                    slaveNavigations: [
                        {
                            label: '하위 메뉴 1',
                            value: 'submenu1',
                            count: null,
                        },
                        {
                            label: '하위 메뉴 2',
                            value: 'submenu2',
                            count: null,
                        },
                    ],
                },
            ],
            threadUser: {
                userID: 0,
                userName: '김땅콩',
                userImage: '',
            },
        },
    },
    toggleModal: (setValue) => set({ isModalShowing: setValue }),
}));
