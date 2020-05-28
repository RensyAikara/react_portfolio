import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link className="navbar-brand" to="/">
                Rensy Tijo Aikara
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>


            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={
                      window.location.pathname === "/" || window.location.pathname === "/home"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/portfolio"
                    className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                  >
                    Portfolio
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/contact"
                    className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
        </nav>
    )
}

export default Navbar;