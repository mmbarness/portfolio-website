import React from 'react'
import icon from './down-arrow.svg'
import './hero.scss'
import {Link} from "react-router-dom"

const Hero = ({person: {heroText, cvLink, social, email}}) => {

    return (
        <div>
            <div className="hero">
                <div className="container pb-4 min-vh-100 d-flex">
                    <div className="row align-items-end mb-3">
                        <div className="col-md-9 min-vh-100 d-flex flex-column justify-content-between nav-height-padding">
                            <div className="my-auto" />
                            <div className="pt-5" id="hero-grid">
                                <img id="hero-grid-img" width="250" style={{borderRadius:10}} src="https://portfolio-yep.s3.amazonaws.com/headshot-cropped.jpg" alt="my-headshot" />
                                <h1 className="mb-4 mt-0 hero-col-1">I'm Matthew Barnes, fullstack engineer with inclinations towards the front end.</h1>
                                <h1 className="mb-4 mt-0 hero-col-1">Also, former bartender and server in New York hospitality. Strong opinions about spirits.</h1>
                                <div className="d-flex flex-wrap hero-col-1">
                                    {social && social.map(i => (
                                        <a key={i.id} href={i.link} className="mr-4 text-body d-inline" target="_blank">{i.title}</a>
                                    ))}
                                    <Link to={`mailto:${email}`}
                                          className="text-body">{email}</Link>
                                </div>
                            </div>
                            <div className="mt-auto" />
                            <img src={icon} alt="arrow" width="32" className="d-none d-md-block" />
                        </div>
                        {/* <img id="headshot" src="https://portfolio-yep.s3.amazonaws.com/headshot-cropped.jpg" alt="my-headshot" /> */}
                        <div className="col-md-3 text-right mt-5 d-flex justify-content-between">
                            <img src={icon} alt="arrow" width="32" className="d-block d-md-none" />
                            <div className="text-right w-100">
                                <a href={cvLink} rel="noreferrer noopener" target="_blank" className="link-styled ml-auto">
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
