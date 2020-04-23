import React from "react";
import { Component } from "react";
import axios from "axios";

export default class EditUpdate extends Component {
    constructor(props) {
        super(props);

        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeChange = this.onChangeChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product : '',
            event: '',
            quantity: 0,
            change: '',
            products: [],
            events: []
        }
    }

    componentDidMount() {
        axios.get('/updates/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    product: res.data.product,
                    event: res.data.event,
                    quantity: res.data.quantity,
                    change: res.data.change
                })
            })
            .catch(function (err) {
                console.log(err);
            })
        
        axios.get('/products/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        products : res.data.map(product => product.name),
                        product : res.data[0].name
                    })
                }
            })

        axios.get('/events/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        events : res.data.map(event => event.name + ' ' + event.date.substring(0,10)),
                        event : res.data[0].event + ' ' + res.data[0].date.substring(0,10)
                    })
                }
            })
            
    }

    onChangeProduct(e) {
        this.setState ({
            product: e.target.value
        });
    }  
    
    onChangeEvent(e) {
        this.setState ({
            event: e.target.value
        });
    }  

    onChangeQuantity(e) {
        this.setState ({
            quantity: e.target.value
        });
    } 

    onChangeChange(e) {
        this.setState ({
            change: e.target.value
        });
    }  

    onSubmit(e) {
        e.preventDefault();

        const update = {
            product: this.state.product,
            event: this.state.event,
            quantity: this.state.quantity,
            change: this.state.change
        }

        console.log(update);

        axios.post('/updates/update/' + this.props.match.params.id , update)
            .then(res => console.log(res.data));


        window.location = '/';
    }

    render() {
        return(
        <div>
            <h3>Editer une mise à jour</h3> 
            <form onSubmit={this.onSubmit}>

            <div className="form-group">
                    <label>Produit : </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.product}
                        onChange={this.onChangeProduct}>
                        {
                            this.state.products.map(function(product) {
                                return <option
                                    key={product}
                                    value={product}>{product}    
                                    </option>;
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label>Event : </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.event}
                        onChange={this.onChangeEvent}>
                        {
                            this.state.events.map(function(event) {
                                return <option
                                    key={event}
                                    value={event}>{event}    
                                    </option>;
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label>Quantité : </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.quantity}
                        onChange={this.onChangeQuantity}
                    /> 
                </div>

                <div className="form-group">
                    <label>Modification : </label>
                    <select 
                        required
                        className="form-control"
                        value={this.state.change}
                        onChange={this.onChangeChange}
                    > 
                        <option></option>
                        <option>Ajout</option>
                        <option>Retrait</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="submit" value="Editer un produit" className="btn btn-primary" />
                </div>

            </form>
        </div>
        )
    }
}