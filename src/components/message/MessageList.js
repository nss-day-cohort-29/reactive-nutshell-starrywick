import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Message.css'


export default class MessageList extends Component {

    render() {
        
        this.props.messages.sort(function(a,b){return new Date(a.timeStamp) - new Date(b.timeStamp)});
 
        return (
            <React.Fragment>
                <div className="messageButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/messages/new")
                        }
                    }>
                        Create New Message
                                </button>
                </div>
                <section>
                    {
                        <div>
                            <h1 className="header">Messages:</h1>
                            <hr />
                            <section className="messages">
                                {
                                    this.props.messages.map(messages =>
                                        <div id={`messages--${messages.id}`} key={messages.id} className="messagesCard">
                                            <div className="messagesCard-body">
                                                <section className="messagesCard-title">
                                                    <h5>{messages.userId}</h5>
                                                    <p>{messages.content}</p>
                                                    <h6>{messages.timeStamp}</h6>
                                                    {/* <Link className="cardnav-link" to={`/messages/${messages.id}`}>Details</Link> */}
                                                </section>
                                                <div className="deleteButton">
                                                    <button onClick={() => this.props.deleteMessage(messages.id)}
                                                        className="messagesCard-link">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </section>
                        </div>
                    }
                </section>
            </React.Fragment>
        )
    }
}