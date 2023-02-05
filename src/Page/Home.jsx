import React from 'react'
import Award from '../Components/Home/Award'
import Clients from '../Components/Home/Clients'
import Header from '../Components/Home/Header'
import News from '../Components/Home/News'
import ProjectShow from '../Components/Home/ProjectShow'
import Navbar from '../Components/Navbar'

function Home() {
    return (
        <>
            <div className="container-fluid p-0">
                <Header />
                <Award />
                <Clients />
                <ProjectShow />
                <News />
            </div>
        </>
    )
}

export default Home