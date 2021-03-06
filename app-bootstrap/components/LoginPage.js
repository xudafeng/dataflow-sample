import React, { Component } from 'react';
import '../App.css';
import {
  Button,
  InputItem
} from 'antd-mobile';
import classnames from 'classnames';
import 'antd-mobile/dist/antd-mobile.css';

import * as CONSTANTS from '../constants';

class LoginPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      const elem = document.querySelector('.main-title');
      if (elem) {
        elem.click();
      }
    }, 10 * 1000);
  }

  render() {
    return (
      <div className={classnames({
        page: true,
        hide: this.props.isLogin
      })}>
        <div className="login">
          <h1
            style={{
              marginTop: '20%'
            }}
            className="main-title"
            onClick={(e) => {
              e.target.classList.add('red');
            }}
          >
            {CONSTANTS.TITLE}
          </h1>
          <div style={{
            marginTop: '30px'
          }}
          >
            <InputItem
              autoFocus
              clear
              placeholder={CONSTANTS.USERNAME_TIPS}
            />
          </div>
          <div style={{
            marginTop: '10px'
          }}
          >
            <InputItem
              clear
              type="password"
              placeholder={CONSTANTS.PASSWORD_TIPS}
            />
          </div>
          <Button style={{
            marginTop: '70%'
          }} onClick={this.props.loginHandle}>
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default LoginPage;

