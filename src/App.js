import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import Details from "./pages/Details";
const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movie">
          <Movie/>
        </Route>
        <Route exact path="/tv">
          <Tv/>
        </Route>
        <Route exact path="/:category/:id">
          <Details/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
