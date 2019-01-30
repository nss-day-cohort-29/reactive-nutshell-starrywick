import React, { Component } from "react";
import "./Event.css";

export default class EventEdit extends Component {

state = {
  userId: "",
  eventDate: "",
  name: "",
  location: ""
}
// Update state whenever an input field is edited
handleFieldChange = evt => {
  const stateToChange = {}
  stateToChange[evt.target.id] = evt.target.value
  this.setState(stateToChange)
}

updateExistingEvent = evt => {
evt.preventDefault()

const existingEvent = {
  userId: this.state.userId,
  eventDate: this.state.eventDate,
  name: this.state.name,
  location: this.state.location
}

this.props.updateEvent(this.props.match.params.eventId, existingEvent)
.then(() => this.props.history.push("/events"))      
}

componentDidMount() {
  EventManager.get(this.props.match.params.eventId)
  .then(event => {
    this.setState({
      userId: event.userId,
      eventDate: event.eventDate,
      name: event.name,
      location: event.location
    });
  });
}

render() {
    return (
        <React.Fragment>
           <form className="eventForm">
              <div className="form-group">
                  <label htmlFor="eventDate">Date:</label>
                  <input type="date" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="eventDate" 
                    value = {this.state.eventDate} />
              </div>
              <div className="form-group">
                  <label htmlFor="name">Event:</label>
                  <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="name" 
                    value={this.state.name} />
              </div>
              <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="location" 
                    value={this.state.location} />
              </div>
              
              <button type="submit" 
              onClick={this.constructNewEvent} 
              className="btn btn-primary">SUBMIT</button>
          </form>
        </React.Fragment>
    )
}
}