import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Index from "./Component/Index";
import Products from "./Component/Products";
import Users from "./Component/Users";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";



class App extends Component {
    render() {
        return (

            <>
                <Navbar/>
                <Container>
                    <Row>
                        <Col>
                            <Router>
                                <Route exact path="/" component={Index}/>
                                <Route path="/products" component={Products}/>
                                <Route path="/users" component={Users}/>
                            </Router>
                        </Col>
                    </Row>
                </Container>

            </>


        );
    }
}

export default App;
