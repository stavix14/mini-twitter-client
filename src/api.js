import gql from 'graphql-tag';

export const CREATE_NEW_TWEET = gql`
    mutation CreateTweet($username: String!, $message: String!, $date: DateTime!){
        createTweet(username: $username, message: $message, date: $date) {
            id
            username
            message
        }
    }
`;