import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <li>
                <p>id: {this.props.id}</p>
                <p>title: {this.props.title}</p>
                <p>完成: {this.props.isCompleted ? '是':'否'}</p>
            </li>
        )
    }
}
