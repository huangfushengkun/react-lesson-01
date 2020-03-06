import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
    return (
        <>
        <h1>{props.desc}</h1>
        <h2>{props.children}</h2>
        </>
        
    )
}
TodoHeader.propTypes = {
    desc: PropTypes.string.isRequired,
    children:PropTypes.string
}
