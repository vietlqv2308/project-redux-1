import React, { Component } from "react";
import "./App.css";
import User from "./containers/User/User";
import Product from "./containers/Product/Product";
import Header from "./components/Header";
import Home from './containers/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <Header />

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/user">
                            <User />
                        </Route>
                        {/* TODO */}
                        {/* <Route path="/product">
                            <Product />
                        </Route> */}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;