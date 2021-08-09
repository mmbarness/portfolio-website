import React from 'react'
import './no-match.scss'

const NoMatch = (props) => {
    return (
        <React.Fragment>
            <div className="container py-5 mt-5">
                <h1 className="mb-0 no-match-header">404 Page <br/>not found</h1>
            </div>
        </React.Fragment>
    )
}

export default NoMatch
