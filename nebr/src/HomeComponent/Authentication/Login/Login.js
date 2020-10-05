import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import AuthSer from '../../Server/server';
import Community from '../../CommunityModal/Community';
// import store from 'store';
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        email: '',
      },
      errorMessage: '',
    };
    //  this.refs;
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = async (e) => {
    console.log(this.props);
    const { history } = this.props;
    // console.log(this)
    e.preventDefault();
    const { username, password } = this.state;
    
    // this.setState({ error: false });

    // if (!(username === 'george' && password === 'foreman')) {
    // //   return this.setState({ error: true });
    // }
    // const login = await AuthSer.postLogin(this.state.items)
    // console.log("you're logged in. yay!");
    // // store.set('loggedIn', true);
    // console.log('login', login)
    // if(!login.error){
    //   localStorage.setItem('admin',true)
    //   this.props.history.push('/admin/');

    // }else {
    //   this.setState({errorMessage :login.message})
    // }
   
    localStorage.setItem('login_type', 'admin');
    this.setState({ errorMessage: 'login.message' });
    console.log(this.state);
    if (localStorage.getItem('login_type') === 'admin') {
      history.push('/admin');
    } else {
      history.push('/user');
    }
  };
  childHandler = (e) =>{
    console.log(e)
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ items: { [name]: value } });
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="app-container" style={{ backgroundColor: '#cedaf3' }}>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-4">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Community Login</h5>
                  <form onSubmit={this.onSubmit} className="form-signin">
                    <div className="form-group">
                         <Community logChange={this.childHandler} />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-row form-group">
                      <div className="col">
                        <input type="password" className="form-control" id placeholder="Password" name="password" />
                      </div>
                    </div>
                    <div>{errorMessage}</div>

                    <button className="btn btn-lg btn-warning text-white btn-block text-uppercase" type="submit">
                      Login
                    </button>

                    <div className="mt-4">
                      <div className="float-right pr-2">
                        <Link to="/SellerLogin" href>
                          <i
                            className="fa fa-arrow-circle-right"
                            aria-hidden="true"
                            style={{ fontSize: 30, color: '#ffa500' }}
                          />
                        </Link>
                      </div>
                      <p className="mb-0 pt-1">Want to Login as a SuperNebr Seller?</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.any,
};
