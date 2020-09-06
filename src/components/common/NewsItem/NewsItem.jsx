import React from "react";
import Axios from "axios";

class NewsItem extends React.Component {
    state = {
        newsItem: [],
    };

    componentDidMount() {
        fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
            .then((response) => response.json())
            .then((data) => {
                data.map((newsId) => {
                    fetch(
                        `https://hacker-news.firebaseio.com/v0/item/${newsId}.json`
                    )
                        .then((response) => response.json())
                        .then((itemDetail) => {
                            this.setState(() => {
                                this.state.newsItem.push(itemDetail);
                                return { newsItem: this.state.newsItem };
                            });
                        });
                });
            });
    }
    render() {
        return (
            <ul className="news__list">
                {this.state.newsItem.map((news) => (
                    <li className="news__item" key={news.id}>
                        <a href={news.url} className="news__link">
                            {news.title}
                        </a>
                    </li>
                ))}
            </ul>
        );
    }
}

export default NewsItem;
