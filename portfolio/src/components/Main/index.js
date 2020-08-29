import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "../Contact";
import About from "../About";
import Portfolio from "../Portfolio";

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={About}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
        </Switch>
    )
}


export default Main;