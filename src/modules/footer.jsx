import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="columns is-mobile is-centered">
                    <div className="field is-grouped is-grouped-multi">
                        <div className="control">
                            <div className="tags has-addons">
                                <a href="" className="tag is-dark">
                                    chat
                                </a>
                                <span className="tag is-primary">on discord</span>

                            </div>
                        </div>
                        <div className="control">
                            <div className="tags has-addons">
                                <a href="https://github.com/rbrtbrnschn" className="tag is-dark">
                                    Github
                                </a>
                                <span className="tag is-light">@rbrtbrnschn</span>

                            </div>
                        </div>
                        <div className="control">
                            <div className="tags has-addons">
                                <a href="" className="tag is-dark">
                                    Discord
                                </a>
                                <span className="tag is-danger">rbrtbrnschn#0303</span>

                            </div>
                        </div>
                        <div className="control">
                            <div className="tags has-addons">
                                <a href="" className="tag is-dark">
                                    build
                                </a>
                                <span className="tag is-success">passing</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="content has-text-centered">
                    <p>
                        <strong>Annalee - Bash Package Manager</strong> by <a href="https://rbrtbrnschn.dev">Robert Bornschein</a>. The source code is not licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                        The website content is not licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </div>
        )
    }
}
