import React, { Component } from 'react'
// import "../login/Login.css"

export default class MessageForm extends Component {

    state = {
        id: "",
        userId: "",
        content: "",
        userName: "",
        timeStamp: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructMessage = evt => {
        evt.preventDefault()
        const ts = new Date().toLocaleString()
        const message = {
            id: this.state.id,
            userId: this.state.userId,
            content: this.state.content,
            timeStamp: ts
        }

        this.props.addMessage(message).then(() => this.props.history.push("/messages"))
    }

    render() {

        return (
            <React.Fragment>
                <h2>New Message</h2>
                <hr />
                <form className="messageForm">
                    <div className="form-group">
                            <div className="form-group">
                                <section className="userIdField">
                                    <label htmlFor="userID"></label>
                                    <h5 htmlFor="userId">UserId:</h5>
                                    <p></p>
                                    <input type="text" required={true}
                                        className="form-control"
                                        onChange={this.handleFieldChange}
                                        id="userId"
                                        placeholder="userId"
                                        size="35" />
                                </section>
                            </div>
                            <p></p>
                            <div className="form-group">
                                <section className="contentField">
                                    <p></p>
                                    <h5 htmlFor="content">Content:</h5>
                                    <p></p>
                                    <textarea 
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="content" 
                                    placeholder="content" rows="5" cols="70"></textarea>
                                </section>
                            </div>
                    </div>
                    <p></p>
                    <button type="submit" onClick={this.constructMessage} className="btn btn-primary">Post Message</button>
                </form>
            </React.Fragment>
        )
    }
}