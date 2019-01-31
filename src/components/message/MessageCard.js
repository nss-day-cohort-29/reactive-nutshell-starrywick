import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Message.css"

export default class MessageCard extends Component {
    render() {
        return (
            <div key={this.props.messages.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {/* {this.props.messages.id} */}
                        {this.props.messages.userId}
                        {this.props.messages.content}
                        <Link className="nav-link" to={`/messages/${this.props.messages.id}`}>Details</Link>
                        {/* <a href="#"
                            onClick={() => this.props.deleteMessage(this.props.messages.id)}
                            className="card-link">Remove Message</a> */}
                            <a
             href="/messages/id"
             onClick={() => this.props.deleteMessage(this.props.message.id)}
             className="card-link"
            >Delete</a>
                    </h5>
                </div>
            </div>
        )
    }
}