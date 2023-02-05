import React from 'react'
import { HiArrowUpRight, HiArrowLongRight } from "react-icons/hi2";

function Header() {
    return (
        <>
            <div className="container-fluid bg-grandient">
                <div className="blur-section">
                    <span className='span span1'></span>
                    <span className='span span2'></span>
                    <span className='span span3'></span>
                    <span className='span span4'></span>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="content">
                            <button className='btn'>We're pressing pause on new projects. Read more <HiArrowLongRight /></button>
                            <h1>Award winning digital agency for bright ideas</h1>
                            <p>We design and build beautiful brands, websites and products for startups and tech companies.</p>
                            <div className="header-btn">
                                <a href="">See our work <HiArrowUpRight /></a>
                                <a href="">Read our blog <HiArrowUpRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header