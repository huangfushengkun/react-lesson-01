
import React, { Component,Fragment } from 'react'

import {
    TodoInput,
    TodoHeader,
    TodoList
} from './components'
export default class App extends Component {
    // state = {
    //     title:'shengkun'
    // }
    constructor() {
        super()
        this.state = {
            title: 'huangfu今日事今日毕',
            // article:'<h1>关于班长的故事！</h1><div>你班长是谁？</div><p>皇甫圣坤</p>',
            todos:[{
                id:1,
                title:'keep',
                isCompleted:true
            },{
                id:2,
                title:'吃饭',
                isCompleted:true
            },{
                id:3,
                title:'睡觉',
                isCompleted:false
            }]
        }
    }
    render() {
        return (
            <Fragment>
                {
                    // <div dangerouslySetInnerHTML={{__html:this.state.article}}></div>
                }
                <TodoHeader >
                    {/* 不传值使用默认值 */}
                    {/* <TodoHeader desc="代办事项列表"> */}
                    {this.state.title}
                </TodoHeader>
                <TodoInput btnText="Add" />
                <TodoList todos={this.state.todos}/>
            </Fragment>
        )
    }
}
