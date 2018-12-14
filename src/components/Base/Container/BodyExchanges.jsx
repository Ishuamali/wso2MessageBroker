import React from "react";
import TableExchanges from "./Tables/TableExchanges";
import DialogExchanges from "./Dialogs/DialogExchanges";

export default class BodyExchanges extends React.Component {
  render() {
    return (
      <div>
        <div align="right">
          <DialogExchanges />
          <TableExchanges />
        </div>
      </div>
    );
  }
}
