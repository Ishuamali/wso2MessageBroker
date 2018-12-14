import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DropdownDurability from "./DropDowns/DropdownDurability";
import DropdownAutodelete from "./DropDowns/DropdownAutodelete";
import Tooltip from "@material-ui/core/Tooltip";

export default class FormDialog extends React.Component {
  state = {
    open: false
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
        <Tooltip title="Add a new Queue">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickOpen}
          >
            Add
          </Button>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a new Queue</DialogTitle>
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

            <DropdownDurability />
            <DropdownAutodelete />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Add Queue
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
