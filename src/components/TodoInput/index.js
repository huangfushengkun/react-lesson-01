import React, { Component } from 'react'

export default class TodoInput extends Component {
    render(props) {
        return (
            <div>
                <input type="text" /><button>{this.props.btnText}</button>
            </div>
        )
    }
}

