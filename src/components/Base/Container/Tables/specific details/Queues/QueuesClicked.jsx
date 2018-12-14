import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import ExpansionPanelBindings from "./Expansionpanel/Bindings/ExpansionPanelBindings";
//import Addbindings from "./Expansionpanels/Addbindings/AddbindingsExpansionpanel";

const styles = theme => ({
  section: {
    margin: "20px"
  }
});

class QueuesClicked extends React.Component {
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
            Queue:{this.props.match.params.name}
          </Typography>
        </div>
        <br />
        <div className={classes.section}>
          <Typography variant="Body 1" color="inherit">
            Consumers:{this.props.match.params.consumerCount}
          </Typography>
          <br />
          <Typography variant="Body 1" color="inherit">
            Durabiliy:{this.props.match.params.durability}
          </Typography>
          <br />
          <Typography variant="Body 1" color="inherit">
            Capacity:{this.props.match.params.capacity}
          </Typography>
          <br />
          <Typography variant="Body 1" color="inherit">
            Size:{this.props.match.params.size}
          </Typography>
          <br />
          <Typography variant="Body 1" color="inherit">
            Autodelete:{this.props.match.params.autoDelete}
          </Typography>
        </div>
        <br />
        <div>
          <ExpansionPanelBindings data={this.props.match.params.name}/>
          <br />
        </div>
      </div>
    );
  }
}

QueuesClicked.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QueuesClicked);
