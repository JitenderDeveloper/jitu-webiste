import React from 'react'
import Heading from '../Components/Heading'
import Project from '../Components/Work/Project'

function Work() {
  return (
    <>
        <div className="container-fluid p-0">
            <Heading title="Working my projects" subtitle="We use design and code to solve problems. Here's how."/>
            <Project />
        </div>
    </>
  )
}

export default Work