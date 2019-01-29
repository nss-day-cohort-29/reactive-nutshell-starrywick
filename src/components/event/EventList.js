import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Event.css";
import EventCard from "./EventCard";

export default class EventList extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="eventButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/events/new");
            }}
          >
            Add Event
          </button>
        </div>
        <section className="events">
          {this.props.events.map(event => (
            <EventCard key={event.id} event={event} {...this.props} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
        