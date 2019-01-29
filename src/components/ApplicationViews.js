import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import TasksManager from '../modules/TasksManager';
import TaskList from './task/TaskList';
import TaskForm from './task/TaskForm';


export default class ApplicationViews extends Component {

  componentDidMount() {
    TasksManager.getAll().then(allTasks => {
      this.setState({
        tasks: allTasks
      });
    });
  }

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/events" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    )
  }
}
