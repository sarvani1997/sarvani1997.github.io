import { useState } from 'react';
import './About.css';

import photo from './photo.jpg';
import GitHub from './GitHub.png';
import gmail from './gmail.png';

function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="name">
          <p>Hello,</p>
          <h4>I'm Sarvani</h4>
          <p>Jr. Front-end Developer</p>
        </div>
        <div className="photo">
          <img src={photo} alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default About;
