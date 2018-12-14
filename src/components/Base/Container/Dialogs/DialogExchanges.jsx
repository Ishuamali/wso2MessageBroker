import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DropdownType from "./DropDowns/DropdownType";
import DropdownDurability from "./DropDowns/DropdownDurability";
import DropdownAutodelete from "./DropDowns/DropdownAutodelete";
import Tooltip from "@material-ui/core/Tooltip";

export default class FormDialog extends React.Component {
  state = {
    open: false,
    color: "#009688"
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(props) {
    return (
      <div>
        <Tooltip title="Add a new Exchange">
          <Button variant="contained" onClick={this.handleClickOpen}>
            Add
          </Button>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          max-width="95% !important;"
        >
          <DialogTitle id="form-dialog-title">Add a new Exchange</DialogTitle>
          <DialogContent>
            <DialogContentText />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="email"
              fullWidth
            />
            <DropdownType />
            <DropdownDurability />
            <DropdownAutodelete />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Add Exchange
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
