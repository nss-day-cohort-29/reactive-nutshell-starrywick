import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Event.css";

export default class EventCard extends Component {
  render() {
    return (
      <div key={this.props.event.id} className="card">
        <div className="card-body">
          <h6 className="card-title">
          <a
             href="/events/id"
             onClick={() => this.props.updateEvent(this.props.event.id)}
             className="card-link"
            >Edit</a>
            {this.props.event.eventDate}
            {this.props.event.name}
            {this.props.event.location}
          </h6>        
        </div>
      </div>
    );
  }
}