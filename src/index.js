import React from 'react'
import ReactDom from "react-dom"

// 这种方式可以理解为创建了一个简单的元素
// const app = <h1>welocme haungfu </h1>

// const createApp  = (props) => {
//     return (
//         <div>
//             {/* 花括号内是js代码 */}
//             <h1>welocme haungfu {props.title} </h1>
//             <p>aini</p>
//         </div>
//     )
// }

// const app = createApp({
//     title:'孙烩艳'
// })

// 创建组件的第一种方式 使用箭头函数  名字首字母大写
const App  = (props) => {
    return (
        <div>
            {/* 花括号内是js代码 */}
            <h1>welocme haungfu {props.title} </h1>
            <p>aini</p>
        </div>
    )
}

ReactDom.render(
    <App title="huiyan" />,
    document.querySelector('#root')
)