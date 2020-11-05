import React from 'react';

class Comment extends React.Component {
    state = {
        kid: []
    }
    render() {
        return(
           <div>
               {
               fetch(`<p>https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty</p>`)
               .then((response) => response.json())
               .then((data) => {})
    }
           </div>
           );
    }
}

export default Comment;