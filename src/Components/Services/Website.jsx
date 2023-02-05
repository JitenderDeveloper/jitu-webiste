import React from 'react'
import MainHeading from '../MainHeading'

function Website() {
  return (
    <>
        <div className="container-fluid p-0 webiste-section">
            <div className="row m-0">
                <div className="col-lg-6 col-md-6 col-12 p-0">
                    <div className="website-sec">
                        <MainHeading title="Website" p="Educate, sell and grow through your website."/>
                        <ul>
                            <li>Your website is at the digital frontier of your brand... the ultimate ambassador. The best websites tell a story in an enthralling way, convincing your audience to take an action.</li>
                            <li>We create websites that are both functional and energising, providing users with a holistic experience that will make them want to take action.</li>
                            <li>Our tried-and-true process embarks you and your team on an exciting journey that ends with a website that is both beautiful and high-performance.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 p-0">
                    <div className="webiste-img">
                        <img src="assets/image/websites.avif" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Website