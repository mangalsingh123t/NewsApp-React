/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

export default function NewsBourd({category,country}) {

    const [articles, setArticles] = useState([]);
// ${import.meta.env.NEWS_API_KEY}
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5dd955040a2641f0af2ab9e50950aacc`;

        fetch(url).then(
            response => response.json()
        ).then(data => 
            // console.log(data.articles)
            setArticles(data.articles)
            );
    },[category,country]
    )

    return (
        <>
            <h3 className="text-center">Latest <span className=" badge bg-danger">News</span></h3>

            {
               articles ? articles.map((news,index)=>{
                    return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                }
                )
                : null
            }
        </>
    )
}