import axios from "axios";



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
        const response = await api.get(`/api/1/latest?apikey=${API_KEY}&language=en`);
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
