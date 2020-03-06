import React from 'react'

export default function TodoItem(props) {
    console.log(props);
    
    return (
        <li>
            <p>{props.todo.id}</p>
            <p></p>
            {/* <p></p> */}
        </li>
    )
}
