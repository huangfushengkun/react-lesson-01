import React, { Component } from 'react'

export default class TodoItem extends Component {
    // constructor() {
    //     super()
    //     // this.newHandleDone = this.handleDone.bind(this)
    // }
    // handleDone= (id) => {
    //     console.log(id);
        
    // }
    static getDerivedStateFromParops () {
        
    }
    checkBoxChange = (data) => {
        // console.log('change',data);
        this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)
    }
    // shouldComponentUpdate(nextProps,nextState) {
    //     return nextProps.isCompleted !== this.props.isCompleted
    // }
    render() {
        console.log('render');
        
        return (
            <li>
                <p>id: {this.props.id}</p>
                <p>title: {this.props.title}</p>
                <input 
                checked={this.props.isCompleted}
                onChange={this.checkBoxChange}
                type="checkbox" /><span>完成: {this.props.isCompleted ? '是':'否'}</span>
            </li>
        )
    }
}
