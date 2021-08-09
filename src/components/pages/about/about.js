import React, {useContext, useEffect} from 'react'
import PersonContext from "../../../context/person/person-context"

const About = () => {
    const personContext = useContext(PersonContext)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { personContext.getPerson()}, [])
    const {person: {name, birthDate, country, city, languages, achievements}} = personContext

    return (
        <React.Fragment>
            <div className="container nav-height-padding">

                <div className="row big-text mb-5 mb-lg-6">
                    <div className="col-lg-10">
                        <h4 className="mb-0 mt-5">You will be interested</h4>
                        <h1 className="mt-0 mb-0 text-uppercase">{name}</h1>

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
                                <h3>Achievements and rewards:</h3>
                                <ul className="font-weight-light h4">
                                    {achievements && achievements.map((a, key) => <li key={key} className="mb-2">{a.title}</li>)}
                                </ul>
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
                                        <p>JavaScript is the language that I think I'm an expert in. This is some tags:
                                            ReactJS(redux, redux-saga,
                                            code-splitting, CRA, redux-form, react-select, JEST, etc..), NodeJS(AWS Lambda, REST
                                            API's), NPM, Webpack,
                                            SocketIO. It what I'm focused on for the last 3 years working through Upwork;</p>
                                    </li>
                                    <li>
                                        <p>I have a lot of experience in web development. I'm familiar with cutting-edge CSS and
                                            HTML features.
                                            Complex animations, D&D, data visualizations with SVG or Canvas are not a problem at
                                            all;</p>
                                    </li>
                                    <li>
                                        <p>I have a strong knowledge of relational databases(PostgreSQL, MySQL, MSSQL). I know
                                            how to create a good
                                            database structure. Have an experience of optimizing complex SQL queries. I also
                                            have some experience
                                            working with no-sql databases like DynamoDB and Mongo;</p>
                                    </li>
                                    <li>
                                        <p>An example was working as a team lead(2-4 developers) so I'm familiar with such apps
                                            as YouTrack, JIRA, Trello and
                                            for sure with Github. I can help you with creating requirements, breaking it down to
                                            a task, doing code
                                            reviews, performing tech interviews with developers and so on. I believe these text
                                            is not correct.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-warning">
                <div className="container">
                    <div className="py-5 py-lg-6">
                        <h2>Where can you meet me</h2>
                        <div className="row">
                            <div className="col-lg mb-4">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src="/assets/img/conf2.png" alt="" className="img-fluid image-gray mb-3"/>
                                    </div>
                                    <div className="col-md-7">
                                        <h4>React Day Berlin</h4>
                                        <p>Take part in the exploration of the React universe! Focusing on in-depth
                                            talks, hands-on workshops, and
                                            finding new opportunities, React Day Berlin conference provides space for
                                            everyone to make friends and
                                            develop stellar apps together.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg mb-4">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src="/assets/img/conf1.png" alt="" className="img-fluid image-gray mb-3"/>
                                    </div>
                                    <div className="col-md-7">
                                        <h4>dotJS</h4>
                                        <p>dotConferences is a series of high-caliber developer events in Paris.</p>
                                        <p>We will bring you the best speakers in their fields. Invite them on the best
                                            stages Paris has to offer.
                                            Make you enjoy tech conferences like you never did!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default About
