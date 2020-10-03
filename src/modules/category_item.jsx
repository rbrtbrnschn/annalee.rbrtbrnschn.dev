import React, { Component } from 'react'

export default class CategoryItem extends Component {

    render() {
        const { name, logo } = this.props.item
        return (
            <div>
                <li className="is-right"><a href={name} className="is-active"><i className={logo}></i> {name}</a></li>
            </div>
        )
    }
}
