import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Component/Home";
import Products from "./Component/Products";
import Users from "./Component/Users";

class App extends Component{
  render() {
    return (

            <Router>
                <Route exact path="/" component={Home}/>
                <Route path="/products" component={Products}/>
                <Route path="/users" component={Users}/>
            </Router>


    );
  }
}

export default App;
