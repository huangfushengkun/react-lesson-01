
import React, { Component,Fragment } from 'react'

import {
    TodoInput,
    TodoHeader,
    TodoList
} from './components'
export default class App extends Component {
    render() {
        return (
            <Fragment>
                <TodoHeader desc="代办事项列表">
                    今日事今日毕
                </TodoHeader>
                <TodoInput btnText="Add" />
                <TodoList />
            </Fragment>
        )
    }
}
