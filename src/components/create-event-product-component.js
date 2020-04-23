import React from "react";
import { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name : '',
            date : new Date(),
        }
    }

    onChangeName(e) {
        this.setState ({
            name: e.target.value
        });
    } 

    onChangeDate(date) {
        this.setState ({
            date: date
        });
    }  

    onSubmit(e) {
        e.preventDefault();

        const event = {
            name: this.state.name,
            date: this.state.date,
        }

        console.log(event);

        axios.post('/events/add', event)
            .then(res => console.log(res.data));

        this.setState ({
            name: '',
            date : new Date(),
        });
    }

    render() {
        return(
        <div>
            <h3>Créer un événement</h3> 
            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label>Nom : </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}
                    /> 
                </div>

                <div className="form-group">
                    <label>Date : </label>
                    <div>
                        <DatePicker 
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Valider" className="btn btn-primary" />
                </div>

            </form>
        </div>
        )
    }
}

class CreateProduct extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name : '',
        }
    }

    onChangeName(e) {
        this.setState ({
            name: e.target.value
        });
    } 

    onSubmit(e) {
        e.preventDefault();

        const event = {
            name: this.state.name,
        }

        console.log(event);

        axios.post('/products/add', event)
            .then(res => console.log(res.data));

        this.setState ({
            name: '',
        });
    }

    render() {
        return(
        <div>
            <h3>Créer un produit</h3> 
            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label>Nom : </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}
                    /> 
                </div>

                <div className="form-group">
                    <input type="submit" value="Valider" className="btn btn-primary" />
                </div>

            </form>
        </div>
        )
    }
}

function CreateEventProduct() {
    return (
        <div>
            <CreateEvent/>
            <CreateProduct/>
        </div>
    )
}

export default CreateEventProduct;