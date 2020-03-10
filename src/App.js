
import React, { Component,Fragment } from 'react'

import {
    TodoInput,
    TodoHeader,
    TodoList,Like
} from './components'
import { getTodos } from './services'
export default class App extends Component {
    // state = {
    //     title:'shengkun'
    // }
    constructor() {
        super()
        this.state = {
            title: 'huangfu今日事今日毕',
            currentId: 3,
            // article:'<h1>关于班长的故事！</h1><div>你班长是谁？</div><p>皇甫圣坤</p>',
            todos:[],
            isLoading:false
        }
    }
    componentDidMount () {
        getTodos().then(res => {
            // console.log(res.data);
            if (res.status === 200) {
                this.setState((prevState) => {
                    return {
                        todos: res.data,
                        currentId: res.data.length
                    } 
                })
            }else {
                // 错误处理
            }
            
        }).catch(err => {
            console.log(err);
            
        }).finally(() => {
            this.setState({
                isLoading:false
            })
        })
    }
    addTodo = (todoTitle) => {
        // console.log(todoTitle);
        this.setState((prevState)=> {
            return {
                currentId: prevState.currentId+1,
                todos:prevState.todos.concat({
                    id:prevState.currentId+1,
                    title:todoTitle,
                    completed:false
                })
            }
        })
        // this.setState({
        //     id: this.state.currentId,
        // })
    }
    onCompeletedChange = (id) => {
        // console.log('onCompeletedChange',id);
        this.setState((prevState) => {
            return {
                todos:prevState.todos.map( todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        })
        
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

                <TodoInput addTodo={this.addTodo} btnText="Add" />

                <TodoList 
                onCompeletedChange={this.onCompeletedChange}
                todos={this.state.todos}/>

                <Like />
            </Fragment>
        )
    }
}
