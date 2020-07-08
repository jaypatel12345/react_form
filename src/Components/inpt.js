import React from 'react'

const Inputdata = (props) => {
    return (
        <div>
            <input name={props.name} onChange={props.change} value={props.value} type={props.type}/>
        </div>
    )
}

export default Inputdata
