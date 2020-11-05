import React from 'react';
import Reply from './reply';

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
               <div className="comment__text">
                   {this.state.text}
                   <Reply />
                </div>
           </>
           );
    }
}

export default Comment;