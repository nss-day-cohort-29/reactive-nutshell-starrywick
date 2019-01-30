import React, { Component } from "react"
import "./Event.css";
import EventManager from "../../modules/EventManager";

export default class EventEdit extends Component {
    // Set initial state
    state = {
      id: "",
      userId: "",
      eventDate: "",
      name: "",
      location: ""
    }

    handleFieldChange = evt => {
/* create the empty object stateToChange */
        const stateToChange = {}
/* evt.target.id functions like an index number in the array. The target depends on the field with event listener*/
        stateToChange[evt.target.id] = evt.target.value
        console.log("This is stateToChange from EventForm");
        console.log("StateToChange", stateToChange);
        this.setState(stateToChange)
    }

    updateExistingEvent = evt => {
      evt.preventDefault()
      const existingEvent = {
        id: this.state.id,
        userId: this.state.userId,
        eventDate: this.state.eventDate,
        name: this.state.name,
        location: this.state.location
      }
      console.log("updateExistingEvent from EventEdit", existingEvent);
      this.props.updateEvent(this.props.match.params.eventId, existingEvent)
      .then(() => this.props.history
      .push("/events"))
       
    }

    componentDidMount() {
      EventManager.get(this.props.match.params.eventId)
      .then(event => {
        this.setState({
          id: event.id,
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
          onClick={this.updateExistingEvent} 
          className="btn btn-primary">UPDATE</button>
        </form>
      </React.Fragment>
    );
  }
}