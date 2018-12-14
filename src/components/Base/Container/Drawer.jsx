import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../Header/Navbar";
import TableConsumers from "./Tables/TableConsumers";
import BodyExchanges from "./BodyExchanges";
import BodyQueues from "./BodyQueues";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import ExchangeClicked from "./Tables/specific details/Exchanges/ExchangeClicked";
import QueuesClicked from "./Tables/specific details/Queues/QueuesClicked";
//import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
import Route from "react-router-dom/Route";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#009688"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },

  button: {
    margin: theme.spacing.unit,
    "&:hover": {
      backgroundColor: "#E0F2F1",
      color: "black"
    }
  },
  addbutton: {
    backgroundColor: "#009688",
    align: "Right",

    margin: theme.spacing.unit,
    "&:hover": {
      backgroundColor: "#4DB6AC",
      color: "black"
    }
  },

  input: {
    display: "none"
  }
});

class DrawerInterface extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      buttonclicked: false,
      backgroundColor: "white",
      buttonName: "",
      open: false,
      scroll: "paper"
    };
  }

  render(props) {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        {/* <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="#B2DFDB" noWrap>
              WSO2 Message Broker
            </Typography>
          </Toolbar>
        </AppBar>

    */}
        <div align="center">
          <Navbar />
        </div>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Tooltip title="all Exchanges in the broker" enterDelay={300}>
            <Button variant="outlined" className={classes.button}>
              <Link to="/">Exchanges</Link>
            </Button>
          </Tooltip>
          <Tooltip title="all Queues in the broker">
            <Button variant="outlined" className={classes.button}>
              <Link to="/Queues">Queues</Link>
            </Button>
          </Tooltip>
          {/*<Tooltip title="all Consumers in the broker">
            <Button variant="outlined" className={classes.button}>
              <Link to="/Consumers">Consumers</Link>
            </Button>
          </Tooltip>

        */}

          {/*
            <li>
              <Tooltip title="all Exchanges in the broker">
                <Link to="/">Exchanges</Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="all Queues in the broker">
                <Link to="/Queues">Queues</Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="all Consumers in the broker">
                <Link to="/Consumers">Consumers</Link>
              </Tooltip>
            </li>
          </ul>

*/}
        </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={BodyExchanges} />
            <Route exact path="/Queues" component={BodyQueues} />
            {/*<Route exact path="/Consumers" component={TableConsumers} />*/}  
            <Route
              exact
              path="/exchangeClicked/:name,:type,:durability"
              component={ExchangeClicked}
            />
            <Route
              exact
              path="/queuesClicked/:name,:consumerCount,:durability,:capacity,:size,:autoDelete"
              component={QueuesClicked}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

DrawerInterface.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawerInterface);
