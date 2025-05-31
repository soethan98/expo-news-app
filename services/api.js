import axios from "axios";
import mockNews from '../assets/json/latest-news.json';
import mockDetailNew from '../assets/json/detail-news.json'



const BASE_URL = 'https://newsdata.io';
const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export async function getNewsById(id) {
    try {
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: mockDetailNew })
            }, 1500);
        });
        const newsDetail = response.data.results[0];
        return {
            articleId: newsDetail.article_id,
            title: newsDetail.title,
            descriptions: newsDetail.description,
            imageUrl: newsDetail.image_url,
            category: newsDetail.category[0],
            source: newsDetail.source_id,
            sourceIcon: newsDetail.source_icon,
            content: newsDetail.content,
            publishDate: newsDetail.pubDate
        };
    } catch (error) {
        throw error;
    }
}

export async function searchNews(filter) {
    const { category, country, query } = filter;
    try {
        const response = await api.get(`/api/1/latest?apikey=${API_KEY}&language=en&image=1&removeduplicate=1&size=10&${category}${country}${query}`);
        const searchResult = response.data.results.map((resItem) => ({
            articleId: resItem.article_id,
            title: resItem.title,
            link: resItem.link,
            descriptions: resItem.description,
            imageUrl: resItem.image_url,
            category: resItem.category[0],
            source: resItem.source_id,
            sourceIcon: resItem.source_icon
        }));

        return searchResult;
    } catch (error) {
        throw error;
    }


}


export async function getLatestNews(category = 'top') {
    try {
        // const response = await api.get(`/api/1/latest?apikey=${API_KEY}&language=en&category=${category}&removeduplicate=1`);
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: mockNews })
            }, 1500);
        });
        const latestNews = response.data.results.map((resItem) => ({
            articleId: resItem.article_id,
            title: resItem.title,
            link: resItem.link,
            descriptions: resItem.description,
            imageUrl: resItem.image_url,
            category: resItem.category[0],
            source: resItem.source_id,
            sourceIcon: resItem.source_icon
        }))


        return latestNews;

    } catch (error) {

        throw error;
    }

}


export async function getFavoritesNews(ids) {
    try {
        // const response = await api.get(`/api/1/news?apikey=${API_KEY}&id=${ids}`);

        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: mockNews })
            }, 1500);
        });

        const latestNews = response.data.results.map((resItem) => ({
            articleId: resItem.article_id,
            title: resItem.title,
            link: resItem.link,
            descriptions: resItem.description,
            imageUrl: resItem.image_url,
            category: resItem.category[0],
            source: resItem.source_id,
            sourceIcon: resItem.source_icon
        }))


        return latestNews;

    } catch (error) {
        throw error;
    }
}




