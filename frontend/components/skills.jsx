import React from 'react'
import { JsSVG } from '../svgs/jsSVG'
import { ReactSVG } from '../svgs/reactSVG'
import '../style/skills.scss'
import { RailsSVG } from '../svgs/railsSVG'
import { PythonSVG } from '../svgs/python'
import { NodeSVG } from '../svgs/nodeSVG'

export const Skills = () => {
    return(
        <div id="skills">
            <h2 id="skills-header">Skills:</h2>
            <div id="skill-column-filler"></div>
            {<JsSVG id="js-item-p" className="skill-svg"/>}
            <p className="skill-text">Javascript</p>
            {<ReactSVG className="skill-svg"/>}
            <p id="react-item-p" className="skill-text">React</p>
            {<RailsSVG className="skill-svg"/>}
            <p id="rails-item-p" className="skill-text">Rails</p>
            {<NodeSVG className="skill-svg"/>}
            <p id="node-item-p" className="skill-text">node</p>
        </div>
    )
}