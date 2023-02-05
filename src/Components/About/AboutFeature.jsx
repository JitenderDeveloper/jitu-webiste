import React from 'react'
import { FcEmptyTrash } from 'react-icons/fc'
import FeatureJson from '../../JsonAPI/FeatureJson'

function AboutFeature() {
  return (
    <>
      <div className="contianer-fluid p-0 about-feature">
        <div className="row m-0">
          {
            FeatureJson.map((val) => {
              return (
                <div className="col-lg-4 col-md-4 col-12 p-0 border-line">
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

export default AboutFeature