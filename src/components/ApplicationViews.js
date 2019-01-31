import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import TasksManager from '../modules/TasksManager';
import TaskList from './task/TaskList';
import TaskForm from './task/TaskForm';
import TaskCard from './task/TaskCard';
import EventList from "./event/EventList";
import EventManager from "../modules/EventManager";
import EventForm from "./event/EventForm";
import EventEdit from "./event/EventEdit";
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

/* ********** ARTICLES ********** */
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

  /* ********** TASKS ********** */

  addTask = task =>
    TasksManager.post(task)
      .then(() => TasksManager.getAll())
      .then(tasks =>
        this.setState({
          tasks: tasks
        })
      );

  deleteTask = id => {
    console.log("id:", id);
    console.log(`http://localhost:5002/tasks/${id}`);
    return fetch(`http://localhost:5002/tasks/${id}`, {
      method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:5002/tasks`))
    .then(e => e.json())
    .then(tasks => this.setState({
        tasks: tasks

      })
    )
  }

  updateTask = (taskId, editedTaskObj) => {
    console.log(editedTaskObj)
    return TasksManager.put(taskId, editedTaskObj)
    .then(e => e.json())
    .then(() => TasksManager.getAll())
    .then(e => e.json())
    .then(tasks => {
      this.setState({
        tasks: tasks
      })
    });
  }

/* ********** EVENTS ********** */
  addEvent = event =>
    EventManager.post(event)
      .then(() => EventManager.getAll())
      .then(events =>
        this.setState({
          events: events
        })
      );

  updateEvent = (eventId, editedEventObj) => {
    return EventManager.put(eventId, editedEventObj)
    .then(() => EventManager.getAll())
    .then(events => {
      this.setState({
        events: events
      })
    });
  }

/* ********** componentDidMount ********** */
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
    })

    /*Need to filter for only user and his/her friends */
    EventManager.getAll()
    .then(allEvents => {
      console.log("This is return from fetch all of EventManager.getAll")
      console.log("events", allEvents);
      this.setState({
        events: allEvents
      });
    })
  }

  
    render() {
      return (
        <React.Fragment>
        {/* ********** ARTICLES ********** */}
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

        {/* ********** FRIENDS ********** */}
          <Route
            path="/friends" render={props =>
              {
              return null
              // Remove null and return the component which will show list of friends
              }
            }
          />

        {/* ********** MESSAGES ********** */}
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

          {/* Edit form EDIT*/}
          <Route
            path="/tasks/:taskId(\d+)/edit" render={props => {
              return (
              <TaskForm {...props}
              updateTask={this.updateTask}/>
              );
            }}
          />

        {/* ********** EVENTS ********** */}
           {/* this is for the events add form - I am assigning the url /events/new and passing the prop addEvent and ... all other props associated with ApplicationView */}
        {/*EventForm ADD*/}
          <Route
          path="/events/new"
          render={props => {
            return (
              <EventForm
                {...props}
                addEvent={this.addEvent}
              />
            );
          }}
        />
        {/*EventList*/}
          <Route
            exact path="/events" 
            render={props => {
              return (
              <EventList {...props} 
               events={this.state.events} />
              );
            }}
          />
        {/*EventForm EDIT*/}
          <Route
            path="/events/:eventId(\d+)/edit" render={props => {
              return (
              <EventEdit {...props} 
              updateEvent={this.updateEvent}/>
              );
            }}
          />
      </React.Fragment>
     )};
  }
