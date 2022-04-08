import React from "react";
import ArticleContainer from "../components/ArticleContainer/ArticleContainer";

const article = {
    "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
    },
    "author": "Amy Cheng",
    "title": "Russia-Ukraine war news: Live updates - The Washington Post",
    "description": "Kyiv said the humanitarian situation in Mariupol was even worse than in Bucha, as Moscow continued to insist the killings there were “staged provocations.”",
    "url": "https://www.washingtonpost.com/world/2022/04/05/russia-ukraine-war-news-zelensky-live-updates/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/04-04-2022/t_13fba8bb4d8546e7a48bf4bb70bfbdcf_name_94239094_b458_11ec_8358_20aa16355fb4_scaled.jpg&w=1440",
    "publishedAt": "2022-04-05T08:26:15Z",
    "content": "The International Committee of the Red Cross, which has for days been struggling to enter the devastated southern city of Mariupol to help evacuate citizens, said Tuesday that members of its team who… [+1245 chars]"
}

export const Test = () => {
    return (
        <ArticleContainer article={article}/>  
    );
}


export default Test;