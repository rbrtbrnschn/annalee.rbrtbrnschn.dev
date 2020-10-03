import React, { Component } from 'react'

export default class BoxItem extends Component {

    render() {
        const { name, desc, code } = this.props.item
        return (
            <div className="box">
                <h4 id="const" className="title is-3">{name}</h4>
                <article className="message is-primary">
                    <span className="icon has-text-primary">
                        <i className="fab fa-js"></i>
                    </span>
                    <div className="message-body">
                        {desc}
                    </div>
                </article>
                <pre><code className="language-javascript">{code}</code></pre>
            </div>

        )
    }
}
