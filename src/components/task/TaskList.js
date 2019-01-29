import React, { Component } from "react";
import { Link } from "react-router-dom";
import task_icon from "./task_icon.png";

export default class TaskList extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="taskButton">
          <button type="button" className="btn btn-success"
          onClick={() => (
            this.props.history.push("/tasks/new")
          )}

        </div>
      </React.Fragment>
    )
  }
}