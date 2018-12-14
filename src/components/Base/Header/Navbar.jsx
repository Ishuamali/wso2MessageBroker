import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MessagebrokerImage from "../images/message-broker.png";

const styles = {
  root: {
    flexGrow: 1
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            WSO2 Message Broker
          </Typography>
          <div>
            <img
              src={MessagebrokerImage}
              alt=""
              height="50"
              width="400"
              style={{ margin: 8 }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
