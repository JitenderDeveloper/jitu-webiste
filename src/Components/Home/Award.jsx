import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

function Award() {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-12">
                        <div className="Award-content">
                            <div className="latest-video">
                                <iframe src="https://www.youtube.com/embed/K-rMrlBVcF0"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="Award-content side-content">
                            <p>Jellypepper is an award-winning digital agency for bright ideas — a small team of designers, developers and thinkers who are excited to help you bring your idea to life.</p>
                            <div className="header-btn">
                                <a href="">Learn more<HiArrowUpRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Award