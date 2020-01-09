import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import TweetInputContainer from "../containers/TweetInputContainer";
import TweetDisplayContainer from "../containers/TweetDisplayContainer";
import { CREATE_NEW_TWEET, GET_TWEETS } from "../api";

const DashboardPage = props => {
    const { loading, error, data, refetch } = useQuery(GET_TWEETS);
    const [ createTweet ] = useMutation(CREATE_NEW_TWEET);
    const { username } = props.location.state;

    if (loading) return <CircularProgress />;
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            <TweetInputContainer submit={createTweet} refetch={refetch} username={username} />
            <TweetDisplayContainer tweets={data.tweets} loading={loading} error={error} />
        </div>
    );
};

export default DashboardPage;