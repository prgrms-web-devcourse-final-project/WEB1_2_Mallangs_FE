import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';

import ThreadItem from '../components/common/ThreadItem';

const UserThreads = () => {
    const [currentCategory, setCategory] = useState('all');
    const [threadItems, setItemCategory] = useState([
        {
            id: 0,
            title: '박복례 헤어커커',
            type: 'places',
            state: 'listed',
        },
        {
            id: 1,
            title: '사주세요 냠냠 사료 전문점',
            type: 'places',
            state: 'listed',
        },
        {
            id: 2,
            title: '길거리에 누워있는 우매한 중생 좀 구해 주세요',
            type: 'rescue',
            state: 'hidden',
        },
        {
            id: 3,
            title: '저잣거리에 드래곤',
            type: 'rescue',
            state: 'done',
        },
        {
            id: 4,
            title: '집 나간 우리 아들 찾습니다',
            type: 'missing',
            state: 'expired',
        },
        {
            id: 5,
            title: '집 나간 우리 납편 찾습니다',
            type: 'missing',
            state: 'expired',
        },
    ]);

    const threadCategory = [
        { label: '전체', value: 'all' },
        { label: '게시 중', value: 'listed' },
        { label: '게시 기간 만료', value: 'expired' },
        { label: '완료', value: 'done' },
        { label: '숨김', value: 'hidden' },
    ];

    return (
        <>
            <Swiper
                id="user-threads-category"
                slidesPerView={'auto'}
                freeMode={true}
                spaceBetween={8}
            >
                {threadCategory.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div
                                className={`user-threads-category-item ${currentCategory === item.value ? 'current' : undefined}`}
                                onClick={() => setCategory(item.value)}
                            >
                                <span>{item.label}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <div className="user-common-item-list">
                {threadItems.map((item, index) => {
                    if (currentCategory === 'all')
                        return (
                            <ThreadItem
                                index={index}
                                threadTitle={item.title}
                                threadType={item.type}
                                threadState={item.state}
                                isEditMode={false}
                                key={index}
                            />
                        );

                    return (
                        item.state === currentCategory && (
                            <ThreadItem
                                index={index}
                                threadTitle={item.title}
                                threadType={item.type}
                                threadState={item.state}
                                isEditMode={false}
                                key={index}
                            />
                        )
                    );
                })}
            </div>
        </>
    );
};

export default UserThreads;
