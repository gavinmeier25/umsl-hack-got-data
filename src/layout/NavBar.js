import React from "react";

import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "white"
  }
};

const ButtonAppBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Find Yaself An Intern
          </Typography>
          {/* <Button href="/" variant="text" color="inherit">
            Home
          </Button> */}
          <Button href="/login" variant="text" color="inherit">
            Login
          </Button>
          <Button href="/feed" variant="text" color="inherit">
            Feed
          </Button>
          <Button href="/student" variant="text" color="inherit">
            Students
          </Button>
          <Button href="/employee" variant="text" color="inherit">
            Employers
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
