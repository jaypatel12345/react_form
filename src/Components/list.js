import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const List = () => {
    return (
      <div className="liststyle">
        <div className="abcd">
          <Link to="/register">register</Link>
        </div>
        <div className="abcd">
          <Link to="/">login</Link>
        </div>
        <div className="abcd">
          <Link to="/home">home</Link>
        </div>
        <div className="abcd">
          <Link to="/about">about</Link>
        </div>
        <div className="abcd">
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    );
}

export default List
