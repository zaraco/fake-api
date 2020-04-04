import React, {Component} from "react";
import {Nav, NavItem, NavLink} from 'react-bootstrap';

class Boostrap extends Component {


    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink href="/">Index</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/products">Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/users" >Users</NavLink>
                    </NavItem>
                </Nav>
            </div>

        );
    }
}

export default Boostrap;