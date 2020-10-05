import React, { Component } from 'react'

export default class PackageListItem extends Component {

    render() {
        const { item } = this.props
        return (
            <div>
                <a href={"#box-" + item.name} ><span style={{ textTransform: "capitalize" }} className="tag is-white is-medium">{item.name}</span></a>
            </div>
        )
    }
}
