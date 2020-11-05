import React from "react";
import Modal from 'react-modal';

class NewsItem extends React.Component {
    state = {
        newsItem: [],
        modalIsOpen: false,
        id: 0,
        title: '',
        url: '',
        kids: []
    };

    getModal(id, title, url, kids) {
        this.setState({
            modalIsOpen: true,
            id,
            title,
            url,
            kids
        } );
    }

    hideModal() {
        this.setState({
            modalIsOpen: false
        })
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
                        <a href='javascript:void(0);' className="news__link" onClick={() => this.getModal(news.id, news.title, news.url, news.kids) }>
                            {news.title}
                        </a>
                    </li>
                ))}
                <Modal isOpen={this.state.modalIsOpen[this.state.id]} onRequestClose={() => this.hideModal()}>
                    <a href={this.state.url} target="_blank">{this.state.title}</a>
                    <h6>Comment</h6>
                    {this.state.kids && this.state.kids.map(comment => `<p>https://hacker-news.firebaseio.com/v0/item/${comment.id}.json?print=pretty</p>`)}
                </Modal>
            </ul>
        );
    }
}

export default NewsItem;
