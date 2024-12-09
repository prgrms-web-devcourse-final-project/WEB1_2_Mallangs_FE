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

// 구조 글타래 작성
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

// 실종 글타래 작성
export const createMissingReportArticle = async (formData) => {
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
                articleType, // 'all'(대신 null값 가능), 'lost', 'rescue', 'place'
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

// 글타래 업체/시설 상세 정보 조회
export const getPlaceDetail = async (articleId) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/articles/public/${articleId}`,
        });

        return response.data;
    } catch (error) {
        console.error('업체/시설 상세 정보 로드 실패:', error.message);
        throw error;
    }
};

// 글타래 댓글 조회
export const getComments = async (articleId) => {
    try {
        const response = await axiosInstance.get(
            `/comments/article/${articleId}`,
        );
        return response.data;
    } catch (error) {
        if (error.response?.status === 404) {
            return [];
        }
        throw error;
    }
};

// 글타래 댓글 작성
export const postComment = async (commentData) => {
    try {
        const response = await axiosInstance.post(
            '/comments/article',
            commentData,
        );
        return response.data;
    } catch (error) {
        console.error('댓글 작성 실패:', error);
        throw error;
    }
};

// 글타래 댓글 수정
export const updateComment = async (commentId, commentData) => {
    try {
        const response = await axiosInstance.put(
            `/comments/${commentId}`,
            commentData,
        );
        return response.data;
    } catch (error) {
        console.error('댓글 수정 실패:', error);
        throw error;
    }
};

// 글타래 댓글 삭제
export const deleteComments = async (deleteData) => {
    try {
        await axiosInstance.delete('/comments', { data: deleteData });
    } catch (error) {
        console.error('댓글 삭제 실패:', error);
        throw error;
    }
};
