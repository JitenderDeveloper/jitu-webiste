import React from "react";
import {Route, Routes} from 'react-router-dom'
import MainBlog from "./Components/Blog/MainBlog";
import Navbar from "./Components/Navbar";
import About from "./Page/About";
import Blog from "./Page/Blog";
import Home from "./Page/Home";
import Services from "./Page/Services";
import Testimonials from "./Page/Testimonials";
import Work from "./Page/Work";
import YoutubeVideos from "./Page/YoutubeVideos";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Work" element={<Work />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />

        <Route path="/YoutubeVideos" element={<YoutubeVideos />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
