import React from 'react';
import Comment from './comment';

class Comment extends React.Component {
    state = {
    }

    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({...data})
            });
    }

    render() {
        return(
           <>
               <div className="comment__text">{this.state.text}</div>
               <Comment />
           </>
           );
    }
}

export default Comment;