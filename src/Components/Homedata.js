import React from "react";
import "./Homestyle.css";

const Homedata = (props) => {

  return (
    <div className="maindiv">
      <div className="mainsubdiv">
        {" "}
        <div className="div11">
          <div className="div111">
            <img
              src={`https://joeschmoe.io/api/v1/${props.email}`}
              alt="nature"
            />
          </div>
          <div className="div112">
            <p>{props.index}</p>
            <h1>User name: {props.uname}</h1>
          </div>
        </div>
        <div className="div12">
          <p>First name: {props.fname}</p>
          <p>Last name: {props.lname}</p>
          <p>Email: {props.email}</p>
          <p>Password:{props.password}</p>
          <p>Mobile:{props.mobile}</p>
        </div>
      </div>
    </div>

  );
};

export default Homedata;
