import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FcElectronics, FcLowPriority, FcIdea, FcOnlineSupport, FcSettings, FcFeedIn } from "react-icons/fc";
import { BsYoutube } from "react-icons/bs";

function Navbar() {

    const [toggle, setToggle] = useState(false)

    const ToggleFun = () => {
        toggle === true ? setToggle(false) : setToggle(true);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid p-0">
                    <Link className="navbar-brand" to="/"><FcElectronics /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Work">Work</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="light-btn">
                        <button className='btn btn-style' onClick={ToggleFun}><FcLowPriority /></button>
                    </div>
                    {
                        !toggle ? " " :
                            <div className="feature-list">
                                <ul>
                                    <li><a href=""><div className='span-edit'><FcOnlineSupport /></div> Support</a></li>
                                    <li><Link to="/YoutubeVideos"><div className='span-edit youtube'><BsYoutube /></div> Latest Videos</Link></li>
                                    <li><a href=""><div className='span-edit'><FcIdea /></div> Suggestion</a></li>
                                    <li><Link to="/Testimonials"><div className='span-edit'><FcFeedIn /></div> Testimonial</Link></li>
                                    <li><a href=""><div className='span-edit'><FcSettings /></div> Settings</a></li>
                                </ul>
                            </div>
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar