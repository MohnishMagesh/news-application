import React, { useEffect, useState } from "react";
import OneArticle from "./OneArticle";

export default function NewsArticle(props) {
    const URL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d033246590ca453a80e11e60bb04daa2";

    const [articleDetails, setArticleDetails] = useState([]);

    useEffect(async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setArticleDetails(data.articles);
    }, []);

    console.log(articleDetails);

    function renderArticles() {
        const articleList = [];
        for(let i=0; i<articleDetails.length; i++) {
            articleList.push(<OneArticle details={articleDetails[i]}/>);
        }
        return articleList;
    }

    return (
        <div>
            <ul>
                <h2>News Articles</h2>
                <div>
                    {articleDetails && renderArticles()}
                </div>
            </ul>
        </div>
    );
}