import React, { Component } from "react";
import "./Event.css";

export default class EventDetail extends Component {
  render() {
    console.log(this.props);
    /*
            Using the route parameter, find the event that the
            user clicked on by looking at the `this.props.events`
            collection that was passed down from ApplicationViews
        */
    const event =
      this.props.events.find(
        a => a.id === parseInt(this.props.match.params.eventId)
      ) || {};

    return (
      <section className="event">
        <div key={event.id} className="card">
          <div className="card-body">
            <h4 className="card-title">{event.name}</h4>
            <h6 className="card-title">{event.date}</h6>
            <h6 className="card-title">{event.location}</h6>
            {/* <a
              href="#"
              onClick={() =>
                this.props
                  .deleteEvent(event.id)
                  .then(() => this.props.history.push("/events"))
              }
              className="card-link"
            >
              Delete
            </a> */}
          </div>
        </div>
      </section>
    );
  }
}