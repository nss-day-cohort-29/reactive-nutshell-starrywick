import React, { Component } from "react";
import { Link } from "react-router-dom";
import task_icon from "./task_icon.png";

export default class TaskCard extends Component {
  render() {
    return (
      <div key={this.props.task.id} className="card">
        <div className="card-body">
          <h3 className="card-title">
            <img src={task_icon} className="icon-task" alt="Clipboard_Image" />
            {this.props.task.name}
            <a
             href="/tasks/id"
             onClick={() => this.props.deleteTask(this.props.task.id)}
             className="card-link"
            >Delete</a>
            <a
             href="/tasks/id"
             onClick={() => this.props.editTask(this.props.task.id)}
             className="card-link"
            >Edit</a>
          </h3>
        </div>
      </div>
    );
  }
}