import React from 'react'
import WebsiteStrategyJson from '../../JsonAPI/WebsiteStrategyJson'

function WebsiteStrategy() {
    return (
        <>
            <div className="container-fluid p-0 webiste-section Website-Strategy">
                <div className="row m-0">
                    <div className="col-lg-12 col-md-12 col-12 p-0">
                        <div className="website-sec webiste-stac">
                            <h2>Website Strategy</h2>
                            <p>A brilliant website is more than just design and code. It's a whole spectrum of principles, concepts and goals that can only be achieved with a solid gameplan.</p>
                        </div>
                    </div>
                </div>
                <div className="row m-0 mt-4">
                    {
                        WebsiteStrategyJson.map((val) => {
                            // console.log("filter ->", val);
                            return (
                                <div className="col-lg-4 col-md-4 col-12 p-0 border-line unsift-underline">
                                    <div className="card-feature">
                                        <div className='feture-icon serv-icon'>
                                            {val.icon}
                                        </div>
                                        <h3>{val.title}</h3>
                                        <p>{val.para}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default WebsiteStrategy