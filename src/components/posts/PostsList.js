import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, List, ListItem, ListItemText, Avatar, Divider } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '95%',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing.unit * 2}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing.unit * 9}px`,
  }
});



function PostsList(props) {
  const { classes, post, date } = props;
  return (
    
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
  );
}

PostsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostsList);