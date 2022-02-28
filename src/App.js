import "./styles/ice-cream.css";
import Header from "./structure/Header";
import React from "react";
import Footer from "./structure/Footer";
import Menu from "./ice-cream/Menu";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <Footer />
    </React.Fragment>
  );
}

export default App;
