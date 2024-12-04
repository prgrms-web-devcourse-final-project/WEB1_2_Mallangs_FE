import { useState } from 'react';
import ThreadItem from '../components/common/ThreadItem';

const UserThreads = () => {
    const [currentCategory, setCategory] = useState(0);
    const threadCategory = [
        { label: '전체', value: 'all' },
        { label: '게시 중', value: 'listed' },
        { label: '게시 기간 만료', value: 'expired' },
        { label: '완료', value: 'done' },
        { label: '숨김', value: 'hidden' },
    ];

    return (
        <>
            <ul id="user-threads-category">
                {threadCategory.map((item, index) => {
                    return (
                        <li
                            className={`user-threads-category-item ${currentCategory === index && 'current'}`}
                            key={index}
                            onClick={() => setCategory(index)}
                        >
                            <span>{item.label}</span>
                        </li>
                    );
                })}
            </ul>

            <div className="user-common-item-list">
                <ThreadItem
                    index={0}
                    threadState={'listed'}
                    isEditMode={false}
                />

                <ThreadItem
                    index={1}
                    threadState={'expired'}
                    isEditMode={false}
                />

                <ThreadItem index={2} threadState={'done'} isEditMode={false} />

                <ThreadItem
                    index={3}
                    threadState={'hidden'}
                    isEditMode={false}
                />

                <ThreadItem
                    index={4}
                    threadState={'hidden'}
                    isEditMode={false}
                />

                <ThreadItem
                    index={5}
                    threadState={'hidden'}
                    isEditMode={false}
                />

                <ThreadItem
                    index={6}
                    threadState={'hidden'}
                    isEditMode={false}
                />

                <ThreadItem
                    index={7}
                    threadState={'hidden'}
                    isEditMode={false}
                />

                <ThreadItem
                    index={8}
                    threadState={'hidden'}
                    isEditMode={false}
                />
            </div>
        </>
    );
};

export default UserThreads;
