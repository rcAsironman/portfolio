import React from 'react'
import Home from './Home'
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';

function AllComp() {
    return (
        <div>
            <section id="home">
                <Home />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="skills">
                <Skills />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default AllComp