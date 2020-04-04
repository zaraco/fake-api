import React, {Component} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";


class Products extends Component{
    constructor() {
        super();
        this.state = {
            message: '',
            products: '',
            error: ''
        }

    }
    componentDidMount() {
        axios.get('https://arman.co.com/fake-api/products.php')
            .then(response => {
                this.setState({
                    message: response.data.message,
                    products: response.data.products
                })
            })
            .catch(error => {
                this.setState({
                    error: 'There is an error'
                })

            })

    }


    render() {
        const {message, products, error} = this.state
       let p = products.length ? products.map((product)=>
           <tr>
               <td>{product.name}</td>
               <td>{product.amount}</td>
               <td>{product.price}</td>
           </tr>
       ) : <p>There is no products</p>
        return (
            <>
                <Alert  variant='success'>
                    {message}
                </Alert>

                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {p}
                    </tbody>
                </Table>


            </>
        );
    }
}

export default Products;