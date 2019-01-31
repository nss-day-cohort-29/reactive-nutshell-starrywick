import React, { Component } from "react";
import TaskList from "./TaskCard";

//Data Structure:
//   "tasks": [
//     {
//       "id": 1,
//       "userId": 2,
//       "task": "task",
//       "dueDate": "2019-01-28",
//       "complete": false
//     }
//    ]

export default class TaskForm extends Component {
  state = {
    taskName: "",
    dueDate: "",
    completed: false
  };

  // Update state when any input value is changed
  handleFieldChange = evt => {
    const stateToChange = {};
    //console.log(evt.target.id, evt.target.value);
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // Validation, create task object, invoking fn reference from parent component
  constructNewTask = evt => {
    evt.preventDefault();
    if (this.state.taskName === "") {
      alert("Please include a task name.")
    } else{
      const task = {
        name: this.state.taskName,
        
        dueDate: this.state.dueDate
      }
      // Create the task and redirect the user to the Task List.
      this.props.addTask(task).then(() => this.props.history.push("/tasks"));
    }
  };
  render() {
    return (
      <React.Fragment>
        <form className="taskForm">
          <div className="form-group">
            <label htmlFor="taskName">Task Name</label>
            <input
              type="text"
              id="taskName"
              className="form-control"
              placeholder="Enter a task name"
              onChange={this.handleFieldChange}
              required
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskDueDate">Due Date:</label>
            <input
              type="date"
              id="taskDueDate"
              className="form-control"
              placeholder="Pick a completion date"
              onChange={this.handleFieldChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.constructNewTask}
          >Save
          </button>
        </form>
      </React.Fragment>
    )
  }
}

