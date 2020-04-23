import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Gestion du stock CDJ Anlier</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/" className="nav-link">Liste des mises à jour</Link>   
                    </li>
                    <li className="navbar-item">
                    <Link to="/update" className="nav-link">Créer une mise à jour</Link>   
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">Evénement et produit</Link>   
                    </li>                    
                </ul>
                </div>
            </nav>
        );
    }
    
}