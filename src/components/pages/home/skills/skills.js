import React, {useContext, useEffect} from 'react'
import TrustContext from "../../../../context/trust/trust-context"

const Skills = () => {
    const trustContext = useContext(TrustContext)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { trustContext.getTrust() }, [])
    const {trust: {skills}, loading} = trustContext
    if (loading) return <p>Loading...</p>

    return (
        <div className="experience">
            <h2>Skills</h2>
            {skills && skills.map(s => (
                <div className="progress mb-3" key={s.id}>
                    <div className="progress-bar bg-warning text-body text-left pl-3" role="progressbar"
                         style={{width: `${s.count}%`}}>
                        {s.name}
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Skills
