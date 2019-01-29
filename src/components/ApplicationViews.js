import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import EventList from "./event/EventList";
import EventManager from "../modules/EventManager";
import EventForm from "./event/EventForm";
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

  componentDidMount() {
    // Example code. Make this fit into how you have written yours.
    ArticleManager.getAll().then(allArticles => {
      console.log("articles", allArticles);
      this.setState({
        articles: allArticles
      });
    });
    TaskManager.getAll()
    .then(tasks => {
      this.setState({
        tasks: tasks
      });
    });
    EventManager.getAll()
    .then(events => {
      this.setState({
        events: events
      });
    });
  }

  updateEvent = (eventId, editedEventObj) => {
    return EventManager.put(eventId, editedEventObj)
    .then(() => EventManager.getAll())
    .then(events => {
      this.setState({
        events: events
      })
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
            exact path="/events" render={props => {
              return <EventList events={this.state.events} />
            }}
          />

          <Route
            path="/events/:eventId(\d+)/edit" render={props => {
              return <EventForm {...props} updateEvent={this.updateEvent}/>
            }}
          />  
        
      </React.Fragment>
     );
    }
  }
