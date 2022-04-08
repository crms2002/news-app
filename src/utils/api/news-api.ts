import axios from 'axios';
import Article from '../interfaces/article';

namespace NewsApiUtils {
    export enum StatusCode {
        Ok = "ok",
        Error = "error"
    };

    export interface TopHeadlinesResponse {
        status: string,
        totalResults: number,
        articles: Article[]
    }

    export class Endpoints {
        public static TopHeadLines = (apiKey: string, country?: string) : string => {
            if (country == null) {country = "us"};
            return (`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`)  
        } 
    }
}

export class NewsAPI{
    private constructor(p:any) {}

    private static API_KEY : string = "558cb9194ef74cd396a437051af2ca80"

    public static StatusCode = NewsApiUtils.StatusCode;

    public static getLatestNews = () : Promise<NewsApiUtils.TopHeadlinesResponse> => {
        let endp = NewsApiUtils.Endpoints.TopHeadLines(this.API_KEY);

        return new Promise ((res, rej) => {
            axios.get<NewsApiUtils.TopHeadlinesResponse>(endp).then(resp=>{
                if (resp.data.status==NewsAPI.StatusCode.Ok) {
                    res(resp.data);
                }
                else {
                    rej("status not ok");
                }
            }).catch(reas => rej(reas))
        }) 
    }

    public static getLatestNewsAwait = async () => {
        let endp = NewsApiUtils.Endpoints.TopHeadLines(this.API_KEY);
        let v = (await axios.get<NewsApiUtils.TopHeadlinesResponse>(endp)).data;
        return v;
    }
}

export default NewsAPI;