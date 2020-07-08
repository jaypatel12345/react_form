import React, { Component } from "react";
import './Homestyle.css'

import Homedata from "./Homedata";
import Butn from "./Butn";


class Home extends Component{
  constructor() {
    super()
    this.state = {
      data: [],
      dat2:[]
    }
}

  componentDidMount() {
    const Abcd = localStorage.getItem("abcd");
    const abcd = JSON.parse(Abcd);
    console.log(abcd)
    this.setState({
      data: abcd,
    });
    // console.log(this.state.data)
  }


  clrRecord = (index) => {
    let test5 = this.state.data;
    // console.log(test5)
    test5.splice(index, 1);
    // console.log(test5)
    // this.setState({ data });
    // console.log(index);
    // this.setState({
    //   data:test5
    // })
    localStorage.setItem('abcd', JSON.stringify(test5))
    this.props.history.push("/home");

  }

  edtpage = (index) => {
    let test6 = this.state.data[index]
    console.log("test6data", test6)
    this.props.history.push({
      pathname: "/editdata",
      state:{test6,index}
    })

}

  render() {

    return (
      <div className="h1style">
        <h1 className="h1style2">This is Home page</h1>
        {this.state.data.map((listing, index) => {
          // console.log(listing.Email);
          return (
            <div className="csshardh1">
              <Homedata
                index={index}
                fname={listing.First_name}
                lname={listing.Last_name}
                uname={listing.User_name}
                email={listing.Email}
                password={listing.Password}
                mobile={listing.Mobile}
              />
              <div className="btnclass">
                {" "}
                <Butn
                  id="dlt"
                  click={this.clrRecord.bind(this, index)}
                  name="Delete"
                />
                <Butn
                  id="edt"
                  name="Edit"
                  click={this.edtpage.bind(this,index)}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
}
}
export default Home
