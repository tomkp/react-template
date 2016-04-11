import { Component } from 'react';
import { render } from 'react-dom';
import '../styles.scss';
import './application.scss';


class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <p>Hello World</p>;
  }
}

render(<Application />, document.getElementById('root'));
