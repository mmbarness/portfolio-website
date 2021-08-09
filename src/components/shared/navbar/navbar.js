import React, {useContext, useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import PersonContext from '../../../context/person/person-context'
import './navbar.scss'

const Navbar = (props) => {
    let scrollPos = 0
    let altCvLink = false
    const [navActive, setNavActive] = useState(false)
    const [isHide, setIsHide] = useState(false)
    const [isHome, setIsHome] = useState(false)
    const [isBgTransparent, setIsBgTransparent] = useState(false)
    const personContext = useContext(PersonContext)
    const handleScroll = () => {
        setIsHide(scrollPos < window.pageYOffset && window.pageYOffset > 50)
        scrollPos = window.pageYOffset
    }

    useEffect(() => {
        personContext.getPerson()
        window.addEventListener('scroll', handleScroll)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
        setIsHome(window.location.pathname === '/')
        setIsBgTransparent(window.location.pathname === '/contact')
        setNavActive(false)
    }, [props])

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {person: {cvLink, name, position}, loading} = personContext

    if (loading) return <p className="text-center">Loading...</p>

    return (
        <React.Fragment>
            <div className={`navigation 
                           ${isBgTransparent ? '' : 'bg-white'}
                           ${isHide ? 'hide' : ''}
                         `}>
                <div className="container py-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="m-0 w-50">
                            I’m <b>{name}</b>:<br/>
                            {position}
                        </p>

                        <div className="d-flex align-items-center ml-auto">
                            <div className={`mr-5 ${isHome ? 'd-none' : ''}`}>
                                {cvLink &&
                                <Link to={cvLink} target="_blank" className={`link-styled ${isBgTransparent ? 'alt' : ''}`}>
                                    <span className="d-none d-md-inline">Download</span> CV
                                </Link>
                                }
                            </div>
                            <div className="nav-toggle" onClick={() => {setNavActive(true)}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`side-nav ${navActive ? 'active' : ''}`}>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" exact to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" exact to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" exact to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div className="close" onClick={() => setNavActive(false)}/>
            </div>

        </React.Fragment>
    )
}

export default withRouter(Navbar)
