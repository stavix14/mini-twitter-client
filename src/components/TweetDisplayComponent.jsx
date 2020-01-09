import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { deepPurple } from '@material-ui/core/colors';

const styles = {
  card: {
    maxWidth: 500,
    marginBottom: '1.5em'
  },
  avatar: {
    backgroundColor: deepPurple[300],
  },
};

const TweetDisplayComponent = props => {
  const { classes, username, message, date } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        title={username}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
}

TweetDisplayComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default withStyles(styles)(TweetDisplayComponent);
