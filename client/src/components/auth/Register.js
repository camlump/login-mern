import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import photo from '../images/bootcamp.jpg'


import './Register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="register-container">
        <div className="empty-nav">
        <Link to="/" className="home-link">Back to home</Link>
        </div>

        <div className="row">
          <div>
            

            <div className="form-container">

              <h4><b>Create your account</b></h4>

              <p className="login-p">
                Already have an account? <Link className="login" to="/login">Log in</Link>
              </p>

             <hr/>
          
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field">
                <p className="input-title">Name</p>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
                {/* <label htmlFor="name">Name</label> */}
                <p className="red-text">{errors.name}</p>
              </div>
              <div className="input-field">
                <p className="input-title">Email</p>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                />
                {/* <label htmlFor="email">Email</label> */}
              </div>
                <p className="red-text">{errors.email}</p>
              <div className="input-field">
                <p className="input-title">Password</p>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                />
                {/* <label htmlFor="password">Password</label> */}
              </div>
                <p className="red-text">{errors.password}</p>

              <div className="input-field">
                <p className="input-title">Comfirm Password</p>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                />
                {/* <label htmlFor="password2">Confirm Password</label> */}
              </div>
                <p className="red-text">{errors.password2}</p>
                <button
                  type="submit"
                  className="sign-up-button">
                  Sign up
                </button>
              </form>
              </div>
          </div>
          
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
