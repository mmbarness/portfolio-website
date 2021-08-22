import React, {useEffect, useContext} from 'react'
import TrustContext from "../../../../context/trust/trust-context"

const Education = () => {
    const trustContext = useContext(TrustContext)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { trustContext.getTrust() }, [])
    const {trust: {education}} = trustContext

    return (
        <div>
            <div className="experience">
                <h2>Education</h2>

                {education && education.map(e => (
                    <div className="row mb-3" key={e.id}>

                        <div className="col-lg-4">
                            <h4 className="mb-0">{e.company}</h4>
                            <p className="text-muted mt-2">{e.startDate} — {e.endDate}</p>
                        </div>

                        <div className="col-lg-8">
                            <h5 className="mb-3">{e.speciality}</h5>
                            <p>{e.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
