import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Event.css";

export default class EventCard extends Component {
  render() {
    return (
      <div key={this.props.event.id} className="card">
        <div className="card-body">
          <a
             href={`/events/${this.props.event.id}/edit`}
             onClick={() => this.props.updateEvent(this.props.event.id)}
             className="card-link"
            >Edit</a>
          <h5 className="card-title">{this.props.event.eventDate}</h5>
          <h5 className="card-title">{this.props.event.name}</h5>
          <h5 className="card-title">{this.props.event.location}</h5>        
        </div>
      </div>
    );
  }
}