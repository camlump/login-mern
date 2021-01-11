import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Landing.css";

class landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="bg-image"></div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                
                <li class="nav-item">
                  <Link to="/register" class="nav-link">
                    Sign up
                  </Link>
                </li>
                <li class="nav-item">
                <Link to="/login" class="nav-link">
                    Login in
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        <div className="landing-content">
          <div className="text-content">
            <h2 className="title-content">
             GADUE
            </h2>
            <h4 className="sub-title">
             Do you need a way to keep track of your work?
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default landing;
