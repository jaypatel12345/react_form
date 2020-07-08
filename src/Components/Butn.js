import React from 'react'
import './Homestyle.css'

const Butn = (props) => {
    return (
      <div className="btnstyle">
        <button id={props.id} onClick={props.click}>{props.name}</button>
        
      </div>
    );
}

export default Butn
