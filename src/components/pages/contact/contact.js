import React, {useContext, useEffect} from 'react'
import ContactForm from '../../shared/contact-form/contact-form'
import './contact.scss'
import {Link} from "react-router-dom"
import PersonContext from "../../../context/person/person-context"

const Contact = () => {
    const personContext = useContext(PersonContext)
    useEffect(() => {
        personContext.getPerson()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const {person: {email, phone, social}} = personContext
    return (
        <div className="contact bg-warning nav-height-padding">
            <React.Fragment>
                <div className="container">
                    <div className="row min-vh-100">
                        <div className="col-md-7 col-lg-6 d-flex align-items-start align-items-md-end pb-5 mr-auto">
                            <div className="w-100 pr-lg-5">
                                <h1 className="mb-5 mt-6">Contact, perhaps?</h1>
                                <ContactForm/>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex align-items-end justify-content-end pb-5">
                            <ul className="list-unstyled text-right">
                                {social && social.map((s, key) => {
                                    return <li key={key}>
                                        <a href={s.link} className="text-body">{s.title}</a>
                                    </li>
                                })}
                                <li>
                                    <Link to={`tel:${phone}`} className="h3 font-weight-light text-body">+7 (952) 911 10 15</Link>
                                </li>
                                <li>
                                    <Link to={`mailto:${email}`}
                                       className="h3 font-weight-light text-body">{email}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}

export default Contact
