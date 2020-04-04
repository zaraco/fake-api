import React, {Component} from "react";
import axios from "axios";


class Index extends Component{
    constructor() {
        super();
        this.state = {
           data: '',
           error: ''
        }

    }
    componentDidMount() {
        axios.get('https://arman.co.com/fake-api/index.php')
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
            .catch(error => {
                this.setState({
                    error: 'There is an error'
                })

            })

    }


    render() {
        const {data, error} = this.state
        return (
            <>

                {data.message}
            </>
        );
    }
}

export default Index;