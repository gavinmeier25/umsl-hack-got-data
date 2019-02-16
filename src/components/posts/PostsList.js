import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, List, ListItem, ListItemText, Avatar, Divider } from '@material-ui/core';
import map from 'lodash'
import { KeyboardArrowRight } from '@material-ui/icons';

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
  console.log(props)
  return (
    
    <List className={classes.root}>
      <Card>
          <ListItem>
          <KeyboardArrowRight/>
          <ListItemText primary={post} secondary={date}/>
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