import React from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Paper,
  Divider
} from "@material-ui/core";

const CompanyInfoCard = props => {
  const { classes, companyName, position } = props;

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent>
            <Typography component="h5" variant="h5">
              {companyName}
            </Typography>
          </CardContent>
          <Divider variant="middle" />
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">
              {position}
            </Typography>
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
    minWidth: 500,
    maxWidth: 500,
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    minWidth: 500,
    maxWidth: 500,
    margin: 16
  }
})(CompanyInfoCard);
