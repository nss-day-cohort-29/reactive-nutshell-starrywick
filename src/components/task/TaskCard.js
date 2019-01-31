import React, { Component } from "react";
import { Link } from "react-router-dom";
import task_icon from "./task_icon.png";

export default class TaskCard extends Component {
  render() {
    return (
      <div key={this.props.task.id} className="card">
        <div className="card-body">
          <div className="card-title">
            <img src={task_icon} className="icon-task" alt="Clipboard_Image" />
            {this.props.task.name}
            <div className="editButton">
              <button
              href={`/tasks/${this.props.task.id}/edit`}
              onClick={() =>
              this.props.updateTask(this.props.task.id, this.props.task)}
              className="card-link"
              >Edit</button>
            </div>

            <div className="deleteButton">
            <button
             onClick={() => this.props.deleteTask(this.props.task.id)}
             className="card-link"
            >Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}