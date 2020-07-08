import React, { Component } from "react";
import Btncomp from "./btn";
import Inptdata from "./inpt";
import { withRouter ,Link} from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email1: "",
      password1: "",
      email: "",
      password: "",
      data: "",
      mchange:false
    };
  }

  changing = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    // const Email = localStorage.getItem('abcd.[0]');
    //   const Password = localStorage.getItem("password");
    const Abcd = localStorage.getItem('abcd')
    // console.log('raw data:',Abcd)
      const abcd=JSON.parse(Abcd)
    // console.log('parsed data:',abcd)

    this.setState({
      data: abcd,
      mchange:true

    });
  }

  emptyfield = () => {
   const { data, email1, password1 } = this.state;

     const email = data.filter(
       (item) => item.Email === email1 && item.Password === password1
       
     );
    console.log('emailfilter:', email,email.length)
console.log(email1, password1);
    if (email.length !== 0) {
      this.props.history.push("/home");
    } else {
      alert('wrong email or password')
    }
}

  anything = () => {
    console.log('anything function')
    const { email1, password1 } = this.state
    // console.log('email=>',email1)
    if (email1 === "" || password1 === "") {
      alert("please fill all feilds");
      // console.log('showing')
    }
    if (email1 !== null && password1 !== null) {
     
      this.emptyfield()
      // this.lclstorage();
      // this.props.history.push("/login");
    }

  };
  render() {
    return (
      <div>
        <h1>Welcome this is home page</h1>
        Email:
        <Inptdata
          name="email1"
          change={this.changing}
          value={this.state.value}
          type="string"
        />
        Password:
        <Inptdata
          name="password1"
          change={this.changing}
          value={this.state.value}
          type="string"
        />
        <Btncomp click={this.anything} name="Login" />
        <Link to="/register">Register here</Link>
      </div>
    );
  }
}

export default withRouter(Login);
