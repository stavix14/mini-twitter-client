import React from 'react';
import { useMutation } from '@apollo/client';
import TweetInputContainer from "../containers/TweetInputContainer";
import { CREATE_NEW_TWEET } from "../api";

const DashboardPage = props => {
    const [createTweet, { data }] = useMutation(CREATE_NEW_TWEET);
    const { username } = props.location.state;

    return (
        <div>
            <TweetInputContainer submit={createTweet} username={username} />
        </div>
    );
};

export default DashboardPage;