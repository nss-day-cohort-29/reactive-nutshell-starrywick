import React, { Component } from "react";
import { Link } from "react-router-dom";
import task_icon from "./task_icon.png";
import TaskCard from "./TaskCard"

export default class TaskList extends Component {
  render () {
    return (
      <React.Fragment>
        <section className="tasks">
          <div className="taskButton">
            <button
            type="button"
            className="btn btn-success"
            onClick={() => {
                this.props.history.push("/tasks/new")
              }}
            >Add Task</button>
            <hr />
            <h1 className="header">Tasks:</h1>

            {this.props.tasks.map(task => (

            <TaskCard key={task.id} task={task} {...this.props} />
            ))}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
