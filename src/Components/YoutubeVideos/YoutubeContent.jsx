import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import YoutubeChannelJson from '../../JsonAPI/YoutubeChannelJson'
import MainHeading from '../MainHeading'

function YoutubeContent() {
    return (
        <>
            <div className="container-fluid p-0 webiste-section Website-Strategy">
                <div className="row m-0 mt-3 mb-3 pt-3">
                    {
                        YoutubeChannelJson.map((val) => {
                            return (
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="desgin-card youtube-section">
                                        <div className="desgin-img prodimg iframe-section">
                                            <iframe src={val.link}></iframe>
                                        </div>
                                        <div className="desgin-content">
                                            <h3>{val.title}</h3>
                                            <p>{val.para}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row m-0">
                    <div className="col-lg-12 col-md-12 col-12 p-0">
                        <div className="website-sec webiste-bottom">
                            <p>Youtube channel :)</p>
                            <div className="header-btn mt-0">
                                <a href="https://www.youtube.com/@jitenderdeveloper903" target="_blank">See our channel <HiArrowUpRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YoutubeContent