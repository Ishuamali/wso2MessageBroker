import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DropdownDurability from "./DropDowns/DropdownDurability";
import AutoDelete from "./DropDowns/DropdownAutodelete";

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
        <Button
          variant="contained"
          color="#009688"
          onClick={this.handleClickOpen}
        >
          Add
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a new Consumer</DialogTitle>
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
            <AutoDelete />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Add Consumer
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
