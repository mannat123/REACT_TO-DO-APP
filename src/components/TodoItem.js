import React, { Component } from "react";
import "../App.css";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import Box from "@material-ui/core/Box";
import { Checkbox } from "@material-ui/core";

export default class TodoInput extends Component {
  state = {
    showDetails: false,
  };
  render() {
    const {
      title,
      showDetail,
      completed,
      createdDate,
      handleChecked,
      handleDelete,
      handleEdit,
      details,
    } = this.props;

    return (
      <li className="list-group-item">
        <div style={{ width: "90%" }}>
          <Box
            display="flex"
            className="list-item"
            style={{ backgroundColor: "rgb(205,133,63)",padding:30 }}
          >
            <Box p={0} flexGrow={1} style={{ color: "whitesmoke"}}>
              <Checkbox checked={completed} onChange={handleChecked} />
              <div
                style={{
                  textDecoration: completed ? "line-through" : "",
                  display: "inline",
                  width:"30%",
                  marginTop:0,
                  position:"absolute",
                  zIndex:2
                }}
                onClick={handleChecked}
              >
                {title}
              </div>
            </Box>
            {this.state.showDetails && <p style={{position:"absolute", marginLeft:210,marginTop:-3,zIndex:2}}>{details}</p>}
            <Box p={1} mr={1} style={{position:"absolute" ,marginLeft:280,zIndex:2,marginTop:-15,marginBottom:10}}>
              <button
                style={{ width: "40%"}}
                className="button"
                onClick={() =>
                  this.setState({ showDetails: !this.state.showDetails })
                }
              >
                Show Details
              </button>
            </Box>
            <Box p={1} 
            style={{
              position:"absolute",
              marginLeft:620,
              zIndex:2,
              marginTop:-15
            }}
            >
              <div className="todo-icon">
                <EditRoundedIcon
                  style={{ color: "darkgreen" }}
                  onClick={completed ? {} : handleEdit}
                />
                <DeleteRoundedIcon
                  style={{ color: "red" }}
                  onClick={handleDelete}
                />
              </div>
            </Box>
            <div
            style={{
              fontSize:12,
              fontWeight:"bold",
              marginTop:55,
              position:"absolute",
              marginLeft:530,
              zIndex:1
            }}
            >
            {createdDate}
            </div>
          </Box>
        </div>
      </li>
    );
  }
}
