import React from 'react'
import './big-image.scss'

const BigImage = ({person: {img}}) => {
    return <div className="f-screen-image min-vh-100" style={{backgroundImage: `url(${img})`}} />
}

export default BigImage
