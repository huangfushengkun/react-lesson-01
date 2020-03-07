import React, { Component } from 'react'

export default class Like extends Component {
    constructor() {
        super()
        this.state = {
            isLike:false
        }
    }
    handleLikeClick = () => {
        // 修改数据使用setstate方法 有两个参数 
        // 情况一
        // this.setState({
        //     isLike:!this.state.isLike
        // })
        // 情况二
        this.setState((prevState, props) => {
            console.log(prevState, props);
            return {
                // isLike:!this.state.isLike
                isLike:!prevState.isLike
            }
        }, () => {
            // 由于setstate是异步的 如果想获取最心的state 需要在再回调里获取
        })
    }
    render() {
        return (
            <div>
                <span onClick={this.handleLikeClick}>
                    {this.state.isLike? '❤️': '💙'}
                </span>
            </div>
        )
    }
}
