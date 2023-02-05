import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import ProductDesginJson from '../../JsonAPI/ProductDesginJson'
import MainHeading from '../MainHeading'

function ProductDesign() {
    return (
        <>
            <div className="container-fluid p-0 webiste-section Website-Strategy">
                <div className="row m-0">
                    <div className="col-lg-12 col-md-12 col-12 p-0">
                        <div className="website-sec webiste-stac">
                            <MainHeading title="Product Design" p="Design has a huge impact on whether people will enjoy using an app. It's about finding the perfect balance between being visually engaging and highly functional." />
                        </div>
                    </div>
                </div>
                <div className="row m-0 mt-3 mb-3">
                    {
                        ProductDesginJson.map((val) => {
                            return (
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="desgin-card">
                                        <div className="desgin-img">
                                            <img src={val.img} alt="" />
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

export default ProductDesign