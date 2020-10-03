import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column is-12">
                            <div className="container content">
                                <i className="is-large fas fa-terminal"></i>
                                <h1 className="title">Annalee</h1>
                                <h3 className="subtitle">
                                    <em>Bash Package Manager</em>
                                </h3>
                                <a
                                    href="https://github.com/rbrtbrnschn/bash-cheat-sheet"
                                    className="button is-primary is-large">
                                    <span className="icon">
                                        <i className="fab fa-github"></i>
                                    </span>
                                    <span>Github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
