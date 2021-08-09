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
                            <div className="pt-5">
                                <h1 className="mb-4 mt-0">{heroText}</h1>
                                <div className="d-flex flex-wrap">
                                    {social && social.map(i => (
                                        <a key={i.id} href={i.link} className="mr-4 text-body d-inline">{i.title}</a>
                                    ))}
                                    <Link to={`mailto:${email}`}
                                          className="text-body">{email}</Link>
                                </div>
                            </div>
                            <div className="mt-auto" />
                            <img src={icon} alt="arrow" width="32" className="d-none d-md-block" />
                        </div>
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
