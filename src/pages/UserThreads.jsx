import ThreadItem from '../components/common/ThreadItem';

const UserThreads = () => {
    const THREAD_CATEGORY = {};

    return (
        <>
            <ul id="user-threads-category">
                <li className="user-threads-category-item current">
                    <span>전체</span>
                </li>

                <li className="user-threads-category-item">
                    <span>게시 중</span>
                </li>

                <li className="user-threads-category-item">
                    <span>게시 기간 만료</span>
                </li>

                <li className="user-threads-category-item">
                    <span>완료</span>
                </li>

                <li className="user-threads-category-item">
                    <span>숨김</span>
                </li>
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
