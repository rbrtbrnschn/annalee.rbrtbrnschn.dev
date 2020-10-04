import React, { Component } from 'react'


export default class BoxItem extends Component {
    render() {
        const { name, description, code } = this.props.item
        // availabe: {author, categories, tags, version}
        return (
            <div className="box" id={"box-" + name}>
                <h4 id="const" className="title is-3">{name}</h4>
                <article className="message is-primary">
                    <span className="icon has-text-primary">
                    </span>
                    <div className="message-body">
                        {description}
                    </div>
                </article>
                <pre><code className="language-bash">{code}</code></pre>
            </div>

        )
    }
}
