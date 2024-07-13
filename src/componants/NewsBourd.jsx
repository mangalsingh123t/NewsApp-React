/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

export default function NewsBourd({category}) {

    const [articles, setArticles] = useState([]);
// ${import.meta.env.NEWS_API_KEY}
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=65b6b16f6a2c4b428bb31f1e5b1e54b1`;

        fetch(url).then(
            response => response.json()
        ).then(data => 
            // console.log(data.articles)
            setArticles(data.articles)
            );
    },[category]
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