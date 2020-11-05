import React from 'react';

class Comment extends React.Component {
    state = {
    }

    componentDidMount() {
        fetch(`<p>https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty</p>`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({...data})
            });
    }

    render() {
        return(
           <div>
               Comment {this.state.text}
           </div>
           );
    }
}

export default Comment;