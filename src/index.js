import React from 'react'
import {render} from "react-dom"
import classNames from "classnames"
import styled from 'styled-components'
import './index.css'
class App extends React.Component {
    render() {
        const style = {color:'#F00'}
        // styled-components 的使用
        const Title = styled.h1`
            color:#f90
        `
        return (
            <div>
                <Title>我的新疆之旅</Title>
                <ol>
                    <li style={style}>报名</li>
                    <li className="has-text">体检</li>
                    <li className={classNames('shen')}>使用classnames包动态添加className</li>
                    <li className={classNames('shen',{'huangfu':true,'huiyan':false})}>使用classnames包动态添加className</li>
                </ol>
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector('#root')
)