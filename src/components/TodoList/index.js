import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo => {
                        return (
                            <TodoItem todo={todo}/>
                        )
                    })
                }
                
            </ul>
        )
    }
}
