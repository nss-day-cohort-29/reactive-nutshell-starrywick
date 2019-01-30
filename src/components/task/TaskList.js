import React, { Component } from "react";
import { Link } from "react-router-dom";
import task_icon from "./task_icon.png";
import TaskCard from "./TaskCard"

export default class TaskList extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="taskButton">;
          <button type="button" className="btn btn-success"
            onClick={() => {
              this.props.history.push("/tasks/new")
            }}
          >Add Task</button>;
          <button type="button" className="btn btn-success"
            onClick={() => {
              this.props.history.push("/tasks/new")
            }}
          >Edit Task</button>;
        </div>;
        <section className="tasks">
          {this.props.tasks.map(task => (
            <TaskCard key={task.id} task={task} {...this.props} />
          ))};
        </section>
      </React.Fragment>
    );
  }
}
