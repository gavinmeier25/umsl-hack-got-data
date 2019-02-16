import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Card, Paper } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '80%',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing.unit * 2}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing.unit * 9}px`,
  },
  posts: {
    width: '95%',
    margin: '16px auto',
    color: '#7a55f4'
  },
  header: {
    width: '80%',
    margin: '32px auto'
  }
});



function PostsList(props) {
  const { classes, post, date } = props;
  return (
      <Card className={classes.posts}>
      <Typography className={classes.header} variant="h5">Posts</Typography>
        <List className={classes.root}>
          <Card>
            <ListItem>
              <Avatar>
                A
            </Avatar>
              <hr></hr>
              <ListItemText key={props} primary={post} secondary={date} />
            </ListItem>
          </Card>
          <Divider />
        </List>
      </Card>
  );
}

PostsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostsList);