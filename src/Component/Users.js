import React, {Component} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";


class Users extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            users: '',
            error: ''
        }

    }

    componentDidMount() {
        axios.get('https://arman.co.com/fake-api/users.php')
            .then(response => {
                this.setState({
                    message: response.data.message,
                    users: response.data.users
                })
            })
            .catch(error => {
                this.setState({
                    error: 'There is an error'
                })

            })

    }


    render() {
        if (this.state.error !== '') {
            return (
                <>
                    <Alert variant='danger'>
                        {this.state.error}
                    </Alert>
                </>
            )
        } else {

            let u = this.state.users.length ? this.state.users.map((user) =>

                <tr>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.isMarried.toString()}</td>
                </tr>
            ) : <p>There is no user</p>

            return (
                <>
                    <Alert variant='primary'>
                        {this.state.message}
                    </Alert>

                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>isMarried</th>
                        </tr>
                        </thead>
                        <tbody>
                        {u}
                        </tbody>
                    </Table>


                </>
            );
        }
    }
}

export default Users;