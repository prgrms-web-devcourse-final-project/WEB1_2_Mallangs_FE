import axios from 'axios';
import axiosInstance from './axios';

const baseURL = import.meta.env.VITE_API_MOCK_URL;
// .env.local에 추가 요망 - VITE_API_MOCK_URL=https://my-json-server.typicode.com/SoRaang/Mock-JSON-Server

export const getThreadList = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}/threads`,
            withCredentials: true,
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const createRescueArticle = async (formData) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/articles',
            data: formData,
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
