import React, { Component } from 'react';
import { Link } from 'react-router';

class Topbar extends Component {


    render() {
        console.log(this);
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">Free Charge</Link>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
        </div>{/* /.container-fluid */}
      </nav>


        );
    }
}

export default Topbar;
