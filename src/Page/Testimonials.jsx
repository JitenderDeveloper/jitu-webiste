import React from 'react';
import Heading from '../Components/Heading';
import TestimonialsFrom from '../Components/Testimonials/TestimonialsFrom';


function Testimonials() {

    return (
        <>
            <div className="container-fluid p-0">
                <Heading title="Latest News & Channels Video" subtitle="We use design and code to solve problems. Here's how." />
                <TestimonialsFrom />
            </div>
        </>
    )
}

export default Testimonials