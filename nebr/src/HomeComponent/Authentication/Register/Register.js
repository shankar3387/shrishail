import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthSer from '../../Server/server';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        user_name: '',
        email: '',
        phone: '',
        password:'',
        otp: ''
      },
      errorMessage: '',
      isExist: true,
    };
  }

  updateChanges = async e => {
    const { name, value } = e.target;
    // const { items ,setState} = this.state;
    if (name === 'email') {
      const res = await AuthSer.postEmailValidation({ email: value });
      this.setState({
        isExist: res.error,
        errorMessage: res.message,
      });
    }else if(name ==='phone'){
      console.log(value.length >=10 )
      // AuthSer.getOtp({phone:val,message:'Otp'}).then(result=>{
      //   console.log(result)
      // })
    }
    console.log(name)
    // this.setState(items=> { name, value });
    // this.setState( items: { user_name: value } });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { isExist, items } = this.state;
    console.log('this');
    console.log(isExist);
    // if (!isExist) {
    //   const res = await AuthSer.postRegistration(items);
    //   if (res.error) {
    //     this.setState({
    //       errorMessage: res.message,
    //     });
    //   }
    // }

    console.log(items);
    // let result = await AuthSer.getRegistration()
    // console.log('result', result)
    // console.log('object', this.state)
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="app-container" style={{ backgroundColor: '#cedaf3' }}>
        <div className="reg_form">
          <div className="row mt-5">
            <div className="col-sm-9 col-md-7 col-lg-10 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Community Signup</h5>
                  <form className="form-signin">
                    <div className="form-group" />
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        id
                        className="form-control"
                        name="user_name"
                        onChange={this.updateChanges}
                        placeholder="Your Name"
                        autoFocus
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        id
                        className="form-control"
                        onChange={this.updateChanges}
                        placeholder="Email"
                        required
                      />
                      <div>{errorMessage}</div>
                    </div>

                    <div className="form-group">
                      <input
                        name="password"
                        type="Password"
                        id
                        className="form-control"
                        onChange={this.updateChanges}
                        placeholder="Password"
                        required
                      />
                      <div>{errorMessage}</div>
                    </div>

                    <div className="form-group">
                      <input
                        name="Confirm Password"
                        type="Confirm Password"
                        className="form-control"
                        placeholder="Confirm Password"
                        required
                      />
                      <div>{errorMessage}</div>
                    </div>

                    <div className="form-row form-group">
                      <div className="col">
                        <input
                          required
                          name="phone"
                          type="text"
                          className="form-control"
                          onChange={this.updateChanges}
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col-lg-9">
                            <input
                              required
                              name="otp"
                              type="text"
                              className="form-control"
                              onChange={this.updateChanges}
                              placeholder="OTP"
                            />
                          </div>
                          <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <i className="fa fa-refresh" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={this.onSubmit}
                      className="btn btn-lg btn-warning text-white btn-block text-uppercase"
                      type="submit"
                    >
                      Continue
                    </button>
                    <div className="mt-4">
                      <div className="float-right pr-2">
                        <Link>
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
