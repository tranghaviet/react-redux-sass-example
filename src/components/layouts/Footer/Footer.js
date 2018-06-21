import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <ul className="list-unstyled clear-margins">
                <li className="widget-container widget_nav_menu">
                <h1 className="title-widget">Khóa học</h1>
                  <div id="CourseFooter">
                    <a href="#">content</a>
                  </div>
                  </li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-3">
              <ul className="list-unstyled clear-margins">
                <li className="widget-container widget_nav_menu">
                  <h1 className="title-widget">Đề thi</h1>
                  <div id="ExamFooter">
                    <a href="#">content</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3">
              <ul className="list-unstyled clear-margins">
                <li className="widget-container widget_nav_menu">
                  <h1 className="title-widget">Tài liệu</h1>
                  <ul></ul>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3">
              <ul className="list-unstyled clear-margins">
                <li className="widget-container widget_recent_news">
                  <h1 className="title-widget">Liên hệ </h1>
                  <div className="footerp">
                    <h2 className="title-median">Loga Team</h2>
                    <p><b>Email:</b> <a href="mailto:mail.loga.vn@gmail.com">mail.loga.vn@gmail.com</a></p>
                    <p>
                      <b>Số điện thoại</b>: 0977.543.462
                    </p>
                    <p><b>Địa chỉ:</b> Số 68, ngõ 66B Triều Khúc, Thanh Xuân, Hà Nội </p>
                  </div>
                  <div className="social-icons">
                    <ul className="nomargin">
                      <a target="_blank" href="https://www.facebook.com/LogaOnlineVN/"><i className="fa fa-facebook-square fa-3x social-fb"></i></a>
                      <a target="_blank" href="https://www.youtube.com/user/MrTheluc95"><i className="fa fa-youtube-square fa-3x social-yt"></i></a>
                      <a target="_blank" href="https://plus.google.com/u/0/+Th%E1%BA%BFL%E1%BB%B1cNguy%E1%BB%85n"><i className="fa fa-google-plus-square fa-3x social-gp"></i></a>
                      <a target="_blank" href="https://twitter.com/NguyenTheluc95"><i className="fa fa-twitter-square fa-3x social-tw"></i></a>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
