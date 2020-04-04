import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boostrap from './Component/Boostrap';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Index from "./Component/Index";
import Products from "./Component/Products";
import Users from "./Component/Users";



class App extends Component{
  render() {
    return (

        <>
            <Router>
                <Boostrap/>
                <Route exact path="/" component={Index}/>
                <Route path="/products" component={Products}/>
                <Route path="/users" component={Users}/>
            </Router>

        </>




    );
  }
}

export default App;
