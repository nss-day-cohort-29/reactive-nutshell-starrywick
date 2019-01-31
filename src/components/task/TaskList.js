import React, { Component } from "react";
import TaskCard from "./TaskCard"

export default class TaskList extends Component {
  render () {
    return (
      <React.Fragment>
          <div className="taskButton">
            <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/tasks/new")
              }}
            >Add Task</button>
          </div>
          <section className="tasks">
            <h1 className="header">Tasks:</h1>
            {this.props.tasks.map(task => (
            <TaskCard key={task.id} task={task} {...this.props} />
            ))}
           </section>
      </React.Fragment>
    );
  }
}

