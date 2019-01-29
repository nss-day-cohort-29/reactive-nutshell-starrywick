import React, { Component } from "react"
import EventManager from "../../modules/EventManager"

export default class EventForm extends Component {
    // Set initial state
    state = {
      eventDate: "",
      name: "",
      location: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEvent = evt => {
      evt.preventDefault()

      const existingEvent = {
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
                        <label htmlFor="eventDate">Date</label>
                        <input type="text" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="eventDate" 
                          value = {this.state.eventDate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Event Name</label>
                        <input type="text" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="name" 
                          value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="location" 
                          value={this.state.location} />
                    </div>
                    
                    <button type="submit" onClick={this.updateExistingEvent} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}