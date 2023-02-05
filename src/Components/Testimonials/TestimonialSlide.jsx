import React from 'react'
import MainHeading from '../MainHeading'

function TestimonialSlide({store}) {
    return (
        <>
            <div className="container-fluid p-0 webiste-section Website-Strategy">
                <div className="row m-0">
                    <div className="col-lg-12 col-md-12 col-12 p-0">
                        <div className="website-sec webiste-stac">
                            <MainHeading title="Testimonials" p="your feedback and your testimonails" />
                        </div>
                    </div>
                </div>
                <div className="row m-0 p-4 row-level">
                    {
                        store.map((val, ind) => {
                            const { name, city, email, require } = val;
                            return (
                                <div key={ind} className="col-lg-4 col-md-4 col-12">
                                    <div className="client-slider testimonials">
                                        <p>{require.slice(0, 380)} ...</p>
                                        <div className="client-profile">
                                            <div className="pro">
                                                <img src="assets/image/clients/profile.png" alt="" />
                                            </div>
                                            <div className="pro-content">
                                                <h4>{name}</h4>
                                                <h5 className='mb-0'>{email}</h5>
                                                <h5 className='mb-0'>{city}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="client-slider testimonials">
                            <p>Hey Please enter you feedback message...</p>
                            <div className="client-profile">
                                <div className="pro">
                                    <img src="assets/image/clients/profile.png" alt="" />
                                </div>
                                <div className="pro-content">
                                    <h4>Jitender Group</h4>
                                    <h5 className='mb-0'>contact@thetheme.online</h5>
                                    <h5 className='mb-0'>CEO and Founder of thetheme.online</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialSlide