import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Card, Divider, List, ListItem, ListItemText} from '@material-ui/core';
import {KeyboardArrowRight} from '@material-ui/icons';
import map from 'lodash';

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
  const { classes, post } = props;
    console.log('props post: ', props.post.post);
  return (

    <List className={classes.root}>
      <Card>
          {post.map ((p) => {
              return(
              <ListItem>
                  <KeyboardArrowRight/>
                  <ListItemText primary={p.post}/>
              </ListItem>
              )
          })}

      </Card>
      <Divider />
    </List>
  );
}

PostsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostsList);