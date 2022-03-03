import "./styles/ice-cream.css";
import Header from "./structure/Header";
import React from "react";
import Footer from "./structure/Footer";
import Menu from "./ice-cream/Menu";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import EditIceCream from "./ice-cream/EditIcecream";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Menu} exact />
        <Route path="/menu-item/:menuItemId" component={EditIceCream} exact />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
