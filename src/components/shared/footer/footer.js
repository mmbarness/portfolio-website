import React, {useContext, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import PersonContext from '../../../context/person/person-context'

function Footer({location: {pathname}}) {
    const personContext = useContext(PersonContext)
    useEffect(() => {
        personContext.getPerson()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const {person, loading} = personContext

    if (loading) return <p className="text-center">Loading...</p>

    return (
        <footer className={`bg-dark text-light footer ${pathname === '/contact' ? 'd-none' : ''}`}>
            <div className="container">
                <div className="row align-content-center">
                    <div className="col-lg-6">
                        <p className="mb-1">Say Hello:</p>
                        <h2 className="mb-4 mb-lg-0">{person.email}</h2>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-end">
                        <div className="d-flex">
                            {person.social && person.social.map(i => (
                                <a key={i.id} href={i.link} className="mx-3">{i.title}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default withRouter(Footer)
