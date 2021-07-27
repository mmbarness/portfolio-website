import React from 'react'
import '../style/top-bar.scss'

export const TopBar = () => {
    return(
        <div className="top-bar-container">
            <p id="my-name">Matthew Barnes</p>
            <ul id="project-link-list">
                <li id="fullstack-li">
                    <a href="http://record-collector.matthewbarnes.tech/#/" target="_blank">
                        Record Collector
                    </a>
                </li>
                <li id="call-sheet-li">
                    <a href="https://call-sheet.matthewbarnes.tech/" target="_blank">
                        Call Sheet
                    </a>
                </li>
                <li id="home-court-li">
                    <a href="http://www.homecourt.club/#/" target="_blank">
                        Home Court
                    </a>
                </li>                                
            </ul>
        </div>
    )
}

