import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Article.css'


export default class ArticleList extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="articleButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/articles/new")
                        }
                        }>
                        Create New Article
                                </button>
                </div>
                <section>
                    {
                        <div>
                            <h1 className="header">Breaking News:</h1>
                            <hr />
                            <section className="articles">
                                {
                                    this.props.articles.map(articles =>
                                        <div id={`articles--${articles.id}`} key={articles.id} className="articlesCard">
                                            <div className="articlesCard-body">
                                                <section className="articlesCard-title">
                                                    <h5>{articles.url}</h5>
                                                    <h4>{articles.title}</h4>
                                                    <p>{articles.synopsis}</p>
                                                    <Link className="cardnav-link" to={`/articles/${articles.id}`}>Details</Link>
                                                </section>
                                                <div className="deleteButton">
                                                    <button onClick={() => this.props.deletearticles(articles.id)}
                                                        className="articlesCard-link">Delete</button>
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