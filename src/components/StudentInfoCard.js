import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Paper } from "@material-ui/core";

const StudentInfoCard = props => {
  const { classes, schoolName, desiredField, goals } = props;

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent>
            <Typography component="h5" variant="h5">
              {schoolName}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {desiredField}
            </Typography>
            <Typography component="p">{goals}</Typography>
          </CardContent>
        </div>
      </Card>
    </Paper>
  );
};

export default withStyles({
  card: {
    display: "flex",
    alignContent: "start",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    minWidth: 500,
    maxWidth: 500,
    margin: 16
  }
})(StudentInfoCard);
