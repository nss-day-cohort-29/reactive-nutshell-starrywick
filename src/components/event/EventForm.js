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
/* create the empty object stateToChange */
        const stateToChange = {}
/* evt.target.id functions like an index number in the array. The target depends on the field with event listener*/
        stateToChange[evt.target.id] = evt.target.value
        console.log("This is stateToChange from EventForm");
        console.log("StateToChange", stateToChange);
        this.setState(stateToChange)
    }

    constructNewEvent = evt => {
      evt.preventDefault();
        const event = {
          userId: 2,
          eventDate: this.state.eventDate,
          name: this.state.name,
          location: this.state.location          
        };  
        // Create the event and redirect user to event list
        this.props
          .addEvent(event)
          .then(() => this.props.history.push("/events"));
    };

    updateExistingEvent = evt => {
      evt.preventDefault()
      const existingEvent = {
        eventDate: this.state.eventDate,
        name: this.state.name,
        location: this.state.location
      }
      console.log("This is existingEvent from EventForm");
      console.log("existingEvent", existingEvent);
      this.props.updateEvent(this.props.match.params.eventId, existingEvent)
      .then(() => 
      this.props.history.push("/events"))      
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
        );
    }
}