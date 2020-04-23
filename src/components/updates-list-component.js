import React from "react";
import { Component } from "react";
import axios from "axios";

const Update = props => (
    <tr>
        <td>{props.update.product}</td>
        <td>{props.update.event} </td>
        <td>{props.update.quantity}</td>
        <td>{props.update.change}</td>
        <td>
            <a href={"/edit/"+props.update._id} class="btn btn-outline-primary" role="button">Editer</a>
            <input class="btn btn-outline-danger" type="submit" value="Supprimer" onClick={() => {props.deleteUpdate(props.update._id) }}></input>
        </td>
    </tr>
)

export default class UpdatesList extends Component {
    constructor(props) {
        super(props);

        this.deleteUpdate = this.deleteUpdate.bind(this);

        this.state = {updates: []};
    }

    componentDidMount() {
        axios.get('/updates/')
            .then(res => {
                this.setState({ updates: res.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deleteUpdate(id) {
        axios.delete('/updates/' + id)
            .then(res => console.log(res.data));
        
            this.setState({
                updates: this.state.updates.filter(el => el._id !== id)
            });
    }

    updatesList() {
        return this.state.updates.map(currentupdate => {
            return <Update update={currentupdate} deleteUpdate={this.deleteUpdate} key={currentupdate._id}/>;
        })
    }
    
    render() {
        return(
            <div>
                <h3>Liste des mises à jour</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Produit</th>
                            <th>Evénement</th>
                            <th>Quantité</th>
                            <th>Modification</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.updatesList() }
                    </tbody>
                </table>
            </div>
        )
    }
}