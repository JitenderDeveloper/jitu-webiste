import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";


function ProjectShow() {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="Award-content project-show side-content">
                            <p>Whether you're looking to revamp your website , create a new brand or create a new digital product, we're excited to uncover and highlight the things that make your company special, then bring them to life.</p>
                            <div className="header-btn">
                                <a href="">View our services<HiArrowUpRight /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="Award-content project-show">
                            <Swiper navigation={true} modules={[Navigation, Pagination, Scrollbar, A11y]} className="slider-section">
                                <SwiperSlide className="slider-project">
                                    <div className="inner-img">
                                        <img src="assets/image/project/service.jpg" alt="" />
                                        <div className="project-content">
                                            <h2>Whether you're looking to revamp your website </h2>
                                            <div className="header-btn project-btn">
                                                <a href="">View more<HiArrowUpRight /></a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slider-project">
                                    <div className="inner-img">
                                        <img src="assets/image/project/service.jpg" alt="" />
                                        <div className="project-content">
                                            <h2>Whether you're looking to revamp your website </h2>
                                            <div className="header-btn project-btn">
                                                <a href="">View more<HiArrowUpRight /></a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slider-project">
                                    <div className="inner-img">
                                        <img src="assets/image/project/service.jpg" alt="" />
                                        <div className="project-content">
                                            <h2>Whether you're looking to revamp your website </h2>
                                            <div className="header-btn project-btn">
                                                <a href="">View more<HiArrowUpRight /></a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectShow