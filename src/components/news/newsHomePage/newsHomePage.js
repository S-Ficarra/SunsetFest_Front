import React from "react";
import { convertToBase64 } from "../../../services/utils";
import { Link } from "react-router-dom";
import { useAllNews } from "../../../hooks/useAllNews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './newsHomePage.css';

function NewsHomePage () {

    const { allNews } = useAllNews();

    const sortedNews = allNews.slice(0, 5);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1299,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    };

    return (
        <section className="RecentNewsCarouselSection">
            <div className="SecondTitleContainer">
                <h1>DERNIÈRES NEWS</h1>
                <p>Suivez toute l'actualité du festival</p>
            </div>
            <Slider {...settings}>
                {sortedNews.map((news) => (
                    <div key={news.id} className="NewsSlide">
                        <Link to={`/actualites/${news.id}/${encodeURIComponent(news.title.replace(/\s/g, '-'))}`}>
                            <div className="NewsContainerHomePage">
                                <img src={convertToBase64(news.image.data)} alt={news.title} />
                                <div className="BlackFilter"></div>
                                <h2>{news.title}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
            <div className="ButtonContainer">
                <Link to='/actualites'><button className="BlackPinkButtonSmall">VOIR TOUTES LES ACTUALITÉS</button></Link>
            </div>
        </section>
    );
};

export default NewsHomePage;
