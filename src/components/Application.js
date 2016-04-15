import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import '../styles.scss';
import './application.scss';


class Application extends Component {

  render() {
    return <p>Hello World</p>;
  }
}

render(<Application />, document.getElementById('root'));
