import React from 'react'
import Heading from '../Components/Heading'
import ProductDesign from '../Components/Services/ProductDesign'
import ProductDevelopment from '../Components/Services/ProductDevelopment'
import Products from '../Components/Services/Products'
import ProductStrategy from '../Components/Services/ProductStrategy'
import Website from '../Components/Services/Website'
import WebsiteCopywriting from '../Components/Services/WebsiteCopywriting'
import WebsiteDesign from '../Components/Services/WebsiteDesign'
import WebsiteDevelopment from '../Components/Services/WebsiteDevelopment'
import WebsiteStrategy from '../Components/Services/WebsiteStrategy'

function Services() {
  return (
    <>
        <div className="container-fluid p-0">
            <Heading title="Services" subtitle="We use design and code to solve problems. Here's how."/>
            <Website />
            <WebsiteStrategy />
            <WebsiteDesign />
            <WebsiteDevelopment />
            <WebsiteCopywriting />
            <Products />
            <ProductStrategy />
            <ProductDesign />
            <ProductDevelopment />
        </div>
    </>
  )
}

export default Services