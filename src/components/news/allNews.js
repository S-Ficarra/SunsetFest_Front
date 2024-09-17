import React from "react";
import { Link } from "react-router-dom";
import { useAllNews } from "../../hooks/Publications/useAllNews";
import './allNews.css'
import { BASE_URL } from "../../App";


function AllNews () {

    const { allNews } = useAllNews();

    return (
        <section className="AllNewsSection">
            <div className="AllNewsContainer">
                {allNews.map((news) => (
                    <Link to={`/actualites/${news.id}/${encodeURIComponent(news.title.replace(/\s/g, '-'))}`} key={news.id}>
                        <div className="NewsContainer">
                        <img src={`${BASE_URL}${news.image}`} alt={news.title} />
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