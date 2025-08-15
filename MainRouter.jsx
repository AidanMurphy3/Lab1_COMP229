import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './src/components/Layout'
import Home from './src/components/Home';
import About from './src/about'
import Contact from './src/contact'
import Services from './src/services'
import Project from './src/project'


const MainRouter = () => {
        return (
                
                <Routes>
                       {/*              */}

                        <Route path="/" element={<Layout />}>

                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="project" element={<Project />} />
                        <Route path="contact" element={<Contact />} />

                   </Route>     
                </Routes>
        
        )
}
export default MainRouter

