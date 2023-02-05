import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

function MainBlog() {

  const [data, setData] = useState([]);
  // console.log(data);

  function filterData() {
    try {
      axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=590c3f7f29844121b8e1835427da5b11')
        .then((result) => {
          setData(result.data.articles);
        })
    } catch (error) {
      console.log("error axios fetch data", error);
    }
  }

  useEffect(() => {
    filterData()
  }, [])

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          {
            data.slice(0,30).map((val, ind) => {
              console.log('value index ->', val);
              const { title, description, urlToImage, publishedAt } = val;

              return (
                <div key={ind} className="col-lg-4 col-md-4 col-12">
                  <a href="" className='anker'>
                    <div className="news">
                      <div className="news-img">
                        <img src={urlToImage} alt="" />
                      </div>
                      <div className="new-content">
                        <h4>Development</h4>
                        <h3>{title.slice(0,72)} ...</h3>
                        <p>{description.slice(0, 230)} ...</p>
                        <h5>{publishedAt}</h5>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default MainBlog