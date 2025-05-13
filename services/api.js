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




export async function getLatestNews() {
    try {
        // const response = await api.get(`/api/1/latest?apikey=${API_KEY}&language=en`);
        const response = await new Promise((resolve) =>{
            setTimeout(() => {
                resolve({data:mockNews})
            }, 1500);
        });
        console.log(response)
        const latestNews = response.data.results.map((resItem) => ({
            articleId: resItem.article_id,
            title: resItem.title,
            link: resItem.link,
            descriptions: resItem.description,
            imageUrl: resItem.image_url,
        }))


        return latestNews;

    } catch (error) {

        throw error;
    }
}
