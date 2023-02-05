import React from 'react'

function Heading(props) {
    return (
        <>
            <div className="container-fluid p-0 com-header">
                <div className="row">
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                </div>
            </div>
        </>
    )
}

export default Heading