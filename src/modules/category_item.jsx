import React, { Component } from 'react'

export default class CategoryItem extends Component {

    render() {
        const { name } = this.props.item
        const { handleChange } = this.props
        // available: {logo}
        return (
            <div>
                <li className="is-right"><a onClick={() => { handleChange(name) }} className="is-active"><i className="logo"></i> {name}</a></li>
            </div>
        )
    }
}
