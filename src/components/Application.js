import React from 'react';
import { render } from 'react-dom';
import '../styles.scss';
import './application.scss';

const Application = () => <p>Hello World!!</p>;

render(<Application />, document.getElementById('root'));
