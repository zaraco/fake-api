import React, {Component} from "react";
import axios from "axios";
import './Index.css'




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
const myStyle = {backgroundColor: "lightblue"}

        return (
            <div>

                <h1 style={myStyle}>{data.message} !!</h1>



            </div>
        );
    }
}

export default Index;