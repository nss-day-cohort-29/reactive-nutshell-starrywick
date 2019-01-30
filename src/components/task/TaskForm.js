import React, { Component } from "react";

//Data Structure:
//   "tasks": [
//     {
//       "id": 1,
//       "userId": 2,
//       "task": "task",
//       "dueDate": "2019-01-28",
//       "complete": false
//     }
export default class TaskForm extends Component {
  state = {
    taskName: "",
    dueDate: "",
    completed: false
  };

  // Update state when any input value is changed
  handleFieldChange = evt => {
    const stateToChange = {};
    console.log(evt.target.id, evt.target.value);
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // Validation, create task object, invoking fn reference from parent component
  constructNewTask = evt => {
    evt.preventDefault();
    if (this.state.taskName === "") {
      alert("Please include a task name.")
    }
    if (this.state.dueDate === "") {
      alert("Please select an expected completion date.")
    } else{
      const task = {
        name: this.state.taskName,
        dueDate: this.state.dueDate,
        id: this.state.id,
        userId: this.props.history.find(
          user => user.id === this.state.user).id
      }
      // Create the task and redirect the user to the Task List.
      this.props.addTask(task)
        .then(() => this.props.history.push("./tasks"));
    }
  };
  render() {
    return (
      <React.Fragment>
        <form className="taskForm">
          <div className="form-group">
          </div>
        </form>
      </React.Fragment>
    )
  }
}

