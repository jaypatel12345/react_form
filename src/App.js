import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import List from './Components/list';
import Register from './Components/register';
import Login from './Components/login';
import Settingspg from './Components/Contact';
import Editdata from './Components/editdata';




function App(props) {

  return (
    <Router>
      <div className="App">
        <List />

        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/settings" component={Settingspg} />
        </Switch>
        <Route exact path="/editdata" component={Editdata} />
      </div>
    </Router>
  );
}

export default App;
