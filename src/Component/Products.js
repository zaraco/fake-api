import React, {Component} from "react";
import axios from "axios";


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
       let p = products.length ? products.map((product)=> <p>{product.name} - {product.amount} - {product.price}</p>) : <p>There is no products</p>
        return (
            <>

                {message}
                {p}
            </>
        );
    }
}

export default Products;