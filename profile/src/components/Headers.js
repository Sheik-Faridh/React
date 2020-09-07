import React from 'react'

function Headers(props) {
    return (
        <div className="header">
            <h2 className="uppercase">{props.Profile.name}</h2>
            <span className="uppercase">{props.Profile.position}</span>
        </div>
    );
}

export default Headers;
