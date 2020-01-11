import React from 'react';
import PropTypes from "prop-types";
import { useQuery, useMutation } from '@apollo/client';
import { CircularProgress } from '@material-ui/core';
import PurpleButton from "../components/PurpleButton";
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
            <div style={{ position: "relative", left: "75%"}}>
                <PurpleButton onClick={() => props.history.goBack()} name="Logout" />
            </div>
            <TweetInputContainer submit={createTweet} refetch={refetch} username={username} />
            <TweetDisplayContainer tweets={data.tweets} />
        </div>
    );
};

DashboardPage.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.object.isRequired
    }).isRequired,
    history: PropTypes.shape({
        goBack: PropTypes.func.isRequired
      }).isRequired
};

export default DashboardPage;