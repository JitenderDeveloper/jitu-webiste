import React from 'react'
import MainHeading from '../MainHeading'

function Products() {
    return (
        <>
            <div className="container-fluid p-0 webiste-section">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                        <div className="website-sec">
                            <MainHeading title="Products" p="Sleek products that people love to use." />
                            <ul>
                                <li>Building a digital product means creating a tool that people will actively use with a focus on making their lives better.</li>
                                <li>We design and build robust digital platforms and apps that reflect your vision and turn every interaction into a lovable experience.</li>
                                <li>We developed an extremely lean and efficient process that delivers quality and robust digital products in no time.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                        <div className="webiste-img">
                            <img src="assets/image/products.avif" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products