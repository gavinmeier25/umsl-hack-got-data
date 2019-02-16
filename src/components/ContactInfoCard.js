import React from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Paper
} from "@material-ui/core";

const ContactInfoCard = (props) => {
    const { classes, lastName, firstName, email, phone } = props;

    return (
      <Paper className={classes.paper}>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent>
              <Typography component="h5" variant="h5">
                {`${lastName}, ${firstName}`}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
              <a href={`mailto:${email}`}>{email}</a>
              </Typography>
              <Typography component="p">
              <a href={`tel:${phone}`}>{phone}</a>
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Paper>
    );
}

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
    minWidth: 250,
    maxWidth: 250,
    margin: 16
  }
})(ContactInfoCard);
