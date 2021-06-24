import React, { Component } from "react"
import "./App.css"
import User from "./pages/User/User"
import Product from "./pages/Product/Product"
import Header from "./common_components/Header"
import Home from "./pages/Home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

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

            <Route path="/product">
              <Product />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
