import React, {useContext, useEffect} from 'react'
import PersonContext from "../../../context/person/person-context"

const About = () => {
    const personContext = useContext(PersonContext)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { personContext.getPerson()}, [])
    const {person: {name, birthDate, country, city, languages, achievements}} = personContext

    return (
            <div className="container nav-height-padding">
                <div id="modal-screen"/>
                <div className="row big-text mb-5 mb-lg-6">
                    <div className="col-lg-10">
                        <h1 className="mt-0 mb-0 text-uppercase">About me</h1>

                        <p className="mb-4">I'm a software developer, comfortable within front-end and back-end
                            applications, browser extensions, desktop and mobile apps. These are some of the technologies I've worked with:
                        </p>
                        <div className="row">
                            <div className="col-lg-10 item-list">
                                <ul>
                                    <li>
                                        <p>JavaScript/Typescript is the language I'm most comfortable with, followed closely by Ruby. Some technologies I work with especially often:
                                            ReactJS(redux, redux-saga,
                                            code-splitting, CRA, redux-form, react-select, JEST, etc..), NodeJS(AWS Lambda, REST
                                            API's), NPM, Webpack,
                                            SocketIO;</p>
                                    </li>
                                    <li>
                                        <p>I'm familiar with modern CSS and
                                            HTML features.
                                            Complex animations and data visualizations with D3, SVG, and/or Canvas are not a problem at
                                            all;</p>
                                    </li>
                                    <li>
                                        <p>Because I currently work in test automation, I'm quite comfortable with the cypress ecosystem and operating a test automation framework at enterprise scale.</p>
                                    </li>
                                    <li>
                                        <p>I have a strong knowledge of relational databases(PostgreSQL, MySQL, MSSQL). I know
                                            how to structure a database, and write efficient SQL queries. I also
                                            have some experience
                                            working with no-sql databases, like Mongo;</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About
