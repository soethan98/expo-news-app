import axios from "axios";
import mockNews from '../assets/json/latest-news.json';


const BASE_URL = 'https://newsdata.io';
const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});




export async function getLatestNews(category='top') {
    try {
        // const response = await api.get(`/api/1/latest?apikey=${API_KEY}&language=en&category=${category}&removeduplicate=1`);
        const response = await new Promise((resolve) =>{
            setTimeout(() => {
                resolve({data:mockNews})
            }, 1500);
        });
        const latestNews = response.data.results.map((resItem) => ({
            articleId: resItem.article_id,
            title: resItem.title,
            link: resItem.link,
            descriptions: resItem.description,
            imageUrl: resItem.image_url,
            category:resItem.category[0],
            source:resItem.source_id,
            sourceIcon:resItem.source_icon
        }))


        return latestNews;

    } catch (error) {

        throw error;
    }
}
