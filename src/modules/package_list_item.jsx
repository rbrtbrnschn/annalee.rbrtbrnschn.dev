import React, { Component } from 'react'

export default class PackageListItem extends Component {

    render() {
        const { item } = this.props
        return (
            <div>
                <li ><span className="tag is-white is-medium">{item.name}</span></li>
            </div>
        )
    }
}
