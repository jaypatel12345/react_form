import React, { Component } from "react";
import Btncomp from "./btn";
import Inptdata from "./inpt";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fname: "",
      lname: "",
      uname: "",
      password: "",
      mobile: "",
      data: "",
      abcd: [],
    };
  }
  componentDidMount() {
    if (localStorage.getItem("abcd") === "")
      localStorage.setItem("abcd", JSON.stringify(this.state.abcd));
  }
  changing = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  lclstorage =    () => {
    console.log('lclstorage')
    const { fname, lname, uname, email, password, mobile } = this.state;
    const abcd = JSON.parse(localStorage.getItem("abcd"));
    abcd.push({
      First_name: fname,
      Last_name: lname,
      User_name: uname,
      Email: email,
      Password: password,
      Mobile: mobile,
    });
    console.log(abcd);
    localStorage.setItem("abcd", JSON.stringify(abcd));
    this.props.history.push("/");

// console.log(this.state.counter)
//     if (this.state.counter === true) {
//       this.morefunctionality();
//       console.log('reached')
//     }
    
    // const { email, fname, lname, uname, password, mobile } = this.state;
    // localStorage.setItem("fname", fname);
    // localStorage.setItem("lname", lname);
    // localStorage.setItem("uname", uname);
    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);
    // localStorage.setItem("mobile", mobile);
    // this.dust(email, fname, lname, uname, password, mobile);
    //   let abcde = this.state.abcd
    //   abcde.push(f,l,u,e,p,m);
    //   this.setState({
    //       abcd:abcde
    //   })
    //   let abcd=this.state.abcd
    //   localStorage.setItem('abcd',abcd)
  };

  morefunctionality = () => {
    console.log('morefunctionality')
    const { uname,email } = this.state;
 
      const Abcd = localStorage.getItem("abcd");
    const abcde = JSON.parse(Abcd);
    console.log(abcde)
      // this.setState({
      //   data: abcde,
      // });

      // const { data } = this.state;

      const email2 = abcde.filter(
        (item) => item.User_name === uname && item.Email === email
      );
      console.log("emailfilter:", email2, email2.length);

      if (email2.length !== 0) {
        alert("email and password already exist change it");
      } else {
        this.lclstorage()
      }
    
  };

  dust = () => {
console.log('dust function')
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
      this.morefunctionality()
    }

  };

  //   anything = () => {
  //     this.props.history.push({
  //       pathname: "/login",
  //       state: [
  //         {
  //           FirstName: this.state.fname,
  //           LastName: this.state.lname,
  //           UserName: this.state.uname,
  //           Email: this.state.email,
  //           Password: this.state.password,
  //           Mobile: this.state.mobile,
  //         },
  //       ],
  //     });
  //   };
  render() {
    return (
      <div>
        <h1>Welcome this is home page</h1>
        First Name:
        <Inptdata
          name="fname"
          change={this.changing}
          value={this.state.value}
          type="string"
        />
        Last Name:
        <Inptdata
          name="lname"
          change={this.changing}
          value={this.state.value}
          type="string"
        />
        User Name:
        <Inptdata
          name="uname"
          change={this.changing}
          value={this.state.value}
          type="string"
        />
        Email:
        <Inptdata
          name="email"
          change={this.changing}
          value={this.state.value}
          type="string"
        />
        Password:
        <Inptdata
          name="password"
          change={this.changing}
          value={this.state.value}
          type="string"
        />
        Mobile:
        <Inptdata
          name="mobile"
          change={this.changing}
          value={this.state.value}
          type="string"
        />
        <Btncomp click={this.dust} name="Register" />
        
        {/* <Btncomp click={this.lclstorage} name="LocalStorage" /> */}
      </div>
    );
  }
}

export default withRouter(Register);
