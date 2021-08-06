import React, { useState } from 'react'
import {logger} from 'redux-logger';
import {Link} from 'react-router-dom'
import '../style/home.scss'
import { EmailMe } from './email-me';
import { Resume } from './resume';
import { JsSVG } from '../svgs/jsSVG';
import { ReactSVG } from '../svgs/reactSVG';
import { Skills } from './skills';
import { useEffect } from 'react';


export const Home = (props) => {

    const [resumeModalVisible, setresumeModalVisible] = useState(false);
    const [emailModalVisible, setemailModalVisible] = useState(false);

    let emailModal = document.getElementsByClassName('email-modal-is-open')[0]

    const handleEmailModal = () => {
        setemailModalVisible(!emailModalVisible)
        let modalScreen = document.getElementById('modal-screen');
        (modalScreen.style.display === "block") ? modalScreen.style.display = "none" : modalScreen.style.display = "block";
    }

    const handleResumeModal = () => {
        setresumeModalVisible(!resumeModalVisible)
        let modalScreen = document.getElementById('modal-screen');
        (modalScreen.style.display === "block") ? modalScreen.style.display = "none" : modalScreen.style.display = "block";
    }

    return (
        <div id="home-container">
            <img id="headshot" src="https://portfolio-yep.s3.amazonaws.com/headshot-cropped.jpg" alt="my-headshot" />
            <div id="bio-block">
                <h2 id="bio-block-header">Hiya,</h2>
                <p className="bio-block-text" id="bio-block-body-1">
                    A year ago, I had just returned to my job as a bartender at {<a href="https://www.newyorker.com/magazine/2020/11/02/pandemic-essentials-of-all-kinds-at-hunky-dory" target="_blank">Hunky Dory</a>}, a restaurant/bar in Crown Heights, and was happy to be back. However, the three or so months of that first lockdown had already given me enough time to realize it wasn’t what I wanted to be doing for much longer. Spurred on by my peers, I gave programming more and more serious consideration; a year later I’m now conversant in React {<a href="https://github.com/mmbarness/recordcollector/blob/main/frontend/components/artists/artist_show.jsx" target="_blank">hooks</a>}, {<a href="https://github.com/mmbarness/home_court/blob/8c12270de2833b434b07ce916bcd5baf54a74e78/frontend/src/components/session/address_form_field.jsx" target="_blank">typeahead search</a>}, and CSS techniques like {<a href="https://github.com/mmbarness/call-sheet/blob/master/src/styles/infoModal.css" target="_blank">flexbox</a>}, {<a href="https://github.com/mmbarness/recordcollector/blob/7d0140a66ca25b992a58a63110f5e1d5961dd906/app/assets/stylesheets/artist/artist-show-page.scss#L54" target="_blank">grid</a>}, and {<a href="https://github.com/mmbarness/call-sheet/blob/e433233e7c767e3ad40606197896ddcbc240c054/src/styles/topBar/search.scss#L37" target="_blank">animations</a>}. 
                </p>
                <div id="bio-block-p2">
                    {<Skills/>}
                </div>
                <div id="page-buttons">
                    <button className='page-button' id="email-button" onClick={()=> handleEmailModal()}>email me!</button>
                    <button className='page-button' id="resume-button" onClick={()=> handleResumeModal()}>Resume</button>  
                </div>
            </div>
            {EmailMe({emailModalVisible, setemailModalVisible, handleEmailModal})}
            {Resume({resumeModalVisible, setresumeModalVisible, handleResumeModal})}
        </div>
    )
}
