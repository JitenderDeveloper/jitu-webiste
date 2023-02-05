import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import SocialMediaJson from '../../JsonAPI/SocialMediaJson'
import MainHeading from '../MainHeading'

function SocailLinks() {
    return (
        <>
            <div className="container-fluid p-0 webiste-section Website-Strategy" id='contact'>
                <div className="row m-0">
                    <div className="col-lg-12 col-md-12 col-12 p-0">
                        <div className="website-sec webiste-stac">
                            <MainHeading title="Social Media & Source Code" p="We'll create wireframes that map out the new website experience based on the architecture defined in your brief and our discussions." />
                        </div>
                    </div>
                </div>
                <div className="row m-0 mt-3 mb-4">
                    {
                        SocialMediaJson.map((val) => {
                            return (
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="desgin-card social_meida">
                                        <div className="desgin-img social-img">
                                            <a href={val.link} target="_blank" title={val.title}><img src={val.img} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SocailLinks