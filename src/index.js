// react Hooks 是 react16.8 新增的一项特性 
// 两个常见的api 就是useState和 useEffect  使用时需要先引入
import React,{ useState, useEffect } from 'react'
import { render } from "react-dom"
// useEffect的参数是一个回调，不管组件挂在还是更新都会触发这个回调方法 
// 类似于componentDidMount和componentDidUpdate的结合


const Counter = () => {
    // useState 是一个方法 这个方法的参数就是默认值  结果是一个数组 第一个就是state 第二个就是setState
    const [ count, setCount] = useState(10)
    
    useEffect(() => {
        console.log('渲染了');
        document.title = `当前的数为${count}`
        
    })

    return (
        <div>
            <button onClick= { () => { setCount(count-1) } }>-</button>
            {/* 这里就是useState创建的值 */}
            <span>{count}</span>
            <button onClick= { () => { setCount(count+1) } }>+</button>
        </div>
    )
}

render(
    <Counter/> ,
    document.querySelector('#root')
)