import React, {useContext, useEffect} from 'react'
import Hero from "./hero/hero"
import BigImage from "./big-image/big-image"
import PersonContext from "../../../context/person/person-context"
import './home.scss'
import Experience from "./experience/experience"
import ExperienceState from "../../../context/experience/experience-state"
import TrustState from "../../../context/trust/trust-state"
import Trust from "./trust/trust"
import Education from "./education/education"
import Skills from "./skills/skills"

const Home = () => {
    const personContext = useContext(PersonContext)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { personContext.getPerson() }, [])
    const {person} = personContext

    return (
        <React.Fragment>
            {person && (
                <React.Fragment>
                    <Hero person={person}/>
                    <BigImage person={person}/>
                </React.Fragment>
            )}
            <ExperienceState>
                <Experience/>
            </ExperienceState>

            <TrustState>
                <Trust/>
                <div className="container pb-5 pb-lg-6">
                    <div className="row">
                        <div className="col-lg-6">
                            <Education/>
                        </div>
                        <div className="col-lg-5 ml-auto">
                            <Skills/>
                        </div>
                    </div>
                </div>
            </TrustState>

        </React.Fragment>
    )
}

export default Home
