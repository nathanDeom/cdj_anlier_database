import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar-component";
import UpdatesList from "./components/updates-list-component";
import EditUpdate from "./components/edit-update-component";
import CreateUpdate from "./components/create-update-component";
import CreateEventProduct from "./components/create-event-product-component";


function App() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={UpdatesList} />
          <Route path="/edit/:id" component={EditUpdate} />
          <Route path="/update" component={CreateUpdate} />
          <Route path="/create" component={CreateEventProduct} />
        </div>
      </Router>
    );
}

export default App;
