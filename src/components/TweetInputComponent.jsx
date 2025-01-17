import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import PurpleButton from "../components/PurpleButton";

const styles = {
    wrapper: {
        textAlign: 'center',
        marginTop: '2em',
        marginBottom: '5em'
    },
    tweetInputField: {
        width: '50%',
        color: 'white',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
    },
    helperDiv: {
        display: 'block',
        marginTop: '1em',
        position: 'relative',
        left: '20%'
    },
    buttonWrapper: {
        display: 'inline',
    },
    chCounter: {
        display: 'inline',
        marginRight: '1em'
    }
};

const TweetInputComponent = props => {
    const { classes, counter } = props;

    return(
        <div className={classes.wrapper}>
            <TextField
                id="outlined-basic"
                className={classes.tweetInputField}
                autoComplete="off"
                autoFocus={false}
                error={!!props.errors}
                helperText={props.errors}
                label="Here comes your tweet"
                onChange={props.onChange}
                multiline={true}
                inputProps={{ maxLength: 255 }}
                rows="5"
                rowsMax="10"
                variant="outlined"
                size="medium"
                value={props.text}
            />
            <div className={classes.helperDiv}>
                <p className={classes.chCounter}>{`${counter} / 255`}</p>
                {/* <Button className={classes.tweetButton} onClick={props.onSubmit}>Tweet</Button> */}
                <div className={classes.buttonWrapper}>
                    <PurpleButton onClick={props.onSubmit} name="Tweet" />
                </div>
            </div>
        </div>
    );
};

TweetInputComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    errors: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(TweetInputComponent);