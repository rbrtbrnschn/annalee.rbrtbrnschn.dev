import React, { Component } from 'react'


export default class BoxItem extends Component {
    constructor(props) {
        super(props)
        this.state = { copied: false, buttonClasses: "fa-clone far" }
    }

    handleCopy = (text) => {
        navigator.clipboard.writeText(text)
        this.setState({ ...this.setState, copied: true, buttonClasses: "fas fa-check" })
    }

    handleEnter = (e) => {
        if (this.state.copied === true) return
        this.setState({ ...this.state, buttonClasses: "fa-clone fas" })
    }
    handleLeave = (e) => {
        if (this.state.copied === true) return
        this.setState({ ...this.state, buttonClasses: "fa-clone far" })
    }

    render() {
        const { name, description, code } = this.props.item
        // availabe: {author, categories, tags, version}
        return (
            <div className="box" id={"box-" + name}>
                <h4 id="const" className="title is-3">{name}</h4>
                <article className="message is-primary">
                    <span className="icon has-text-primary">

                        <a onClick={() => this.handleCopy(code)} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} ><i className={this.state.buttonClasses}></i>
                        </a>
                    </span>
                    <div className="message-body">
                        {description}
                    </div>
                </article>
                <pre style={{ maxHeight: "35vh" }} ><code className="language-bash">{code}</code></pre>
            </div>

        )
    }
}
