import React from "react";
import TableQueues from "./Tables/TableQueues";
import DialogQueues from "./Dialogs/DialogQueues";

export default class BodyQueues extends React.Component {
  render() {
    return (
      <div>
        <div align="right">
          <DialogQueues />
          <TableQueues />
        </div>
      </div>
    );
  }
}
