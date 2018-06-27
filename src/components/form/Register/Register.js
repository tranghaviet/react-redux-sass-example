import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Register.scss';

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      registerViewModel: {
        UserName: '',
        Email: '',
        FullName: '',
        PhoneNumber: '',
        School: '',
        Password: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentDidMount() {
  //   if(localStorage.getItem("token")) {
  //     axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
  //     axios.defaults.headers.common['content-type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  //     axios.get("").then(
  //       response => {

  //       }
  //     ).catch(
  //       err => console.log(err)
  //     )
  //   }
  // }

  handleChange(e) {
    this.setState({
      registerViewModel: {
        ...this.state.registerViewModel,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.registerViewModel);
  }

  handleSubmit() {
    var scope = this;
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      }
    };

var registerViewModel = this.state.registerViewModel
    axios.post("http://10.0.0.103:65108/api/user/register",
    registerViewModel,
      axiosConfig
    ).then(function (response) {
      console.log("then" + response);
      alert("Dang ky thanh cong");
      localStorage.setItem("token", response.data.access_token);
      scope.props.history.push("./dang-nhap");
    }).catch(error =>{
      console.log("error" + error);
      alert("Dang ky that bai");
    })
  }

  render() {
    return (
      <div className="top-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 form-box">
              <div className="f1">
                <h3><b>Đăng ký tài khoản</b></h3>
                <div className="f1-steps">
                  <div className="f1-progress">
                    <div className="f1-progress-line" data-now-value="25" data-number-of-steps="2" ></div>
                  </div>
                  <div className="f1-step active">
                    <div className="f1-step-icon"><i className="fa fa-user"></i></div>
                    <p>Tài khoản đăng nhập</p>
                  </div>
                  <div className="f1-step">
                    <div className="f1-step-icon"><i className="fa fa-envelope"></i></div>
                    <p>Thông tin nhận tài liệu</p>
                  </div>
                </div>
                <fieldset>
                  <div className="form-group">
                    <input type="text" placeholder="Tên đăng nhập. VD: Loga2018" className="form-control" id="txtUserName" runat="server" clientidmode="static"
                      required="required" data-required-error="Bạn chưa nhập Tên đăng nhập" autoFocus onChange={this.handleChange} name='UserName'
                      data-minlength="4" data-minlength-error="Tên đăng nhập có ít nhất 4 kí tự"
                      data-content="Tên đăng nhập <b>không</b> được chứa tiếng Việt." data-placement="top" data-toggle="popover" data-trigger="hover" />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Mật khẩu" className="f1-password form-control" id="txtPassword" runat="server" clientidmode="static"
                      required="required" data-required-error="Bạn chưa nhập Mật khẩu" onChange={this.handleChange} name='Password'
                      data-minlength="6" data-minlength-error="Mật khẩu có ít nhất 6 kí tự" />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Nhập lại mật khẩu" className="form-control" id="txtRePassword" runat="server" clientidmode="static"
                      required="required" data-required-error="Bạn chưa nhập Mật khẩu"
                      data-match="#txtPassword" data-match-error="Nhập lại mật khẩu không đúng" />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Số điện thoại. VD: 0965123123" className="form-control" id="txtPhone" runat="server" clientidmode="static"
                      required="required" data-required-error="Bạn chưa nhập số điện thoại" onChange={this.handleChange} name='PhoneNumber'
                      data-minlength="10" data-minlength-error="Số điện thoại phải có ít nhất 10 số" />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div >
                    <a href="/dang-nhap">Đăng nhập</a>
                  </div>
                  <div className="f1-buttons">
                    <button type="button" className="btn btn-next">Tiếp theo</button>
                  </div>
                </fieldset>

                <fieldset>
                  <div className="form-group">
                    <input type="text" placeholder="Họ và tên" className="form-control" id="txtFullName" runat="server" clientidmode="static"
                      required="required" data-required-error="Bạn chưa nhập Họ và tên" onChange={this.handleChange}  name='FullName'/>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Email. VD: loga2018@gmail.com" className="form-control" id="txtEmail" runat="server" clientidmode="static"
                      required="required" data-required-error="Bạn chưa nhập Email" onChange={this.handleChange} name='Email'
                      data-content="Các em nhập email để nhận tài liệu miễn phí!" data-placement="top" data-toggle="popover" data-trigger="hover" />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Trường học của em là?" maxlength="1000" className="form-control" id="txtSchool" runat="server" clientidmode="static" onChange={this.handleChange} name='School'/>
                  </div>
                  <div >
                    <a href="/dang-nhap">Đăng nhập</a>
                  </div>
                  <div className="f1-buttons">
                    <button type="button" className="btn btn-previous">Quay lại</button>
                    <button className="btn" runat="server" ID="btnRegisterUser" ClientIDMode="Static" CssClass="btn-submit btn" onClick={this.handleSubmit}  >Dang ky</button>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
