import React, {useEffect, useContext} from 'react'
import ExperienceContext from "../../../../context/experience/experience-context"

const Experience = () => {
    const experienceContext = useContext(ExperienceContext)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { experienceContext.getExperience() }, [])
    const {experience} = experienceContext

    const countExp = (exp) => {
        let experienceCount = 0
        if(exp) {
            exp.forEach(item => {
                const start = Date.parse(item.startDate)
                const end = Date.parse(item.endDate) || Date.now()

                experienceCount += end - start
            })
        }

        return experienceCount / (1000*60*60*24*365.25)
    }

    const years = Math.trunc(countExp(experience))
    const month = Math.trunc(countExp(experience) % 1 * 10)

    return (
        <div className="experience bg-warning py-5 py-lg-6">
            <div className="container">
                <h2>Work Experience <small className="d-block">({years} years and {month} month)</small></h2>

                {experience && experience.map((exp, index) => {
                    return (
                        <React.Fragment key={exp.company}>
                            <hr className="mb-5"/>
                            <div className={`row ${index === experience.length - 1 ? '' : 'mb-5'}`} >
                                <div className="col-lg-3">
                                    <h4 className="mb-0">
                                        <a href={`https://${exp.url}`} rel="noreferrer noopener" target="_blank">{exp.company}</a>
                                    </h4>
                                    <p className="mt-2 small">{exp.startDate} — {exp.endDate}</p>
                                    <p>{exp.position}</p>
                                </div>

                                <div className="col-lg-9">
                                    <div className="row">
                                        <div className="col-md-5">
                                            {exp.aboutPosition.map((item, key) => (
                                                <div className={`item-list ${key === exp.aboutPosition.length - 1 ? '' : 'mb-4'}`} key={key}>
                                                    <h5>{item.name}</h5>
                                                    <ul>
                                                        {item.options.map((o, key) => <li key={key}>{o}</li>)}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="col-md-7 item-list">

                                            <h5>{exp.duties.title}</h5>
                                            <ul>
                                                {exp.duties.options.map((o, key) => <li key={key}>{o}</li>)}
                                            </ul>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}

            </div>
        </div>

    )
}

export default Experience
