import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import axios from "axios";

const rows = [
  {
    id: "Queue",
    numeric: false,
    disablePadding: true,
    label: "Queue"
  },

  {
    id: "BindingPattern",
    numeric: true,
    disablePadding: false,
    label: "BindingPattern"
  }
];

class EnhancedTableHead extends React.Component {
  state = {
    Bindings: []
  };

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                padding={row.disablePadding ? "none" : "default"}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel onClick={this.createSortHandler(row.id)}>
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: "0 0 auto"
  }
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            Bindings
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "teal !important"
    }
  }
});

const newTo = {
  pathname: "exchangeClicked",
  param1: "Par1"
};

class TableBindings extends React.Component {
  state = {
    order: "asc",
    orderBy: "name",
    selected: [],
    Bindingdata: [],

    data: [
      //   createData("amq.match", "headers", "durable", "yes"),
      //   createData("amq.topic", "topic", "non durable", "no"),
      //   createData("amq.direct1", "direct", "durable", "No"),
      //   createData("amq.fanout2", "fanout", "non durable", "yes"),
      //   createData("amq.match3", "headers", "durable", "yes"),
      //   createData("amq.topic4", "topic", "non durable", "no"),
      //   createData("amq.direct5", "direct", "durable", "No"),
      //   createData("amq.fanout6", "fanout", "non durable", "yes"),
      //   createData("amq.match7", "headers", "durable", "yes"),
      //   createData("amq.topic8", "topic", "non durable", "no")
    ],

    page: 0,
    rowsPerPage: 5
  };

  componentDidMount() {
    const url = `/broker/v1.0/exchanges/${this.props.data.trim()}/bindings`;
    console.log("trim",this.props.data.trim())
    console.log("url", url)
    axios
      .get(url, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YWRtaW46YWRtaW4="
        }
      })

      .then(response => {
        console.log("Response", response);
        const DATA = [];
        response.data.forEach((element, index) => {
          console.log("element", element);
          DATA.push({
            id: index,
            bindingPattern: element.bindingPattern,
            bindings: element.bindings[0]["queueName"]
          });
          //   DATA.push(
          //     createData(
          //       element.name,
          //       element.type,
          //       element.durable,
          //       element.permissions
          //     )
          //   );
          console.log("Dgg", element.bindings[0]["queueName"]);
        });
        console.log("DATA", DATA);
        this.setState({ Bindingdata: response, data: DATA });

        //console.log("whynotdurable", this.state.data[0]["durable"]);

        //console.log(this.state.Exchangedata);
        //console.log("My data", this.state.data);
        //console.log("My DATA", DATA);
      })

      // .then(response => response.data)

      .catch(function(error) {
        // console.log(error);
      });

    {
      /*axios("/broker/v1.0/queues", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      auth: {
        username: "admin",
        password: "admin"
      }
    }).then(response => {});
    */
    }
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    //console.log("data to render", this.state.data);
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    //console.log("tbl", props.data);
    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((element, index) => {
                  const isSelected = this.isSelected(element.id);
                  return (
                    <TableRow
                      hover
                      className={classes.tableRow}
                      onClick={event => this.handleClick(event, index)}
                      key={index}
                      role="checkbox"
                      selected={isSelected}
                      tabIndex={-1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>

                      <TableCell component="th" scope="row" padding="10px">
                        {element.bindings}
                      </TableCell>
                      <TableCell numeric>{element.bindingPattern}</TableCell>
                    </TableRow>
                  );
                })}
              {/* {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      className={classes.tableRow}
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.name}
                      </TableCell>
                      <TableCell numeric>{n.type}</TableCell>
                      <TableCell numeric>{n.durable}</TableCell>
                      {console.log("n", n.durable)}
                      <TableCell numeric>{n.permissions}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

TableBindings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableBindings);
