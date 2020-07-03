import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>First paragraph, the username: {props.username}</p>
            <p>Second paragraph will not change!</p>
        </div>
    );
};

export default userOutput;