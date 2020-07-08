import React from 'react'

const Btncomp = (props) => {
    return (
        <div>
            <button onClick={props.click}>{props.name}</button>
        </div>
    )
}

export default Btncomp
