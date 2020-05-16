import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import PizzaForm from "./PizzaForm";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <h1>Keenan's Terrible Pizza Service</h1>
        <h2>Wow, it actually works??</h2>
      </header>
      <section>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/pizza" component={PizzaForm}></Route>
      </section>
    </>
  );
};
export default App;
