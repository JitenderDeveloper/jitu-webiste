import React from 'react'
import Heading from '../Components/Heading'
import SocailLinks from '../Components/YoutubeVideos/SocailLinks'
import YoutubeContent from '../Components/YoutubeVideos/YoutubeContent'

function YoutubeVideos() {
    return (
        <>
            <div className="container-fluid p-0">
                <Heading title="Youtube Latest Videos" subtitle="We use design and code to solve problems. Here's how." />
                <YoutubeContent />
                <SocailLinks />
            </div>
        </>
    )
}

export default YoutubeVideos