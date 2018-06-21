import React from 'react';
import { Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <header>
        <Nav className="navbar navbar-inverse navbar-fixed-top navbar-no-bg" role="navigation">
          <div className="container">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/" title="Trang chủ Loga">
                <img src="./LogaVN.png" alt="Loga.vn" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="top-navbar-1">
              <ul className="nav navbar-nav navbar-right navbar-search-button">
                <li><a className="search-button" href="#"><i className="glyphicon glyphicon-search"></i></a></li>
              </ul>

              <div className="navbar-form navbar-right navbar-search-form disabled wow fadeInLeft">
                <div className="form-group">
                  <input type="text" name="search" placeholder="Tìm kiếm..." className="search form-control" />
                </div>
              </div>

              <ul className="nav navbar-nav navbar-right navbar-menu-items wow fadeIn">
                <li><a href="#">Khóa học</a></li>
                <li><a href="#">Đề thi trắc nghiệm</a></li>
                <li><a href="#">Bài viết</a></li>
                <li><a href="#">Câu hỏi</a></li>
                <li id="DivNotLogin" runat="server">
                  <a type="button" className="btn box-login"  href="#"> Đăng nhập / Đăng ký</a>
                </li>
              </ul>

            </div>
          </div>
        </Nav>
      </header>
    )
  }
}
