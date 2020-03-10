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
    shouldComponentUpdate(nextProps,nextState) {
        return nextProps.completed !== this.props.completed
    }
    render() {
        console.log('render');
        
        return (
            <li>
                <p>id: {this.props.id}</p>
                <p>title: {this.props.title}</p>
                <input 
                checked={this.props.completed}
                onChange={this.checkBoxChange}
                type="checkbox" /><span>完成: {this.props.completed ? '是':'否'}</span>
            </li>
        )
    }
}
