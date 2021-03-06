import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class NativeSelects extends React.Component {
  state = {
    age: "",
    name: "",
    labelWidth: 0
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="exchange type">Durability</InputLabel>
          <Select
            native
            value={this.state.age}
            onChange={this.handleChange("age")}
            inputProps={{
              name: "age",
              id: "age-native-simple"
            }}
          >
            <option value="" />
            <option value={10}>Durable</option>
            <option value={20}>Non Durable</option>
          </Select>
        </FormControl>
      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NativeSelects);
