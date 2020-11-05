import React from 'react';
import Comment from './comment';

class Reply extends React.Component {
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
                   {this.state.kids && this.state.kids.map(id => <Comment id={id}/>)}
                </div>
           </>
           );
    }
}

export default Reply;