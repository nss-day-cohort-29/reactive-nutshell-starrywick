import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import TasksManager from '../modules/TasksManager';
import TaskList from './task/TaskList';
import TaskForm from './task/TaskForm';
import ArticleList from "./articles/ArticleList";
import ArticleCard from "./articles/ArticleCard";
import ArticleForm from "./articles/ArticleForm";
import ArticleManager from "../modules/ArticleManager";

export default class ApplicationViews extends Component {
  state = {
    articles: [],
    tasks: [],
    events: []
  };

  addArticle = article =>
    ArticleManager.post(article)
      .then(() => ArticleManager.getAll())
      .then(articles =>
        this.setState({
          articles: articles
        })
      );

  deleteArticle = id => {
    return fetch(`http://localhost:5002/articles/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => fetch(`http://localhost:5002/articles`))
    .then(response => response.json())
    .then(articles =>
      this.setState({
        articles: articles
      })
      );
    };

  addTask = task =>
    ArticleManager.post(task)
      .then(() => TasksManager.getAll())
      .then(tasks =>
        this.setState({
          tasks: tasks
        })
      );

  deleteTask = id => {
    return fetch(`http://localhost:5002/tasks/${id}`, {
      method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:5002/tasks`))
    .then(e => e.json())
    .then(tasks => this.state({
        tasks: tasks
      })
    )
  }

  putTask(taskId, existingTask) {
    return fetch(`http://localhost:5002/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingTask)
    }).then(e => e.json());
  }

  componentDidMount() {
    ArticleManager.getAll().then(allArticles => {
      console.log("articles", allArticles);
      this.setState({
        articles: allArticles
      });
    });
    TasksManager.getAll().then(allTasks => {
      this.setState({
        tasks: allTasks
      });
    });
  }
    render() {
      return (
        <React.Fragment>

          {/* this is the list of articles */}
          <Route
            exact
            path="/"
            render={props => {
              // if (this.isAuthenticated()) {
              return (
                <ArticleList
                  {...props}
                  deleteArticle={this.deleteArticle}
                  articles={this.state.articles}
                />
              );
              // } else {
              //   return <Redirect to="/login" />;
              // }
            }}
          />
          {/* this is the detail for individual news */}
          <Route
            path="/articles/:articlesId(\d+)"
            render={props => {
              return (
                <ArticleCard
                  {...props}
                  deleteArticle={this.deleteArticle}
                  articles={this.state.articles}
                />
              );
            }}
          />
          {/* this is the articles add form */}
          <Route
            path="/articles/new"
            render={props => {
              return (
                <ArticleForm
                  {...props}
                  addArticle={this.addArticle}
                />
              );
            }}
          />

          <Route
            path="/friends" render={props =>
              {
              return null
              // Remove null and return the component which will show list of friends
              }
            }
          />

          <Route
            path="/messages" render={props =>
              {
              return null
              // Remove null and return the component which will show the messages
              }
            }
          />

          {/* List of tasks */}
          <Route
            exact path="/tasks"
              render={props => {
                return (
                  <TaskList
                    {...props}
                    deleteTask={this.deleteTask}
                    tasks={this.state.tasks}
                  />
                );
              }}
          />

          {/* Add task form */}
          <Route
            path="/tasks/new"
            render={props => {
              return (
                <TaskForm
                  {...props}
                  addTask={this.addTask}
                />
              );
            }}
          />

          <Route
            path="/events" render={props =>
              {
              return null
              // Remove null and return the component which will show the user's tasks
              }
            }
          />
        </React.Fragment>
      )}
}