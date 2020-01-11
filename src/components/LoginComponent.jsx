import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import PurpleButton from "../components/PurpleButton";

const styles = {
    wrapper: {
        textAlign: "center",
        marginTop: "2em"
    },
    buttonWrapper: {
        display: "inline",
        marginLeft: "1em"
    }
}

const LoginComponent = props => {
    const { classes, errors, email, onChange, onSubmit } = props;

    return (
        <div className={classes.wrapper}>
            <TextField
                autoFocus={true}
                error={!!errors}
                helperText={errors}
                label="email"
                name="email"
                placeholder="example@optioffer.com"
                value={email}
                onChange={onChange}
            />
            <div className={classes.buttonWrapper}>
                <PurpleButton className={classes.button} onClick={onSubmit} name="Login" />
            </div>
        </div>
    );
}

LoginComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    errors: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(LoginComponent);