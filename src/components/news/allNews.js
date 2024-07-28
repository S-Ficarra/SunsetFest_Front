import React from "react";
import { convertToBase64 } from "../../services/utils";
import { Link } from "react-router-dom";
import { useAllNews } from "../../hooks/useAllNews";
import './allNews.css'

function AllNews () {

    const { allNews } = useAllNews();

    return (
        <section className="AllNewsSection">
            <div className="AllNewsContainer">
                {allNews.map((news) => (
                    <Link to={`/actualites/${news.id}/${encodeURIComponent(news.title.replace(/\s/g, '-'))}`} key={news.id}>
                        <div className="NewsContainer">
                        <img src={convertToBase64(news.image.data)} alt={news.title} />
                        <div className="BlackFilter"></div>
                        <h2>{news.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    );
};
export default AllNews;