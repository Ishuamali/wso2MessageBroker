import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import ExpansionPanelBindings from "./Expansionpanels/Bindings/ExpansionPanelBindings";
//import Addbindings from "./Expansionpanels/Addbindings/AddbindingsExpansionpanel";

const styles = theme => ({
  section: {
    margin: "20px"
  }
});

class ExchangeClicked extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.value);
  }

  render(props) {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.section}>
          <Typography variant="h4" color="inherit">
            Exchange:{this.props.match.params.name}
          </Typography>
        </div>
        <br />
        <div className={classes.section}>
          <Typography variant="Body 1" color="inherit">
            Type:{this.props.match.params.type}
          </Typography>
          <br />
          <Typography variant="Body 1" color="inherit">
            Durabiliy:{this.props.match.params.durability}
          </Typography>
        </div>
        <br />
        <div>
          <ExpansionPanelBindings data={this.props.match.params.name} />
          <br />
        </div>
      </div>
    );
  }
}

ExchangeClicked.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExchangeClicked);
