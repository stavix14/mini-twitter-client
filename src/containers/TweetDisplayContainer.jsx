import React from 'react';
import TweetDisplayComponent from "../components/TweetDisplayComponent";

const TweetDisplayContainer = props => {
    const { tweets } = props;

    return (
        <div style={{ position: 'relative', left: '35%' }}>
            {tweets.slice().reverse().map( tweet => (
            <TweetDisplayComponent 
                key={tweet.id}
                username={tweet.username}
                message={tweet.message}
                date={tweet.date}
            />
        ))}
        </div>
    );
}

export default TweetDisplayContainer;