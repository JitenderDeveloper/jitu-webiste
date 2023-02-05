import React from 'react'

function MainHeading(props) {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.p}</p>
        </>
    )
}

export default MainHeading