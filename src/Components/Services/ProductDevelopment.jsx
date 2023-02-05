import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import MainHeading from '../MainHeading'

function ProductDevelopment() {
    return (
        <>
            <div className="container-fluid p-0 webiste-section Website-Strategy">
                <div className="row m-0">
                    <div className="col-lg-12 col-md-12 col-12 p-0">
                        <div className="website-sec webiste-stac">
                            <MainHeading title="Product Development" p="Development is the last mile before launching your app. Our developers and designers work together to make the experience feel as natural as possible." />
                        </div>
                    </div>
                </div>
                <div className="row m-0 mt-3 mb-3">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="desgin-card">
                            <div className="desgin-img prodimg">
                                <img src="assets/image/product/product-3.avif" alt="" />
                            </div>
                            <div className="desgin-content">
                                <h3>iOS Apps</h3>
                                <p>For responsive web applications, we build Progressive Web Applications (PWAs) with Next.js. Building on React, Next PWAs are able to handle internationalisation, image optimisation, incremental static generation, code-splitting and more.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="desgin-card">
                            <div className="desgin-img prodimg">
                                <img src="assets/image/product/product-4.avif" alt="" />
                            </div>
                            <div className="desgin-content">
                                <h3>Android Apps</h3>
                                <p>Rather than building and maintaining two codebases using different languages, we use React Native to create native apps for Android and iOS using React. We combine this with Expo, a platform to assist with the build process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDevelopment