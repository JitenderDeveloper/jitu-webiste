import React from 'react'
import { FcEmptyTrash } from 'react-icons/fc'
import { HiArrowUpRight } from 'react-icons/hi2'
import MainHeading from '../MainHeading'

function ProductStrategy() {
    return (
        <>
            <div className="container-fluid p-0 webiste-section Website-Strategy">
                <div className="row m-0">
                    <div className="col-lg-12 col-md-12 col-12 p-0">
                        <div className="website-sec webiste-stac">
                            <MainHeading title="Product Strategy" p="A good product strategy helps you turn your vision into a roadmap. It lays out the foundations for the design and development phases. We have two key approaches..."/>
                        </div>
                    </div>
                </div>
                <div className="row m-0 mt-3 mb-3">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="desgin-card">
                            <div className="desgin-img prodimg">
                                <img src="assets/image/product/product-1.avif" alt="" />
                            </div>
                            <div className="desgin-content">
                                <h3>Design Thinking Workshops</h3>
                                <p>Design Thinking workshops consist of employing logic, imagination, intuition and systemic reasoning to solve tricky problems. We explore things like the product vision, user personas, user journeys and a roadmap to get it up and running. They are great for big, abstract ideas or new products.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="desgin-card">
                            <div className="desgin-img prodimg">
                                <img src="assets/image/product/product-2.avif" alt="" />
                            </div>
                            <div className="desgin-content">
                                <h3>Design Sprints</h3>
                                <p>Design Sprints take traditional design thinking methodologies and compress them into a five-day process to answer critical business questions with sketching, prototyping and testing. They are good for focused and directed ideation.</p>
                            </div>
                        </div>
                    </div>
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

export default ProductStrategy