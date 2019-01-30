import React, { Component } from 'react'
// import "../login/Login.css"

export default class ArticleForm extends Component {

    state = {
        url: "",
        title: "",
        synopsis: "",
        timeStamp: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructArticle = evt => {
        evt.preventDefault()
        const article = {
            url: this.state.url,
            title: this.state.title,
            synopsis: this.state.synopsis,
            timeStamp: Date.now()
        }

        this.props.addArticle(article).then(() => this.props.history.push("/"))
    }

    render() {

        return (
            <React.Fragment>
                <h2>Articles</h2>
                <hr />
                <form className="articleForm">
                    <div className="form-group">
                            <div className="form-group">
                                <section className="titleField">
                                    <label htmlFor="userID"></label>
                                    <h5 htmlFor="articleTitle">Article Title:</h5>
                                    <p></p>
                                    <input type="text" required={true}
                                        className="form-control"
                                        onChange={this.handleFieldChange}
                                        id="title"
                                        placeholder="Article Title"
                                        size="35" />
                                </section>
                            </div>
                            <p></p>
                            <div className="form-group">
                                <section className="synopsisField">
                                    <p></p>
                                    <h5 htmlFor="synopsis">Synopsis:</h5>
                                    <p></p>
                                    <textarea 
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="synopsis" 
                                    placeholder="synopsis" rows="5" cols="70"></textarea>
                                </section>
                            </div>
                    <section>
                            <h5 htmlFor="url">URL:</h5>
                            <input type="url" required={true}
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="url" />
                            {/* <h5 htmlFor="url">URL:</h5> */}
                            {/* <input type="text" required={true}
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="articleURL"
                                placeholder="Article URL" /> */}
                        </section>
                    </div>
                    <p></p>
                    <button type="submit" onClick={this.constructArticle} className="btn btn-primary">Post Article</button>
                </form>
            </React.Fragment>
        )
    }
}