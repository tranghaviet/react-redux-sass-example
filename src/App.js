import React, { Component } from "react";
import Counter from "./components/Counter";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/form/Login/Login.js';
import Register from './components/form/Register/Register.js';
import axios from 'axios';

axios.defaults.baseURL = 'http://10.0.0.103:65108/api/';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" render={() => (<h1 className="btn">Home</h1>)} />
        <Route exact path="/dang-nhap" component={Login} />
        <Route exact path="/dang-ky-tai-khoan" component={Register} />
        {/* <Counter /> */}
        {/* <Route exact path="/danh-sach-khoa-hoc" component={} />
        <Route exact path="/de-thi" component={} />
        <Route exact path="/bai-viet" component={} />
        <Route exact path="/nap-the" component={} />
        <Route exact path="/thong-tin-ca-nhan/:UserName" component={} />
        <Route exact path="/khoa-hoc/:CourseID/:CourseName" component={} />  */}

      </Switch>
    </div>
  </Router>
)

export default App;
