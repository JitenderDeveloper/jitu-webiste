import React from 'react'
import BlogBtn from '../Components/Blog/BlogBtn';
import MainBlog from '../Components/Blog/MainBlog';
import Heading from '../Components/Heading';

function Blog() {
    return (
        <>
            <>
                <div className="container-fluid p-0">
                    <Heading title="Latest News & Channels Video" subtitle="We use design and code to solve problems. Here's how." />
                    <BlogBtn />
                    <MainBlog />
                </div>
            </>
        </>
    )
}

export default Blog