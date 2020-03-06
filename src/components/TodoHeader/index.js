import React from 'react'

export default function TodoHeader(props) {
    return (
        <>
        <h1>{props.desc}</h1>
        <h2>{props.children}</h2>
        </>
        
    )
}
