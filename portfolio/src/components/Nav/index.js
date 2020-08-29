import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand " href="index.html">Anthony Simone</a>
            <button className="navbar-toggler " type="button " data-toggle="collapse " data-target="#navbarNavAltMarkup " aria-controls="navbarNavAltMarkup " aria-expanded="false" aria-label="Toggle navigation ">
                <span className="navbar-toggler-icon " />
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup ">
                <ul className="navbar-nav ml-auto">
                    <li classname="nav-item">
                        <Link to="/about" >
                            <h1>About Button Here</h1>
                        </Link>
                    </li>
                    <li classname="nav-item">
                        <Link to="/portfolio" >
                            <h1>Portfolio Button Here</h1>
                        </Link>
                    </li>
                    <li classname="nav-item">
                        <Link to="/contact" >
                            <h1>Contact Button Here</h1>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;