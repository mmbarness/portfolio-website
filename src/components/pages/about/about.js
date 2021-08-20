import React, {useContext, useEffect} from 'react'
import PersonContext from "../../../context/person/person-context"

const About = () => {
    const personContext = useContext(PersonContext)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { personContext.getPerson()}, [])
    const {person: {name, birthDate, country, city, languages, achievements}} = personContext

    return (
            <div className="container nav-height-padding">

                <div className="row big-text mb-5 mb-lg-6">
                    <div className="col-lg-10">
                        <h1 className="mt-0 mb-0 text-uppercase">About me</h1>

                        <div className="row mb-5 h4">
                            <div className="col-lg-6 col-md-7 pt-5">
                                <div className="row mb-2">
                                    <div className="col-5 col-md-4">Birth date:</div>
                                    <div className="col font-weight-light">{birthDate}</div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-5 col-md-4">Country:</div>
                                    <div className="col font-weight-light">{country}</div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-5 col-md-4">City:</div>
                                    <div className="col font-weight-light">{city}</div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-5 col-md-4">Languages:</div>
                                    <div className="col font-weight-light">{languages}</div>
                                </div>
                            </div>
                            <div className="col-lg-6 mr-auto pt-5 item-list">
                                {/* <h3>Achievements and rewards:</h3> */}
                                {/* <ul className="font-weight-light h4"> */}
                                    {/* {achievements && achievements.map((a, key) => <li key={key} className="mb-2">{a.title}</li>)} */}
                                {/* </ul> */}
                            </div>
                        </div>

                        <p className="mb-4">I'm a software developer with more than 9 years of experience. I can write both front-end and
                            back-end
                            applications, browser extensions, desktop and mobile apps. In my career, I was working with
                            many different
                            technologies:</p>
                        <div className="row">
                            <div className="col-lg-10 item-list">
                                <ul>
                                    <li>
                                        <p>JavaScript is the language I'm most comfortable with, followed closely by Ruby. Some technologies I work with especially often:
                                            ReactJS(redux, redux-saga,
                                            code-splitting, CRA, redux-form, react-select, JEST, etc..), NodeJS(AWS Lambda, REST
                                            API's), NPM, Webpack,
                                            SocketIO;</p>
                                    </li>
                                    <li>
                                        <p>I'm familiar with cutting-edge CSS and
                                            HTML features.
                                            Complex animations and data visualizations with D3, SVG, and/or Canvas are not a problem at
                                            all;</p>
                                    </li>
                                    <li>
                                        <p>I have a strong knowledge of relational databases(PostgreSQL, MySQL, MSSQL). I know
                                            how to create a good
                                            database structure. Have an experience of optimizing complex SQL queries. I also
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
