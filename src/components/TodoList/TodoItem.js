import React, { Component } from 'react'

export default class TodoItem extends Component {
    // constructor() {
    //     super()
    //     // this.newHandleDone = this.handleDone.bind(this)
    // }
    handleDone= (id) => {
        console.log(id);
        
    }
    checkBoxChange = (data) => {
        // console.log('change',data);
        this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)
    }
    render() {
        
        return (
            <li>
                <p>id: {this.props.id}</p>
                <p>title: {this.props.title}</p>
                <input 
                checked={this.props.isCompleted}
                onChange={this.checkBoxChange}
                type="checkbox" /><span onClick={() => {
                    this.handleDone(this.props.id)
                }}>完成: {this.props.isCompleted ? '是':'否'}</span>
            </li>
        )
    }
}
