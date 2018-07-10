import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

// @TODO: config webpack to use absolute path
// import authService from 'services/AuthService';
import {login} from '../../../services/AuthService';
import './Login.scss';
import '../Register/Register.js'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      token: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleUserNameChange = this.handleUserNameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);

    console.log(this);
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      // redirect if user logged in
      this.props.history.push("/"); // Chuyen trang chua xu ly
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let scope = this;
    // let axiosConfig = {
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     "Access-Control-Allow-Origin": "*",
    //   }
    // };
    // var data = "grant_type=password&username=" + this.state.username + "&password=" + this.state.password;
    // console.log(data);
    // axios.post("http://10.0.0.103:65108/api/oauth/token", data, axiosConfig
    // ).then(function (response) {
    //   console.log(response);
    //   alert("Dang nhap thanh cong");
    //   scope.props.history.push("/dang-ky-tai-khoan");  // Chuyen trang : Chua xu ly
    //   localStorage.setItem("token", response.data.access_token);
    // }).catch(function (error) {
    //   console.log(error);
    //   alert("Dang nhap that bai");
    // })

    login(this.state.username, this.state.password).then(function (response) {
      alert("Dang nhap thanh cong");
      // scope.props.history.push("/dang-ky-tai-khoan");  // Chuyen trang : Chua xu ly
      // localStorage.setItem("token", response.data.access_token);
      scope.updateCookieToken(response.data);
      scope.setState({token: response.data.access_token});
    }).catch(function (error) {
      console.log(error);
      alert("Dang nhap that bai");
    })
  }

  // handleUserNameChange(e) {
  //   this.setState({ username: e.target.value });
  // }
  // handlePasswordChange(e) {
  //   this.setState({ password: e.target.value });
  // }

  onInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  updateCookieToken = (data) => {
    const cookies = new Cookies();
    cookies.set('access_token', data.access_token, {maxAge: data.expires_in});
  }

  render() {
    return (
      <div>
        <nav className="navbar narbar-inverase navbar-no-bg" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Loga.vn</a>
            </div>
          </div>
        </nav>
      <div className="top-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 form-box">
              <div className="f1">
                <h3><b>Đăng nhập hệ thống</b></h3>
                <div className="f1-steps">
                  <div className="f1-progress">
                    <div className="f1-progress-line" data-now-value="25" data-number-of-steps="2"></div>
                  </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    {/* <input name="username" type="text" placeholder="Tên đăng nhập. VD: loga2018" className="form-control" id="txtUserName"
                      required="required" data-required-error="Bạn chưa nhập thông tin này" autoFocus onChange={this.handleUserNameChange}
                      data-content="Tên đăng nhập phải <b>không dấu và </br>không chứa khoảng trắng</b>"
                      data-placement="top" data-toggle="popover" data-trigger="hover" /> */}
                    <input name="username" type="text" placeholder="Tên đăng nhập. VD: loga2018" className="form-control" id="txtUserName"
                      required="required" data-required-error="Bạn chưa nhập thông tin này" autoFocus onChange={this.onInputChange}
                      data-content="Tên đăng nhập phải <b>không dấu và </br>không chứa khoảng trắng</b>"
                      data-placement="top" data-toggle="popover" data-trigger="hover" />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                    {/* <input name="password" type="password" placeholder="Mật khẩu" className="f1-password form-control" id="txtPassword"
                      required="required" data-required-error="Bạn chưa nhập Mật khẩu" onChange={this.handlePasswordChange}
                      data-placement="top" data-toggle="popover" data-trigger="hover" /> */}
                    <input name="password" type="password" placeholder="Mật khẩu" className="f1-password form-control" id="txtPassword"
                      required="required" data-required-error="Bạn chưa nhập Mật khẩu" onChange={this.onInputChange}
                      data-placement="top" data-toggle="popover" data-trigger="hover" />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div>
                    <a className="sign-right" href="#">Đăng ký tài khoản </a>
                    <a className="log-left" href="#">  Quên mật khẩu? </a>
                  </div><br />
                  <div className="f1-buttons">
                    <button className="btn btn-submit" onClick={this.handleSubmit}>Đăng nhập</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
