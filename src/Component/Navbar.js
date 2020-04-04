import React, {Component} from "react";
import {Nav, NavItem, NavLink} from 'react-bootstrap';

class Navbar extends Component {


    render() {
        return (
            <>

                <Nav variant="pills">
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
            </>

        );
    }
}

export default Navbar;