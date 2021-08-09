import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { AnimatedSwitch, spring } from 'react-router-transition'
import Home from './pages/home/home'
import Contact from './pages/contact/contact'
import About from './pages/about/about'
import NoMatch from './pages/no-match/no-match'
import Projects from './pages/projects/projects'
import SingleProject from './pages/single-project/single-project'
import PersonState from "../context/person/person-state"
import Navbar from "./shared/navbar/navbar"
import Footer from "./shared/footer/footer"

function App() {

    function mapStyles(styles) {
        return {
            opacity: styles.opacity,
            transform: `scale(${styles.scale})`,
        };
    }

    function bounce(val) {
        return spring(val, {
            stiffness: 330,
            damping: 22,
        });
    }

    const bounceTransition = {
        // start in a transparent, upscaled state
        atEnter: {
            opacity: 0,
            scale: 1.2,
        },
        // leave in a transparent, downscaled state
        atLeave: {
            opacity: bounce(0),
            scale: bounce(0.8),
        },
        // and rest at an opaque, normally-scaled state
        atActive: {
            opacity: bounce(1),
            scale: bounce(1),
        },
    };
    return (
        <PersonState>
            <Router>
                <Navbar/>
                <AnimatedSwitch
                    atEnter={bounceTransition.atEnter}
                    atLeave={bounceTransition.atLeave}
                    atActive={bounceTransition.atActive}
                    mapStyles={mapStyles}
                    className="switch-wrapper">
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/portfolio" component={Projects}/>
                    <Route path="/projects/:slug" component={SingleProject}/>
                    <Route component={NoMatch}/>
                </AnimatedSwitch>
                <Footer/>
            </Router>
        </PersonState>
    )
}

export default App
