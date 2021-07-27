import React from 'react'
import {logger} from 'redux-logger';
import {Link} from 'react-router-dom'
import '../style/home.scss'
import { EmailMe } from './email-me';

export const Home = (props) => {

    return (
        <div id="home-container">
            <img id="headshot" src="https://portfolio-yep.s3.amazonaws.com/headshot-cropped.jpg" alt="my-headshot" />
            <div id="bio-block">
                <h2 id="bio-block-header">Hiya</h2>
                <p classname="bio-block-text" id="bio-block-body-1">
                    A year ago, I had just returned to {<a href="https://www.newyorker.com/magazine/2020/11/02/pandemic-essentials-of-all-kinds-at-hunky-dory">Hunky Dory</a>} as a bartender, a restaurant/bar in Crown Heights, and was happy to be back. However, the three or so months of that first lockdown had already given me enough time to realize it wasn’t what I wanted to be doing for much longer. Spurred on by my peers, I gave programming more and more serious consideration; a year later I’m now conversant in React {<a href="https://github.com/mmbarness/recordcollector/blob/main/frontend/components/artists/artist_show.jsx">hooks</a>}, {<a href="https://github.com/mmbarness/home_court/blob/8c12270de2833b434b07ce916bcd5baf54a74e78/frontend/src/components/session/address_form_field.jsx">typeahead search</a>}, and CSS techniques like {<a href="https://github.com/mmbarness/call-sheet/blob/master/src/styles/infoModal.css">flexbox</a>}, {<a href="https://github.com/mmbarness/recordcollector/blob/7d0140a66ca25b992a58a63110f5e1d5961dd906/app/assets/stylesheets/artist/artist-show-page.scss#L54">grid</a>}, and {<a href="https://github.com/mmbarness/call-sheet/blob/e433233e7c767e3ad40606197896ddcbc240c054/src/styles/topBar/search.scss#L37">animations</a>}. 
                </p>
                <p classname="bio-block-text" id="bio-block-body-2">
                    
                </p>
            </div>
        </div>
    )
}
