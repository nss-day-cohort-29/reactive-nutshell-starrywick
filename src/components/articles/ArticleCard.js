import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Article.css"

export default class ArticleCard extends Component {
    render() {
        return (
            <div key={this.props.articles.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.articles.url}
                        {this.props.articles.title}
                        {this.props.articles.synopsis}
                        <Link className="nav-link" to={`/articles/${this.props.articles.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteArticle(this.props.articles.id)}
                            className="card-link">Remove Article</a>
                    </h5>
                </div>
            </div>
        )
    }
}