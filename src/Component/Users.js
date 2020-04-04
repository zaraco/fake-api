import React, {Component} from "react";
import axios from "axios";


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
        let u = this.state.users.length ? this.state.users.map((user)=> <p>{user.name} - {user.age} - {user.isMarried.toString()}</p>) : <p>There is no user</p>
        return (
            <>

                {this.state.message}
                {u}
            </>
        );
    }
}

export default Users;