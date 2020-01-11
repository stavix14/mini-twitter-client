import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TweetInputComponent from "../components/TweetInputComponent";

const TweetInputContainer = props => {
    const [text, setText] = useState('');
    const [errors, setErrors] = useState('');

    const onChange = e => setText(e.target.value);

    const validate = text => {
        let errors = '';

        if (text.length === 0) {
            errors = "You cannot post an empty message!";
        }
        else if (text.length > 255) {
            errors = "You cannot post a message longer than 255 characters!";
        }
        return errors;
    }

    const onSubmit = async () => {
        const errors = validate(text);
        const postingTime = new Date();

        setErrors(errors);
        if (!errors) {
             await props.submit({ variables: { username: props.username, message: text, date: postingTime } });
        }
        setText('');
        props.refetch();
    }

    return (
        <React.Fragment>
            <TweetInputComponent
                errors={errors}
                counter={text.length}                    
                text={text}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </React.Fragment>
    );
}

TweetInputContainer.propTypes = {
    username: PropTypes.string.isRequired,
    submit: PropTypes.func.isRequired,
    refetch: PropTypes.func.isRequired
};

export default TweetInputContainer;