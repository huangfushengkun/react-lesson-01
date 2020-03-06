import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
    render() {
        return (
            <Fragment>
                <TodoItem />
            </Fragment>
        )
    }
}
