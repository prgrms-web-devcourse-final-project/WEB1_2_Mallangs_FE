import ThreadItem from '../components/common/ThreadItem';

const UserThreads = () => {
    return (
        <>
            <ul>
                <li>카테고리</li>
            </ul>

            <div>
                <ThreadItem />
                <ThreadItem />
            </div>
        </>
    );
};

export default UserThreads;
