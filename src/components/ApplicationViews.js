import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import EventList from "./event/EventList";
import EventManager from "../modules/EventManager";
import EventForm from "./event/EventForm";
import EventEdit from "./event/EventEdit";
import ArticleList from "./articles/ArticleList";
import ArticleCard from "./articles/ArticleCard";
import ArticleForm from "./articles/ArticleForm";
import ArticleManager from "../modules/ArticleManager";
import MessageList from "./message/MessageList";
import MessageCard from "./message/MessageCard";
import MessageForm from "./message/MessageForm";
import MessageManager from "../modules/MessageManager";


export default class ApplicationViews extends Component {
  state = {
    articles: [],
    tasks: [],
    events: [],
    messages: []
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
  };

  /* ********** MESSAGES ********** */
  addMessage = message =>
  MessageManager.post(message)
    .then(() => MessageManager.getAll())
    .then(messages =>
      this.setState({
        messages: messages
      })
    );

deleteMessage = id => {
  return fetch(`http://localhost:5002/messages/${id}`, {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(() => fetch(`http://localhost:5002/messages`))
    .then(response => response.json())
    .then(messages =>
      this.setState({
        messages: messages
      })
    );
};

/* ********** componentDidMount ********** */
  componentDidMount() {
    ArticleManager.getAll().then(allArticles => {
      console.log("articles", allArticles);
      this.setState({
        articles: allArticles
      });
    });

    // TaskManager.getAll()
    // .then(tasks => {
    //   this.setState({
    //     tasks: tasks
    //   });
    // });

    /*Need to filter for only user and his/her friends */
    EventManager.getAll()
    .then(allEvents => {
      console.log("This is return from fetch all of EventManager.getAll")
      console.log("events", allEvents);
      this.setState({
        events: allEvents
      });
    });

    MessageManager.getAll().then(allMessages => {
      console.log("messages", allMessages);
      this.setState({
        messages: allMessages
      });
    });
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

{/* ********** FRIENDS ********** */}
          <Route
            path="/friends" render={props => {
              return null
              // Remove null and return the component which will show list of friends
            }}
          />

{/* ********** MESSAGES ********** */}
 {/* this is the list of messages */}
 <Route
            exact
            path="/messages"
            render={props => {
              // if (this.isAuthenticated()) {
              return (
                <MessageList
                  {...props}
                  deleteMessage={this.deleteMessage}
                  messages={this.state.messages}
                />
              );
              // } else {
              //   return <Redirect to="/login" />;
              // }
            }}
          />
          {/* this is the detail for individual message */}
          <Route
            path="/messages/:messagesId(\d+)"
            render={props => {
              return (
                <MessageCard
                  {...props}
                  deleteMessage={this.deleteMessage}
                  messages={this.state.messages}
                />
              );
            }}
          />
          {/* this is the messages add form */}
          <Route
            path="/messages/new"
            render={props => {
              return (
                <MessageForm
                  {...props}
                  addMessage={this.addMessage}
                />
              );
            }}
          />

{/* ********** TASKS ********** */}
          <Route
            path="/tasks" render={props => {
              return null
              // Remove null and return the component which will show the user's tasks
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
     );
    }
  }
