import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './About';
import Porfolio from './Portfolio';
import Contact from './Contact';

ReactDOM.render(
  <React.StrictMode>
    <About />
    <Porfolio />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);
