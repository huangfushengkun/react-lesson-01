import React, { Component } from 'react'

export default class TodoItem extends Component {
    // constructor() {
    //     super()
    //     // this.newHandleDone = this.handleDone.bind(this)
    // }
    handleDone= (id) => {
        console.log(id);
        
    }
    render() {
        
        return (
            <li>
                <p>id: {this.props.id}</p>
                <p>title: {this.props.title}</p>
                <p onClick={() => {
                    this.handleDone(this.props.id)
                }}>完成: {this.props.isCompleted ? '是':'否'}</p>
            </li>
        )
    }
}
