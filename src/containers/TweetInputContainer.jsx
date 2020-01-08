import React from 'react';
import TweetInputComponent from "../components/TweetInputComponent";

class TweetInputContainer extends React.Component {
    state = {
        text: '',
        errors: ''
    };

    onChange = e => this.setState({text: e.target.value});

    onSubmit = () => {
        const errors = this.validate(this.state.text);
        const postingTime = new Date();
        console.log(postingTime.toJSON());

        this.setState({ errors });
        if (!errors) {
            this.props.submit({ variables: { username: this.props.username, message: this.state.text, date: postingTime } });
        }
        //clear the text area after
    }

    validate = (text) => {
        let errors = '';

        if (text.length === 0) {
            errors = "You cannot post an empty message!";
        }
        else if (text.length > 255) {
            errors = "You cannot post a message longer than 255 characters!";
        }
        return errors;
    }

    render() {
        const { text, errors } = this.state;
        return (
            <React.Fragment>
                <TweetInputComponent
                    errors={errors}
                    counter={text.length}                    
                    text={text}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
            </React.Fragment>
        );
    }
}

export default TweetInputContainer;