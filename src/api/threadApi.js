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

// 마커 데이터 조회
export const getArticleMarkers = async (
    bounds,
    articleType = 'all',
    placeCategory = null,
) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/articles/public/articlesMarkers',
            params: {
                articleType, // 'all'(대신 null값 가능), 'lost', 'rescue', 'place', 'user'
                placeCategory, // 카테고리3 항목 (동물약국, 카페 등...)
            },
            data: {
                northEastLat: bounds.getNorthEast().getLat(),
                northEastLon: bounds.getNorthEast().getLng(),
                southWestLat: bounds.getSouthWest().getLat(),
                southWestLon: bounds.getSouthWest().getLng(),
            },
        });

        return response.data;
    } catch (error) {
        console.error('마커 데이터 로드 실패:', error.message);
        throw error;
    }
};
