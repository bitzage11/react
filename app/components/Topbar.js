import React, { Component } from 'react';
import { Link } from 'react-router';

class Topbar extends Component {


    render() {
        console.log(this);
        return (
            <div>
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
            <Link className="navbar-brand" to="#" data-toggle="modal" data-target="#login-modal">Login/Register</Link>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
        </div>{/* /.container-fluid */}
      </nav>
      <div className="modal fade" id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
        <div className="modal-dialog">
          <div className="loginmodal-container">
            <h1>Login to Your Account</h1><br />
            <form>
              <input type="text" name="user" placeholder="Username" />
              <input type="password" name="pass" placeholder="Password" />
              <input type="submit" name="login" className="login loginmodal-submit" defaultValue="Login" />
            </form>
            <div className="login-help">
              <a href="#">Register</a> - <a href="#">Forgot Password</a>
            </div>
          </div>
        </div>
      </div>


</div>

        );
    }
}

export default Topbar;
