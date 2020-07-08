import React, { Component } from "react";
import Inptdata from "./inpt";
import "./Homestyle.css";
import Butn from "./Butn";

class Editdata extends Component {
  constructor() {
    super();
    this.state = {
      edtfname: "",
      edtlname: "",
      edtpassword: "",
      edtemail: "",
      edtmobile: "",
      edtuname: "",
      gtstate: 0,
      abcd: [],
    };
  }

  componentDidMount = () => {
    const data1 = this.props.location.state.index;
    const username = this.props.location.state.test6.User_name;
    console.log("username=>", username);
    console.log('checking git')
    this.setState({
      gtstate: data1,
      edtuname: username,
    });
  };

  changing = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  dust = () => {
    console.log("dust function");
    const { fname, lname, uname, email, password, mobile } = this.state;
    console.log(fname);
    if (
      email === "" ||
      fname === "" ||
      lname === "" ||
      uname === "" ||
      password === "" ||
      mobile === ""
    ) {
      alert("please fill all empty fields");
    }

    if (
      email !== "" &&
      fname !== "" &&
      lname !== "" &&
      uname !== "" &&
      password !== "" &&
      mobile !== ""
    ) {
      this.lclstorage();
    }
  };

  lclstorage = () => {
    const {
      edtfname,
      edtlname,
      edtemail,
      edtpassword,
      edtmobile,
      edtuname,
      gtstate,
    } = this.state;
    const abcd = JSON.parse(localStorage.getItem("abcd"));

    console.log("data check=>", abcd);
    const gotobj = abcd[gtstate];
    console.log("obj to edt=>", gotobj);
    abcd[gtstate] = {
      First_name: edtfname,
      Last_name: edtlname,
      User_name: edtuname,
      Email: edtemail,
      Password: edtpassword,
      Mobile: edtmobile,
    };
    console.log("data pushing=>", abcd);
    localStorage.setItem("abcd", JSON.stringify(abcd));
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="edtdatastyle">
        <h1>This is Editdata page</h1>
        <div className="edtdatastyle2">
          User Name:{this.state.gtstate.User_name}
          <br></br>
          First Name:
          <Inptdata
            name="edtfname"
            change={this.changing}
            value={this.state.value}
            type="string"
          />
          Last Name:
          <Inptdata
            name="edtlname"
            change={this.changing}
            value={this.state.value}
            type="string"
          />
          Email:
          <Inptdata
            name="edtemail"
            change={this.changing}
            value={this.state.value}
            type="string"
          />
          Password:
          <Inptdata
            name="edtpassword"
            change={this.changing}
            value={this.state.value}
            type="string"
          />
          Mobile:
          <Inptdata
            name="edtmobile"
            change={this.changing}
            value={this.state.value}
            type="string"
          />
          <Butn click={this.dust} name="Save" />
        </div>
      </div>
    );
  }
}

export default Editdata;
