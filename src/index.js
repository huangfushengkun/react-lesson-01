import React from 'react'
import { render } from "react-dom"

// 定义组件的第二种方式 使用类继承Component

const Title = ()=> <h1>69245 71</h1>
class App extends React.Component{
    render(props) {
        return (
            <div>
                <Title />
                <p>{this.props.name}</p>
                <strong>{'红灯'}</strong><br></br>
                <strong>{this.props.banzhang}</strong>
            </div>
        )
    }
}
// 组件渲染的原理
// const app = new App({
//     name:'皇甫-2014',
//     banzhang:'谢天下'
// }).render()


// render 是react dom提供的一个方法 通常只会用一次
render(
    // <h1>69245 71</h1>,
    <App name="huangfu-2014" banzhang='谢天下'></App>,
    // app,
    document.querySelector('#root')
)




