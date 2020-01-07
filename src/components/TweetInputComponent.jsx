import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const styles = {
    tweetComponent: {
        marginLeft: '25%',
        marginRight: '25%',
    },
    tweetTextField: {
        width: '50%',
        color: 'white',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
    },
    helperDiv: {
        display: 'block',
        marginTop: '1em',
        float: 'right'

    },
    tweetButton: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        display: 'inline',
    },
    chCounter: {
        display: 'inline'
    }
};

const TweetInputComponent = props => {
    const { classes, counter } = props;

    return(
        <div className={classes.tweetComponent}>
            <TextField
                id="outlined-basic"
                className={classes.tweetTextField}
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
                <Button className={classes.tweetButton} onClick={props.onSubmit}>Tweet</Button>
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