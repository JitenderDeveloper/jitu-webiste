import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

function Clients() {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="Award-content">
                            <div className="client-heading">
                                <h2>Our clients tend to say nice things about us!</h2>
                            </div>
                            <Swiper navigation={true} modules={[Navigation, Pagination, Scrollbar, A11y]} className=" client-sec">
                                <SwiperSlide className="client-slider">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus sit doloribus necessitatibus fugit. Maiores officiis architecto rerum dolores quisquam ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, tempora!</p>
                                    <div className="client-profile">
                                        <div className="pro">
                                            <img src="assets/image/clients/profile.png" alt="" />
                                        </div>
                                        <div className="pro-content">
                                            <h4>Federico Collarte</h4>
                                            <h5>CEO and Founder of Baraja</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="client-slider">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus sit doloribus necessitatibus fugit. Maiores officiis architecto rerum dolores quisquam ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, tempora!</p>
                                    <div className="client-profile">
                                        <div className="pro">
                                            <img src="assets/image/clients/profile.png" alt="" />
                                        </div>
                                        <div className="pro-content">
                                            <h4>Federico Collarte</h4>
                                            <h5>CEO and Founder of Baraja</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="client-slider">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus sit doloribus necessitatibus fugit. Maiores officiis architecto rerum dolores quisquam ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, tempora!</p>
                                    <div className="client-profile">
                                        <div className="pro">
                                            <img src="assets/image/clients/profile.png" alt="" />
                                        </div>
                                        <div className="pro-content">
                                            <h4>Federico Collarte</h4>
                                            <h5>CEO and Founder of Baraja</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-12">
                        <div className="Award-content">
                            <div className="latest-video">
                                <iframe src="https://www.youtube.com/embed/ghmEnQLQJzQ"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients