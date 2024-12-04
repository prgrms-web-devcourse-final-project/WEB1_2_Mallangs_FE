import axios from 'axios';
import { useState } from 'react';

const CommunityPage = () => {
    const [currentData, setData] = useState('');
    const something = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://mallangplace.ap-northeast-2.elasticbeanstalk.com/api/v1/member/login',
                headers: {},
                data: {
                    userId: 'dsc0320',
                    password: '1Q2w3e4r@@',
                },
                withCredentials: true,
            });

            setData(response.data.RefreshToken);

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="inner-wrapper" style={{ marginTop: '12rem' }}>
            {currentData};
        </div>
    );
};

export default CommunityPage;
