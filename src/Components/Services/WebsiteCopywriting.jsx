import React from 'react'
import { FcEmptyTrash } from 'react-icons/fc'
import { HiArrowUpRight } from 'react-icons/hi2'
import WebsiteCopywritingJson from '../../JsonAPI/WebsiteCopywritingJson'
import MainHeading from '../MainHeading'

function WebsiteCopywriting() {
    return (
        <>
            <div className="container-fluid p-0 webiste-section Website-Strategy">
                <div className="row m-0">
                    <div className="col-lg-12 col-md-12 col-12 p-0">
                        <div className="website-sec webiste-stac">
                            <MainHeading title="Website Copywriting" p="Writing quality words for your website is essential to both navigation and showcasing your culture. There are a few key principles we follow whenever we write copy..." />
                        </div>
                    </div>
                </div>
                <div className="row m-0 mt-4 mb-3">
                    {
                        WebsiteCopywritingJson.map((val) => {
                            return (
                                <div className="col-lg-4 col-md-4 col-12 p-0 border-line unsift-underline">
                                    <div className="card-feature card-desgin">
                                        <div className='feture-icon serv-icon'>
                                            {val.icon}
                                        </div>
                                        <h3>{val.title}</h3>
                                        <p>{val.para}</p>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row m-0">
                    <div className="col-lg-12 col-md-12 col-12 p-0">
                        <div className="website-sec webiste-bottom">
                            <p>We'll create wireframes that map out the new website experience based on the architecture defined in your brief and our discussions.</p>
                            <div className="header-btn mt-0">
                                <a href="">See our work <HiArrowUpRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebsiteCopywriting