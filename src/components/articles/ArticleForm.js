import React, { Component } from 'react'
// import "../login/Login.css"

export default class ArticleForm extends Component {

    state = {
        url: "",
        title: "",
        synopsis: ""
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
            synopsis: this.state.synopsis
        }

        this.props.addArticle(article).then(() => this.props.history.push("/articles"))
    }

    render() {

        return (
            <React.Fragment>
                <h2>Articles</h2>
                <hr />
                <form className="articleArticleForm">
                    <div className="form-group">
                        <section>
                            <h5 htmlFor="articleUrl">URL:</h5>
                            <input type="url" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="articleUrl" />
                            <h5 htmlFor="articleURL">URL:</h5>
                            <input type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="articleURL"
                                placeholder="Article URL" />
                        </section>
                    </div>
                    <div className="form-group">
                        <section className="titleField">
                            <label htmlFor="userID"></label>
                            <h5 htmlFor="articleTitle">Article Title:</h5>
                            <p></p>
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="articleTitle"
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
                    <p></p>
                    <button type="submit" onClick={this.constructArticle} className="btn btn-primary">Post Article</button>
                </form>
            </React.Fragment>
        )
    }
}