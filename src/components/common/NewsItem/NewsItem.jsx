import React from "react";
import Modal from 'react-modal';

class NewsItem extends React.Component {
    state = {
        newsItem: [],
        modalIsOpen: {}
    };

    getModal(value) {
        let modalKey = {};
        modalKey[value] = true;
        this.setState({
            modalIsOpen: Object.assign( {}, this.state.modalIsOpen, modalKey)
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
                        <a href='javascript:void(0);' className="news__link" onClick={() => this.getModal(news.id) }>
                            {news.title}
                        </a>
                    <Modal isOpen={this.state.modalIsOpen[news.id]} onRequestClose={() => this.hideModal()}>
                        <a href={news.url} target="_blank">{news.title}</a>
                        <h6>Comment</h6>
                        {news && news.kids && news.kids.map(comment => `<p>https://hacker-news.firebaseio.com/v0/item/${comment.id}.json?print=pretty</p>`)}
                    </Modal>
                    </li>
                ))}
            </ul>
        );
    }
}

export default NewsItem;
