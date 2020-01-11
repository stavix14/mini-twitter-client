import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

const styles = {
    root: {
        background: deepPurple[500],
        color: 'white',
    }
};

const PurpleButton = props => {
    const { classes, onClick, name } = props;

    return <Button className={classes.root} onClick={onClick}>{name}</Button>
};

PurpleButton.propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    name: PropTypes.string.isRequired
};

export default withStyles(styles)(PurpleButton);